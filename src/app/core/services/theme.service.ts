// src/app/core/services/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // start with whatever’s in localStorage, or false
  private _dark$ = new BehaviorSubject<boolean>(
    localStorage.getItem('theme') === 'dark'
  );
  readonly isDark$ = this._dark$.asObservable();

  setDark(isDark: boolean) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this._dark$.next(isDark);
  }
}
