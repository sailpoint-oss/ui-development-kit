import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { VelocityEditorDialogComponent } from './velocity-editor-dialog.component';

describe('VelocityEditorDialogComponent', () => {
  let component: VelocityEditorDialogComponent;
  let fixture: ComponentFixture<VelocityEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocityEditorDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            disableClose: false,
            backdropClick: () => of(null),
            close: jasmine.createSpy('close'),
          },
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { code: '' },
        },
        {
          provide: ConfigService,
          useValue: { isDark$: of(false) },
        },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelocityEditorDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
