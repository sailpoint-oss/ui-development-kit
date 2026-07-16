import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import type { Identity } from 'sailpoint-api-client/dist/identities/api';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {
  private identities: Identity[] = [];
  private dataLoadedSubject = new BehaviorSubject<boolean>(false);
  private isCompleteDataSubject = new BehaviorSubject<boolean>(false);
  
  // Expose as observable to allow components to react to data loaded state
  public dataLoaded$: Observable<boolean> = this.dataLoadedSubject.asObservable();
  public isCompleteData$: Observable<boolean> = this.isCompleteDataSubject.asObservable();

  constructor() {}

  setIdentities(identities: Identity[], isCompleteDataset: boolean) {
    this.identities = [...identities];
    this.dataLoadedSubject.next(true);
    this.isCompleteDataSubject.next(isCompleteDataset);
  }

  getIdentities(): Identity[] {
    return [...this.identities]; // Return a copy to prevent direct modification
  }

  clearIdentities() {
    this.identities = [];
    this.dataLoadedSubject.next(false);
    this.isCompleteDataSubject.next(false);
  }
  
  hasLoadedData(): boolean {
    return this.dataLoadedSubject.getValue() && this.identities.length > 0;
  }
  
  isDataComplete(): boolean {
    return this.isCompleteDataSubject.getValue();
  }
}