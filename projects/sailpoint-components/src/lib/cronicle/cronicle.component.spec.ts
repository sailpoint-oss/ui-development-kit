import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CronicleComponent } from './cronicle.component';

describe('CronicleComponent', () => {
  let component: CronicleComponent;
  let fixture: ComponentFixture<CronicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CronicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Cronicle');
  });
});
