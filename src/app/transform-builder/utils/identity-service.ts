import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, Observable, of, switchMap } from 'rxjs';
import { IdentityDocumentsV2025, SearchV2025ApiSearchPostRequest } from 'sailpoint-api-client';
import { SailPointSDKService } from '../../core/services/electron/sailpoint-sdk.service';


@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  
  // BehaviorSubject to store the selected identities
  private selectedIdentitiesSubject = new BehaviorSubject<IdentityDocumentsV2025[]>([]);
  selectedIdentities$ = this.selectedIdentitiesSubject.asObservable();

  constructor(private http: HttpClient) {
    // Load selected identities from local storage if available
    this.loadSelectedIdentitiesFromStorage();
  }

  
  getIdentitiesByProfile(
    profileId: string,
    sdkService: SailPointSDKService,
    searchQuery?: string
  ): Observable<IdentityDocumentsV2025[]> {
  
    let queryString = `identityProfile.id:${profileId}`;

    if (searchQuery?.trim()) {
        const escaped = searchQuery.replace(/"/g, '\\"'); // escape quotes if necessary
        queryString += ` AND (name:*${escaped}*)`;
    }

    const request: SearchV2025ApiSearchPostRequest = {
      searchV2025: {
        indices: ['identities'],
        query: {
          query: queryString
        },
        sort: ['name']
      },
      limit: 250
    };

  
    return from(sdkService.searchPost(request) || Promise.resolve([])).pipe(
      catchError(err => {
        console.error('Search request failed:', err);
        return of([]); // Fail gracefully
      }),
      switchMap(response => {
        if ('data' in response) {
          return of(response.data as IdentityDocumentsV2025[]);
        } else {
          return of([]);
        }
      })
    );
  }
  

  /**
   * Get a specific identity by ID
   */
//   getIdentity(id: string): Observable<Identity> {
//     // Use mock data in development environment
//     console.log(`Using mock identity data for ID: ${id}`);
    
//     // Search through all profiles for the identity
//     for (const profileId in this.mockIdentities) {
//       const identity = this.mockIdentities[profileId].find(i => i.id === id);
//       if (identity) {
//         return of(identity).pipe(
//           delay(300) // Simulate network delay
//         );
//       }
//     }
    
//     return throwError(() => new Error('Identity not found'));
    
//     // Commented out real API call code
//     /*
//     return this.http.get<Identity>(`${this.apiUrl}/${id}`).pipe(
//       catchError(error => {
//         console.error(`Error fetching identity with id ${id}:`, error);
//         return throwError(() => new Error('Failed to fetch identity details. Please try again later.'));
//       })
//     );
//     */
//   }

  /**
   * Update the selected identities
   */
  updateSelectedIdentities(identities: IdentityDocumentsV2025[]): void {
    this.selectedIdentitiesSubject.next(identities);
    // Save to local storage for persistence
    localStorage.setItem('selectedIdentities', JSON.stringify(identities));
  }

  /**
   * Add an identity to the selection
   */
  addSelectedIdentity(identity: IdentityDocumentsV2025): void {
    const currentIdentities = this.selectedIdentitiesSubject.value;
    // Check if identity is already selected
    if (!currentIdentities.some(item => item.id === identity.id)) {
      const updatedIdentities = [...currentIdentities, identity];
      this.updateSelectedIdentities(updatedIdentities);
    }
  }

  /**
   * Remove an identity from the selection
   */
  removeSelectedIdentity(identityId: string): void {
    const currentIdentities = this.selectedIdentitiesSubject.value;
    const updatedIdentities = currentIdentities.filter(item => item.id !== identityId);
    this.updateSelectedIdentities(updatedIdentities);
  }

  /**
   * Clear all selected identities
   */
  clearSelectedIdentities(): void {
    this.updateSelectedIdentities([]);
  }

  /**
   * Load selected identities from local storage
   */
  private loadSelectedIdentitiesFromStorage(): void {
    const storedIdentities = localStorage.getItem('selectedIdentities');
    if (storedIdentities) {
      try {
        const identities = JSON.parse(storedIdentities);
         console.log('Loaded identities from local storage:', identities);
        this.selectedIdentitiesSubject.next(identities);
      } catch (e) {
        console.error('Error parsing stored identities:', e);
        localStorage.removeItem('selectedIdentities');
      }
    }
  }
}
