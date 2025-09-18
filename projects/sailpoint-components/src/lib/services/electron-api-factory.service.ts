import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { WebApiService, ElectronAPIInterface } from './web-api.service';

/**
 * A simple service that provides API access for both Electron and Web environments.
 */
@Injectable({
  providedIn: 'root'
})
export class ElectronApiFactoryService {
  /**
   * Get the appropriate API based on environment
   */
  public getApi(): ElectronAPIInterface {
    if (this.electronService.isElectron) {
      return this.electronService.electronAPI as ElectronAPIInterface;
    } else {
      return this.webApiService;
    }
  }
  
  /**
   * Check if running in Electron environment
   */
  public get isElectron(): boolean {
    return this.electronService.isElectron;
  }
  
  constructor(
    private electronService: ElectronService,
    private webApiService: WebApiService
  ) {}
  
  /**
   * Configure the web API URL (only applies to web mode)
   */
  configureApiUrl(url: string): void {
    if (!this.electronService.isElectron) {
      this.webApiService.setApiUrl(url);
    }
  }
}