import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformsComponent } from './transforms.component';

describe('TransformsComponent', () => {
  let component: TransformsComponent;
  let fixture: ComponentFixture<TransformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
