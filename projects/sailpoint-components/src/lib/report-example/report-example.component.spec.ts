import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportExampleComponent } from './report-example.component';

describe('ReportExampleComponent', () => {
  let component: ReportExampleComponent;
  let fixture: ComponentFixture<ReportExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Identity Analytics');
  });
});
