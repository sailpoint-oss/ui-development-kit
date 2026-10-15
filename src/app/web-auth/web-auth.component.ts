import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';

// Capture the OAuth callback parameters when the module loads, before the router
// starts. The app uses hash routing (/#/home?success=true), and the startup
// navigation to /home drops the query string before this component initializes.
let oauthCallbackParams: URLSearchParams | null = new URLSearchParams(window.location.hash.split('?')[1] || '');

export type AuthEvent = {
  success: boolean;
  message?: string;
  username?: string;
};

@Component({
  selector: 'app-web-auth',
  templateUrl: './web-auth.component.html',
  styleUrls: ['./web-auth.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
]
})
export class WebAuthComponent implements OnInit {
  @Output() authEvent = new EventEmitter<AuthEvent>();

  isLoading = false;
  isAuthenticated = false;
  username = '';
  errorMessage = '';
  private csrfToken = '';
  private sessionId = '';

  private http = inject(HttpClient);

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Initialize session ID
    this.initializeSessionId();

    // Check if we're handling an OAuth callback. Use the parameters only once per page load.
    const queryParams = oauthCallbackParams || new URLSearchParams();
    oauthCallbackParams = null;
    if (queryParams.has('success')) {
      void this.completeLogin(queryParams.get('login_code'));
    } else if (queryParams.has('error')) {
      const error = queryParams.get('message') || 'Authentication failed';
      this.showError(error);
    } else {
      // Check initial login status and emit event (silent check)
      void this.checkLoginStatus(false);
    }
  }

  private initializeSessionId(): void {
    // Try to get existing session ID from localStorage
    this.sessionId = localStorage.getItem('custom-session-id') || '';

    if (!this.sessionId) {
      // Generate a new session ID
      this.sessionId = this.generateSessionId();
      localStorage.setItem('custom-session-id', this.sessionId);
      console.log('Generated new session ID:', this.sessionId);
    } else {
      console.log('Using existing session ID:', this.sessionId);
    }
  }

  /**
   * Exchange the one-time login code from the OAuth callback for the
   * authenticated session ID issued by the server
   */
  private async completeLogin(loginCode: string | null): Promise<void> {
    if (!loginCode) {
      this.showError('Authentication failed');
      return;
    }

    try {
      this.csrfToken = await this.fetchCsrfToken();

      const apiUrl = environment.webApiUrl || '/api';
      const result = await this.http.post<{ sessionId: string }>(`${apiUrl}/auth/complete-login`, { loginCode }, {
        headers: this.getRequestHeaders(),
        withCredentials: true
      }).toPromise();

      if (!result?.sessionId) {
        throw new Error('No session ID received');
      }

      this.sessionId = result.sessionId;
      localStorage.setItem('custom-session-id', this.sessionId);
      // The CSRF token belongs to the pre-login session
      this.csrfToken = '';
    } catch (error) {
      console.error('Error completing login:', error);
      this.showError('Authentication failed');
      return;
    }

    await this.checkLoginStatus(true);
  }

  private generateSessionId(): string {
    // Generate a random session ID similar to what the server was doing
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private getRequestHeaders(): { [key: string]: string } {
    const headers: { [key: string]: string } = {};

    if (this.csrfToken) {
      headers['x-csrf-token'] = this.csrfToken;
    }

    if (this.sessionId) {
      headers['x-session-id'] = this.sessionId;
    }

    return headers;
  }

  private async fetchCsrfToken(): Promise<string> {
    try {
      interface CsrfTokenResponse {
        csrfToken: string;
      }

      const apiUrl = environment.webApiUrl || '/api';
      const data = await this.http.get<CsrfTokenResponse>(`${apiUrl}/auth/csrf-token`, {
        headers: this.getRequestHeaders(),
        withCredentials: true
      }).toPromise();

      if (!data) {
        throw new Error('No CSRF token received');
      }

      return data.csrfToken;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      throw error;
    }
  }

  async authenticate(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      // Fetch CSRF token first
      console.log('Fetching CSRF token...');
      this.csrfToken = await this.fetchCsrfToken();
      
      // Call the server's authentication endpoint
      console.log('Calling auth endpoint...');
      const apiUrl = environment.webApiUrl || '/api';
      interface AuthResponse {
        success: boolean;
        authUrl?: string;
      }

      const result = await this.http.post<AuthResponse>(`${apiUrl}/auth/web-login`, {}, {
        headers: this.getRequestHeaders(),
        withCredentials: true
      }).toPromise();
      
      if (result && result.success && result.authUrl) {
        console.log('Redirecting to:', result.authUrl);
        window.location.href = result.authUrl;
      } else {
        console.error('Authentication failed, missing success or authUrl:', result);
        this.showError('Failed to initiate authentication');
        this.isLoading = false;
      }
    } catch (error) {
      console.error('Authentication error:', error);
      const message = error instanceof Error ? error.message : 'Failed to connect to authentication service';
      this.showError(message);
      this.isLoading = false;
    }
  }

  async checkLoginStatus(showSuccessMessage: boolean = false): Promise<void> {
    try {
      const apiUrl = environment.webApiUrl || '/api';
      const status = await this.http.get<any>(`${apiUrl}/auth/login-status`, {
        headers: this.getRequestHeaders(),
        withCredentials: true
      }).toPromise();
      
      if (status.isLoggedIn) {
        this.isAuthenticated = true;
        this.username = status.username || status.environment || 'User';
        this.authEvent.emit({
          success: true,
          username: this.username
        });
        if (showSuccessMessage) {
          this.showSuccess(`Successfully authenticated as ${this.username}`);
        }
      } else {
        this.isAuthenticated = false;
        this.username = '';
        // Always emit the current state, even if not authenticated
        this.authEvent.emit({
          success: false
        });
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      this.isAuthenticated = false;
      this.username = '';
      // Emit failure state on error
      this.authEvent.emit({
        success: false
      });
    }
  }

  async logout(): Promise<void> {
    this.isLoading = true;
    
    try {
      // Fetch CSRF token for logout
      if (!this.csrfToken) {
        console.log('Fetching CSRF token for logout...');
        this.csrfToken = await this.fetchCsrfToken();
      }
      
      const apiUrl = environment.webApiUrl || '/api';
      await this.http.post(`${apiUrl}/auth/logout`, {}, {
        headers: this.getRequestHeaders(),
        withCredentials: true
      }).toPromise();
      
      // Clear the CSRF token after successful logout
      this.csrfToken = '';
      this.isAuthenticated = false;
      this.username = '';
      this.authEvent.emit({
        success: false
      });
      this.showSuccess('Successfully logged out');
    } catch (error) {
      console.error('Logout error:', error);
      const message = error instanceof Error ? error.message : 'Failed to logout';
      this.showError(message);
    } finally {
      this.isLoading = false;
    }
  }

  showError(message: string): void {
    this.errorMessage = message;
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: 'error-snackbar'
    });
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'success-snackbar'
    });
  }
}