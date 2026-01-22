import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationManagementComponent } from './certification-management.component';

describe('CertificationManagementComponent', () => {
  let component: CertificationManagementComponent;
  let fixture: ComponentFixture<CertificationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Certification Management');
  });
});
