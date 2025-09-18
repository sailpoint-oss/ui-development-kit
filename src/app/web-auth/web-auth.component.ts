import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
    CommonModule,
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

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Check if we're handling an OAuth callback
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('success')) {
      void this.checkLoginStatus();
    } else if (queryParams.has('error')) {
      const error = queryParams.get('message') || 'Authentication failed';
      this.showError(error);
    }
  }

  private async fetchCsrfToken(): Promise<string> {
    try {
      const response = await fetch('/api/auth/csrf-token', {
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
      }
      
      interface CsrfTokenResponse {
        csrfToken: string;
      }
      
      const data: CsrfTokenResponse = await response.json();
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
      const response = await fetch('/api/auth/web-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': this.csrfToken
        },
        credentials: 'include' // Important for session cookies
      });
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('CSRF token validation failed');
        }
        throw new Error(`Authentication request failed: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success && result.authUrl) {
        console.log('Redirecting to:', result.authUrl);
        window.location.href = result.authUrl;
        
        // Also keep the original redirect as a backup with a slight delay
        setTimeout(() => {
          console.log('Fallback redirect executing...');
          window.location.href = result.authUrl;
        }, 100);
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

  async checkLoginStatus(): Promise<void> {
    try {
      const response = await fetch('/api/auth/login-status', {
        credentials: 'include' // Important for session cookies
      });
      
      const status = await response.json();
      
      if (status.isLoggedIn) {
        this.isAuthenticated = true;
        this.username = status.username || 'User';
        this.authEvent.emit({
          success: true,
          username: this.username
        });
        this.showSuccess(`Successfully authenticated as ${this.username}`);
      } else {
        this.isAuthenticated = false;
        // Don't show error for initial check
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      this.isAuthenticated = false;
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
      
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': this.csrfToken
        },
        credentials: 'include'
      });
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('CSRF token validation failed');
        }
        throw new Error(`Logout request failed: ${response.status}`);
      }
      
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