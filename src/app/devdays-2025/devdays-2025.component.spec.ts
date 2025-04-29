import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Devdays2025Component } from './devdays-2025.component';

describe('Devdays2025Component', () => {
  let component: Devdays2025Component;
  let fixture: ComponentFixture<Devdays2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,  // ✅ you must import this here
        Devdays2025Component       // ✅ also your component
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devdays2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
