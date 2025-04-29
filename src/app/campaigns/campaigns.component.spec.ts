import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { campaignsComponent } from './campaigns.component';

describe('campaignsComponent', () => {
  let component: campaignsComponent;
  let fixture: ComponentFixture<campaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatDialogModule, campaignsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(campaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
