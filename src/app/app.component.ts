import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription, combineLatest } from 'rxjs';
import { ConfigService, ComponentInfo, ElectronApiFactoryService } from 'sailpoint-components';
import { APP_CONFIG } from '../environments/environment';
import { ConnectionService, Connection, SessionStatus, EnvironmentInfo } from './services/connection.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
})

export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('logoImage') logoImageRef!: ElementRef<HTMLImageElement>;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // UI and state flags
  isSmallScreen: boolean = false;
  sidenavOpened = true;
  isConnected = false;
  isDarkTheme = false;
  connectionName: string = '';
  sessionStatus: SessionStatus | undefined = undefined;
  currentEnvironment: EnvironmentInfo | undefined = undefined;
  sessionStatusDisplay: string = 'Checking...';

  private subscriptions = new Subscription();

  // Active features and logo path
  enabledComponents: ComponentInfo[] = [];
  logoPath = '';

  constructor(
    private electronService: ElectronApiFactoryService,
    private translate: TranslateService,
    private connectionService: ConnectionService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private configService: ConfigService,
  ) {
    // Set default language
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall]).subscribe((result) => {
      this.isSmallScreen = result.matches;
      this.sidenavOpened = !this.isSmallScreen;
    });

    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    // Watch for screen size changes to adjust layout
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
        this.sidenavOpened = !this.isSmallScreen;
      });

    // Platform-specific logging
    if (electronService.getApi().isElectron) {
      console.log('Run in electron');
    } else {
      console.log('Run in browser');
    }


    // Subscribe to connection state changes
    this.subscriptions.add(
      this.connectionService.isConnected$.subscribe((connection: Connection) => {
        console.log('App component received connection state:', connection);
        this.isConnected = connection.connected;
        this.connectionName = connection.name || '';
        
        if (!connection.connected) {
          this.router.navigate(['/home']).catch((error) => {
            console.error('Navigation error:', error);
          });
        }
      })
    );

    // Subscribe to session status changes
    this.subscriptions.add(
      this.connectionService.sessionStatus$.subscribe((status: SessionStatus | undefined) => {
        console.log('App component received session status:', status);
        this.sessionStatus = status;
        this.sessionStatusDisplay = this.timeUntilExpiry || 'Checking...';
      })
    );

    // Subscribe to current environment changes
    this.subscriptions.add(
      this.connectionService.currentEnvironment$.subscribe((environment: EnvironmentInfo | undefined) => {
        this.currentEnvironment = environment;
      })
    );
  }

  ngOnInit(): void {
    // Combine theme config and dark mode stream for live updates
    combineLatest([
      this.configService.theme$,
      this.configService.isDark$,
    ]).subscribe(([, isDark]) => {
      this.isDarkTheme = isDark;

      // Resolve logo path based on current theme
      this.logoPath = this.configService.getLogoUrl(isDark);

      // Apply logo with a cache-busting timestamp
      const logo = this.logoImageRef?.nativeElement;
      if (logo) {
        logo.onload = () => { this.configService.logoUpdated$.next(); return; };

        const src = this.logoPath?.startsWith('data:')
          ? this.logoPath
          : `${this.logoPath?.split('?')[0]}?t=${Date.now()}`;

        // Defer setting logo to avoid layout conflicts
        setTimeout(() => {
          logo.src = src;
        }, 100);
      }
    });

    // Watch component enablement state
    this.configService.enabledComponents$.subscribe((components) => {
      this.enabledComponents = components;
    });
  }

  /**
   * Returns true if the given component is enabled.
   */
  isComponentEnabled(componentName: string): boolean {
    return this.enabledComponents.some(
      (component) => component.name === componentName && component.enabled
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  /**
   * Toggles between light and dark themes.
   */
  async toggleTheme(): Promise<void> {
    const newMode = this.isDarkTheme ? 'light' : 'dark';
    await this.configService.setCurrentThemeMode(newMode);
  }

  /**
   * Falls back to default logo if logo fails to load.
   */
  useFallbackLogo() {
    this.logoPath = this.configService.getLogoUrl(this.isDarkTheme);
  }

  /**
   * Toggle the state of the side navigation.
   */
  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  onNavItemClick(event: MouseEvent) {
    if (!this.isConnected) {
      event.preventDefault();
      return;
    }

    if (this.isSmallScreen) {
      void this.sidenav.close();
    }
  }

  /**
   * Disconnects from Identity Security Cloud and navigates home.
   */
  async disconnectFromISC() {
    await this.electronService.getApi().disconnectFromISC();
    this.connectionService.connectedSubject$.next({ connected: false });
    this.router.navigate(['/home']).catch((error) => {
      console.error('Navigation error:', error);
    });
  }

  // Getters for template
  get isSessionValid(): boolean {
    return this.connectionService.isSessionValid;
  }

  get sessionExpiryTime(): string | undefined {
    return this.connectionService.sessionExpiryTime;
  }

  get sessionExpiryDate(): Date | undefined {
    return this.connectionService.sessionExpiryDate;
  }

  get timeUntilExpiry(): string | undefined {
    const expiryDate = this.sessionExpiryDate;
    if (!expiryDate) {
      return undefined;
    }

    const now = new Date();
    const timeDiff = expiryDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return 'Expired';
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }

  get isRefreshing(): boolean {
    return this.connectionService.isSessionRefreshing;
  }
}
