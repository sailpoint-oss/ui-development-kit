import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColabComponent } from './colab.component';

describe('ColabComponent', () => {
  let component: ColabComponent;
  let fixture: ComponentFixture<ColabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('CoLab Marketplace');
  });
});
