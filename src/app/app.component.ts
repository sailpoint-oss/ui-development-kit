import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { ConnectComponent } from './connect/connect.component';
import { ElectronService } from './core/services';
import { ConnectionService } from './shared/connection.service';


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
    ConnectComponent,
  ],
})
export class AppComponent {
  isSmallScreen: boolean = false;
  sidenavOpened = true;
  isConnected = false;
  isDarkTheme = false;

  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private connectionService: ConnectionService,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver
  ) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall]).subscribe((result) => {
      this.isSmallScreen = result.matches;
      this.sidenavOpened = !this.isSmallScreen;
    });

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }

    this.connectionService.isConnected$.subscribe(connection => {
      this.isConnected = connection.connected;
    });

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.isDarkTheme = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      console.log('Dark theme enabled');
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      console.log('Dark theme disabled');
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
