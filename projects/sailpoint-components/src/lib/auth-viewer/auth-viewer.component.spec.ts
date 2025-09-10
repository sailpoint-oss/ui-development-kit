import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthViewerComponent } from './auth-viewer.component';

describe('AuthViewerComponent', () => {
  let component: AuthViewerComponent;
  let fixture: ComponentFixture<AuthViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Auth Viewer');
  });
});
