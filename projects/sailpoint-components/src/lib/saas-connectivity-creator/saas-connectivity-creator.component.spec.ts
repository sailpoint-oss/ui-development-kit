import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaasConnectivityCreatorComponent } from './saas-connectivity-creator.component';

describe('SaasConnectivityCreatorComponent', () => {
  let component: SaasConnectivityCreatorComponent;
  let fixture: ComponentFixture<SaasConnectivityCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasConnectivityCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaasConnectivityCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
