import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElectronApiFactoryService } from 'sailpoint-components';

export type Connection = {
  connected: boolean;
  name?: string;
}

export type AuthMethods = "oauth" | "pat";

export type SessionStatus = {
  isValid: boolean;
  needsRefresh: boolean;
  authtype?: AuthMethods;
  expiry?: Date;
  lastChecked: Date;
}

export type EnvironmentInfo = {
  name: string;
  apiUrl: string;
  baseUrl: string;
  authtype: AuthMethods;
  clientId?: string;
  clientSecret?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ConnectionService implements OnDestroy {
  connectedSubject$ = new BehaviorSubject<Connection>({ connected: false });
  sessionStatusSubject$ = new BehaviorSubject<SessionStatus | undefined>(undefined);
  currentEnvironmentSubject$ = new BehaviorSubject<EnvironmentInfo | undefined>(undefined);

  isSessionRefreshing = false;
  isDestroyed = false;

  isConnected$ = this.connectedSubject$.asObservable();
  sessionStatus$ = this.sessionStatusSubject$.asObservable();
  currentEnvironment$ = this.currentEnvironmentSubject$.asObservable();

  constructor(private apiFactoryService: ElectronApiFactoryService) {
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
  }

  async validateConnectionImmediately(): Promise<void> {
    try {

      // This timeout is needed to avoid a race condition that can occur between this service and the data being checked on the backend.
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Use the lightweight token status check to avoid double validation
      const tokenStatus = await this.apiFactoryService.getApi().checkAccessTokenStatus();

      console.log('tokenStatus', tokenStatus);

      const sessionStatus: SessionStatus = {
        isValid: tokenStatus.accessTokenIsValid,
        needsRefresh: tokenStatus.needsRefresh,
        authtype: tokenStatus.authtype,
        expiry: tokenStatus.expiry,
        lastChecked: new Date()
      };

      console.log('sessionStatus', sessionStatus);

      this.sessionStatusSubject$.next(sessionStatus);

      if (!tokenStatus.accessTokenIsValid) {
        console.warn('Connection validation failed immediately after establishment');
      }
    } catch (error) {
      console.error('Error during immediate connection validation:', error);
      const sessionStatus: SessionStatus = {
        isValid: false,
        needsRefresh: false,
        authtype: undefined,
        lastChecked: new Date()
      };
      this.sessionStatusSubject$.next(sessionStatus);
    }
  }


  async handleSessionExpired(): Promise<void> {
    this.connectedSubject$.next({ connected: false });
    await this.reconnectSession();
  }

  async reconnectSession(): Promise<void> {
    const environment = this.currentEnvironmentSubject$.value;
    if (!environment) {
      console.error('No environment available for reconnection');
      return;
    }

    try {
      const loginResult = await this.apiFactoryService.getApi().unifiedLogin(environment.name);
      if (loginResult.success) {
        this.connectedSubject$.next({ connected: true, name: environment.name });
        await this.validateConnectionImmediately();
      } else {
        console.error('Failed to reconnect:', loginResult.error);
      }
    } catch (error) {
      console.error('Reconnection failed:', error);
    }
  }

  // Utility methods for components
  get isSessionValid(): boolean {
    const status = this.sessionStatusSubject$.value;
    return status?.isValid ?? false;
  }

  get sessionExpiryDate(): Date | undefined {
    const status = this.sessionStatusSubject$.value;
    return status?.expiry;
  }

  get sessionExpiryTime(): string | undefined {
    const status = this.sessionStatusSubject$.value;
    if (!status?.expiry) {
      return undefined;
    }
    return status.expiry.toLocaleTimeString();
  }
}
