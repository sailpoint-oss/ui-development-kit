import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigHubComponent } from './config-hub.component';

describe('ConfigHubComponent', () => {
  let component: ConfigHubComponent;
  let fixture: ComponentFixture<ConfigHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
