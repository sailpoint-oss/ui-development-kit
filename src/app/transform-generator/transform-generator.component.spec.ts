import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformGeneratorComponent } from './transform-generator.component';

describe('TransformGeneratorComponent', () => {
  let component: TransformGeneratorComponent;
  let fixture: ComponentFixture<TransformGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
