
// Angular core and common modules
import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { ElectronApiFactoryService } from '../services/electron-api-factory.service';
import { ConfigService, ThemeConfig } from '../services/config.service';

// Angular Material UI modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule     } from '@angular/material/select';

// Required for deep cloning
declare function structuredClone<T>(value: T): T;

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss',
})
export class ThemePickerComponent implements OnInit {
  title = 'Theme Picker';
  selectedLogoFileName = '';

  // Reference to the logo <img> in the template
  @ViewChild('logoImage') logoImageRef!: ElementRef<HTMLImageElement>;

    // now type the fields so that `key` is ONLY one of the keys of ThemeConfig:
  readonly colorFields: Array<{ label: string; key: keyof ThemeConfig }> = [
    { label: 'Primary',       key: 'primary'       },
    { label: 'Secondary',     key: 'secondary'     },
    { label: 'Primary Text',  key: 'primaryText'   },
    { label: 'Secondary Text',key: 'secondaryText' },
    { label: 'Hover Text',    key: 'hoverText'     },
    { label: 'Background',    key: 'background'    },
  ];

  // Track current theme mode
  mode: 'light' | 'dark' = this.configService.getCurrentThemeMode();

  // Spinner visibility
  loading = false;

  // Factory for empty theme object
  emptyTheme(): ThemeConfig {
    return {
      primary: '',
      secondary: '',
      primaryText: '',
      secondaryText: '',
      hoverText: '',
      background: '',
      logo: '',
      logoFileName: '',
    };
  }

  // Store theme colors for each mode
  lightColors: ThemeConfig = { ...this.emptyTheme() };
  darkColors: ThemeConfig = { ...this.emptyTheme() };

  // Getter for current mode's color config
  get colors(): ThemeConfig {
    return this.mode === 'dark' ? this.darkColors : this.lightColors;
  }

  // Setter for updating current mode's color config
  set colors(value: ThemeConfig) {
    if (this.mode === 'dark') {
      this.darkColors = structuredClone(value);
    } else {
      this.lightColors = structuredClone(value);
    }
  }

  private ignoreNextDarkChange = false; // reserved for preventing recursive theme toggling (not used here)

  ngOnInit(): void {
    // Get current mode from config service
    this.mode = this.configService.getCurrentThemeMode();

    // Load theme config for selected mode
    void this.loadThemeForMode();

    // Subscribe to dark mode changes from ConfigService
    this.configService.isDark$.subscribe((isDark) => {
      const newMode = isDark ? 'dark' : 'light';
      if (newMode === this.mode) return; // Avoid redundant updates

      this.mode = newMode;
      void this.loadThemeForMode(); // Reload theme config on mode change
    });

  }

  // Handler for manual mode toggle (e.g., from UI switch)
  async onModeChange() {
    await this.configService.setCurrentThemeMode(this.mode);
    const loaded = this.configService.getThemeConfig(this.mode);
    this.colors = structuredClone(loaded);
  }

  // Set selected logo file from file input
  selectedLogoFile?: File;
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    // only allow PNG
    if (
      file.type !== 'image/png' &&
      !file.name.toLowerCase().endsWith('.png')
    ) {
      this.snackBar.open('Please select a PNG image.', 'Close', {
        duration: 3000,
      });
      input.value = ''; // clear invalid selection
      return;
    }

    this.selectedLogoFile = file;
    this.selectedLogoFileName = file.name;
  }

  // Load both light and dark themes into memory (from config or default)
  loadThemeForMode(): void {
    // Get theme configurations from config service
    this.lightColors = this.configService.getThemeConfig('light');
    this.darkColors = this.configService.getThemeConfig('dark');
    // now populate the displayed “filename” field
    this.selectedLogoFileName =
      this.mode === 'dark'
        ? this.darkColors.logoFileName || ''
        : this.lightColors.logoFileName || '';
  }

  constructor(
    private configService: ConfigService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private electronService: ElectronApiFactoryService
  ) {}

  // Utility: Read file input into Uint8Array buffer
  private readFileAsBuffer(file: File): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve(new Uint8Array(reader.result as ArrayBuffer));
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  // Utility: Read file as base64 data URL
  private readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target?.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async onResetLogo() {
    if (this.mode === 'dark') {
      this.darkColors.logo = 'assets/icons/logo-dark.png';
      this.darkColors.logoFileName = '';
    } else {
      this.lightColors.logo = 'assets/icons/logo.png';
      this.lightColors.logoFileName = '';
    }

    this.selectedLogoFile = undefined;
    this.selectedLogoFileName = '';

    await this.configService.saveThemeConfig(
      this.mode === 'dark' ? this.darkColors : this.lightColors,
      this.mode
    );

    this.configService.logoUpdated$.next();
  }

  // Main action to apply the selected theme and optional new logo
  async apply() {
    this.loading = true;
    this.cdr.detectChanges(); // Ensure spinner updates in UI

    try {
      if (this.selectedLogoFile) {
        // Convert file to base64 data URL directly
        const dataUrl = await this.readFileAsBase64(this.selectedLogoFile);
        
        const originalFileName = this.selectedLogoFile.name;
        const updatedColors = structuredClone(this.colors);

        // Update the logo in the current theme config
        updatedColors.logo = dataUrl;
        updatedColors.logoFileName = originalFileName;
        
        this.selectedLogoFileName = originalFileName;
        this.colors = updatedColors;
        this.selectedLogoFile = undefined;
      }

      // Save updated theme config
      await this.configService.saveThemeConfig(
        this.mode === 'dark' ? this.darkColors : this.lightColors,
        this.mode
      );

      // Notify subscribers that theme has been updated
      this.configService.logoUpdated$.next();

      // Wait for logo update event or timeout to avoid UI stalling
      await Promise.race([
        new Promise<void>((resolve) => {
          const sub = this.configService.logoUpdated$.subscribe(() => {
            resolve();
            sub.unsubscribe();
          });
        }),
        new Promise((resolve) => setTimeout(resolve, 1000)), // fallback timeout
      ]);
    } catch (err) {
      console.error('Failed to apply theme:', err);
    } finally {
      this.loading = false;
      this.cdr.detectChanges(); // Stop spinner
    }
  }
}
