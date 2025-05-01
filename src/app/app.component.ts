import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { ElectronService } from './core/services';
import { ConnectionService } from './shared/connection.service';
import { ThemeService } from './core/services/theme.service';
import { APP_CONFIG } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSmallScreen = false;
  sidenavOpened = true;
  isConnected = false;
  isDarkTheme = false;

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private connectionService: ConnectionService,
    private themeService: ThemeService,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver
  ) {
    this.initLanguage();
    this.initLayoutObserver();
    this.initPlatformLogging();
    this.initConnectionObserver();
    this.initThemeObserver();
  }

  private initLanguage(): void {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);
  }

  private initLayoutObserver(): void {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        this.sidenavOpened = !this.isSmallScreen;
      });
  }

  private initPlatformLogging(): void {
    if (this.electronService.isElectron) {
      console.log('Running in Electron');
      console.log('ipcRenderer:', this.electronService.ipcRenderer);
      console.log('childProcess:', this.electronService.childProcess);
    } else {
      console.log('Running in browser');
    }
  }

  private initConnectionObserver(): void {
    this.connectionService.isConnected$.subscribe(connection => {
      this.isConnected = connection.connected;
    });
  }

  private initThemeObserver(): void {
    this.themeService.isDark$.subscribe(dark => {
      this.isDarkTheme = dark;
      if (dark) {
        this.renderer.addClass(document.body, 'dark-theme');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme');
      }
    });
  }

  toggleTheme(): void {
    this.themeService.setDark(!this.isDarkTheme);
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
