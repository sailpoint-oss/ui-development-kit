import { Injectable } from '@angular/core';

declare global {
  interface Window {
    electronAPI: any;
  }
}

@Injectable({
  providedIn: 'root'
})



export class ElectronService {
  isElectron: boolean = false;
  electronAPI: any;

  constructor() {
    // Setup the electronAPI
    if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent.indexOf('Electron') >= 0) {
      this.isElectron = true;
      if (window.electronAPI) {
        this.electronAPI = window.electronAPI;
      } else {
        console.error('Electron API is not available in Electron environment');
      }
    } else {
      console.log('Running in web mode, Electron API not expected');
    }
  }
}