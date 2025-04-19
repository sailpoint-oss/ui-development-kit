import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpTransformComponent } from './hp-transform.component';

describe('HpTransformComponent', () => {
  let component: HpTransformComponent;
  let fixture: ComponentFixture<HpTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpTransformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
