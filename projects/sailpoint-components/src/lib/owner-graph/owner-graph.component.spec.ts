import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerGraphComponent } from './owner-graph.component';

describe('OwnerGraphComponent', () => {
  let component: OwnerGraphComponent;
  let fixture: ComponentFixture<OwnerGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Owner Graph');
  });
});
