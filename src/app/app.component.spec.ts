import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideRouter, Routes } from '@angular/router';
import { ConnectionService } from './services/connection.service';
import { of } from 'rxjs';

(globalThis as any).structuredClone = <T>(obj: T): T =>
  JSON.parse(JSON.stringify(obj)) as T;

const routes: Routes = [
  { path: 'home', component: AppComponent }, // Mock route for 'home'
];

describe('AppComponent', () => {
  let mockConnectionService: any;

  beforeEach(waitForAsync(() => {
    mockConnectionService = {
      isConnected$: of({ connected: false }),
      countdown$: of(null),
      sessionStatus$: of(null),
      currentEnvironment$: of(null),
      startSessionMonitoring: jest.fn().mockReturnValue(undefined), // Use jest.fn() for mocking
      stopSessionMonitoring: jest.fn().mockReturnValue(undefined), // Use jest.fn() for mocking
    };

    void TestBed.configureTestingModule({
      declarations: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter(routes),
        { provide: ConnectionService, useValue: mockConnectionService }, // Mock ConnectionService
      ],
      imports: [AppComponent, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
