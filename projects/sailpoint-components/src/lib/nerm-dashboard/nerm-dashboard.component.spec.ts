import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NermDashboardComponent } from './nerm-dashboard.component';

describe('NermDashboardComponent', () => {
  let component: NermDashboardComponent;
  let fixture: ComponentFixture<NermDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NermDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NermDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Non-Employee Resource Management');
  });
});
