import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ElectronApiFactoryService } from './electron-api-factory.service';
import { ElectronService } from './electron.service';

// Theme Configuration Interface
export interface ThemeConfig {
  primary: string;
  secondary: string;
  primaryText: string;
  secondaryText: string;
  hoverText: string;
  background: string;
  logo?: string;
  logoFileName?: string;
}

// Component Information Interface
export interface ComponentInfo {
  name: string;
  displayName: string;
  route: string;
  icon: string;
  description: string;
  enabled: boolean;
}

// Unified Configuration Interface
export interface AppConfig {
  components: {
    enabled: string[];
  };
  themes?: {
    light?: ThemeConfig;
    dark?: ThemeConfig;
  };
  version: string;
  currentTheme?: 'light' | 'dark';
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private STORAGE_KEY = 'appConfig';
  private isElectron = false;

  // Default available components
  private availableComponents: ComponentInfo[] = [
    {
      name: 'component-selector',
      displayName: 'Component Selector',
      route: '/component-selector',
      icon: 'settings',
      description: 'Manage components that are shown',
      enabled: true,
    },
    {
      name: 'transforms',
      displayName: 'Transforms',
      route: '/transforms',
      icon: 'transform',
      description: 'Manage data transformations for SailPoint.',
      enabled: true,
    },
    {
      name: 'role-criteria-manager',
      displayName: 'Role Criteria Manager',
      route: '/role-criteria-manager',
      icon: 'account_tree',
      description: 'Bulk-edit ISC role membership criteria.',
      enabled: false,
    },
    {
      name: 'theme-picker',
      displayName: 'Theme Picker',
      route: '/theme-picker',
      icon: 'palette',
      description: 'Manage theme picker in SailPoint.',
      enabled: false,
    },
    {
      name: 'report-example',
      displayName: 'Report Example',
      route: '/report-example',
      icon: 'insert_chart',
      description: 'Manage report example in SailPoint.',
      enabled: false,
    },
    {
      name: 'identities',
      displayName: 'Identities',
      route: '/identities',
      icon: 'assignment_ind',
      description: 'Manage identities in SailPoint.',
      enabled: false,
    },
    {
      name: 'attach-rule',
      displayName: 'Attach Rule',
      route: '/attach-rule',
      icon: 'attachment',
      description: 'Manage attach rule in SailPoint.',
      enabled: false,
    },
    {
      name: 'accounts',
      displayName: 'Accounts',
      route: '/accounts',
      icon: 'dashboard',
      description: 'Manage accounts in SailPoint.',
      enabled: false,
    },
    {
      name: 'cronicle',
      displayName: 'Cronicle',
      route: '/cronicle',
      icon: 'dashboard',
      description: 'Manage cronicle in SailPoint.',
      enabled: false
    },
    {
      name: 'certification-management',
      displayName: 'Certification Management',
      route: '/certification-management',
      icon: 'rate_review',
      description: 'Manage certification management in SailPoint.',
      enabled: false,
    },
    {
      name: 'owner-graph',
      displayName: 'Owner Graph',
      route: '/owner-graph',
      icon: 'dashboard',
      description: 'Manage owner graph in SailPoint.',
      enabled: false
    },
        {
            name: 'colab',
            displayName: 'Colab',
            route: '/colab',
            icon: 'dashboard',
            description: 'Manage colab in SailPoint.',
            enabled: false
        },
        {
            name: 'config-hub',
            displayName: 'Config Hub',
            route: '/config-hub',
            icon: 'dashboard',
            description: 'Manage config hub in SailPoint.',
            enabled: false
        },
        {
            name: 'saas-connectivity-creator',
            displayName: 'Saas Connectivity Creator',
            route: '/saas-connectivity-creator',
            icon: 'dashboard',
            description: 'Manage saas connectivity creator in SailPoint.',
            enabled: false
        }
    ];

  // Default theme configurations
  private defaultLightTheme: ThemeConfig = {
    primary: '#0071ce',
    secondary: '#6c63ff',
    primaryText: '#415364',
    secondaryText: '#415364',
    hoverText: '#ffffff',
    background: '#ffffff',
    logo: 'assets/icons/logo.png',
    logoFileName: 'Default Light Logo',
  };

  private defaultDarkTheme: ThemeConfig = {
    primary: '#54c0e8',
    secondary: '#f48fb1',
    primaryText: '#ffffff',
    secondaryText: '#cccccc',
    hoverText: '#54c0e8',
    background: '#151316',
    logo: 'assets/icons/logo-dark.png',
    logoFileName: 'Default Dark Logo',
  };

  // Observables for components and theme
  private enabledComponentsSubject = new BehaviorSubject<ComponentInfo[]>([]);
  enabledComponents$ = this.enabledComponentsSubject.asObservable();

  private isDarkSubject = new BehaviorSubject<boolean>(false);
  readonly isDark$ = this.isDarkSubject.asObservable();

  private themeSubject = new BehaviorSubject<ThemeConfig | null>(null);
  theme$ = this.themeSubject.asObservable();

  // Emits whenever a logo is updated
  logoUpdated$ = new Subject<void>();

  // Last raw configuration read from disk
  private config: AppConfig = {
    components: {
      enabled: ['component-selector'],
    },
    themes: {
      light: this.defaultLightTheme,
      dark: this.defaultDarkTheme,
    },
    version: '1.0.0',
    currentTheme: 'light',
  };

  constructor(
    private electronAPIService: ElectronApiFactoryService,
    private electronService: ElectronService
  ) {
    // Check if we're running in Electron
    this.isElectron = this.electronService.isElectron;
    // Initialize the configuration
    void this.loadConfig().then(() => {
      // Initialize theme and components after config is loaded
      this.initializeTheme();
      this.initializeComponents();
    });
  }

  // Get the current configuration
  getConfig(): AppConfig {
    return this.config;
  }

  // Load the configuration from storage
  async loadConfig(): Promise<AppConfig> {
    try {
      if (this.isElectron) {
        this.config = await this.electronAPIService.getApi().readConfig();

        // Ensure structure is complete
        if (!this.config.themes) {
          this.config.themes = {
            light: this.defaultLightTheme,
            dark: this.defaultDarkTheme,
          };
        }

        if (!this.config.themes.light) {
          this.config.themes.light = this.defaultLightTheme;
        }

        if (!this.config.themes.dark) {
          this.config.themes.dark = this.defaultDarkTheme;
        }

        if (!this.config.currentTheme) {
          this.config.currentTheme = 'light';
        }
      } else {
        const storedConfig = localStorage.getItem(this.STORAGE_KEY);
        if (storedConfig) {
          this.config = JSON.parse(storedConfig);
        }
      }
    } catch (error) {
      console.error('Failed to load configuration:', error);
    }

    return this.config;
  }

  // Save the configuration to storage
  async saveConfig(): Promise<void> {
    try {
      if (this.isElectron) {
        await this.electronAPIService.getApi().writeConfig(this.config);
      } else {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.config));
      }
    } catch (error) {
      console.error('Failed to save configuration:', error);
    }
  }

  // Initialize the theme based on loaded configuration
  private initializeTheme(): void {
    const currentMode = this.config.currentTheme || 'light';
    this.isDarkSubject.next(currentMode === 'dark');

    const themeConfig =
      currentMode === 'dark'
        ? this.config.themes?.dark || this.defaultDarkTheme
        : this.config.themes?.light || this.defaultLightTheme;

    this.applyTheme(themeConfig, currentMode);
  }

  // Initialize components based on loaded configuration
  private initializeComponents(): void {
    const enabledNames = this.config.components?.enabled || [];

    this.availableComponents.forEach((component) => {
      component.enabled = enabledNames.includes(component.name);
    });

    void this.updateEnabledComponents();
  }

  // THEME MANAGEMENT METHODS

  /**
   * Gets the current theme mode
   */
  getCurrentThemeMode(): 'light' | 'dark' {
    return this.config.currentTheme || 'light';
  }

  /**
   * Sets the current theme mode
   */
  async setCurrentThemeMode(mode: 'light' | 'dark'): Promise<void> {
    this.config.currentTheme = mode;
    await this.saveConfig();
    this.initializeTheme();
  }

  /**
   * Gets the theme configuration for the specified mode
   */
  getThemeConfig(mode: 'light' | 'dark'): ThemeConfig {
    return mode === 'light'
      ? this.config.themes?.light || this.defaultLightTheme
      : this.config.themes?.dark || this.defaultDarkTheme;
  }

  /**
   * Saves a theme configuration
   */
  async saveThemeConfig(
    config: ThemeConfig,
    mode: 'light' | 'dark'
  ): Promise<void> {
    if (!this.config.themes) {
      this.config.themes = {};
    }

    this.config.themes[mode] = config;
    await this.saveConfig();

    if (this.config.currentTheme === mode) {
      this.applyTheme(config, mode);
    }
  }

  /**
   * Applies the given theme config to the DOM.
   */
  private applyTheme(config: ThemeConfig, mode: 'light' | 'dark') {
    const {
      primary,
      secondary,
      primaryText,
      secondaryText,
      hoverText,
      background,
    } = config;

    // Apply CSS variables for theme colors
    document.body.style.setProperty('--theme-primary', primary);
    document.body.style.setProperty('--theme-secondary', secondary);
    document.body.style.setProperty('--theme-primary-text', primaryText);
    document.body.style.setProperty('--theme-secondary-text', secondaryText);
    document.body.style.setProperty('--theme-hover-text', hoverText);
    document.body.style.setProperty('--theme-background', background);

    // Apply light or dark theme class
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${mode}-theme`);

    // Emit updated theme config
    this.isDarkSubject.next(mode === 'dark');
    this.themeSubject.next(config);
  }

  // COMPONENT MANAGEMENT METHODS

  /**
   * Gets all available components
   */
  getAvailableComponents(): ComponentInfo[] {
    return this.availableComponents;
  }

  /**
   * Gets the currently enabled components
   */
  getEnabledComponents(): ComponentInfo[] {
    return this.enabledComponentsSubject.getValue();
  }

  /**
   * Toggles a component's enabled state
   */
  toggleComponent(componentName: ComponentInfo): void {
    const component = this.availableComponents.find(
      (c) => c.name === componentName.name
    );
    if (component) {
      component.enabled = !component.enabled;
      void this.updateEnabledComponents();
    }
  }

  /**
   * Enables a specific component
   */
  enableComponent(componentName: string): void {
    const component = this.availableComponents.find(
      (c) => c.name === componentName
    );
    if (component) {
      component.enabled = true;
      void this.updateEnabledComponents();
    }
  }

  /**
   * Updates the enabled components in the config
   */
  private async updateEnabledComponents(): Promise<void> {
    const enabledComponents = this.availableComponents;
    this.enabledComponentsSubject.next(enabledComponents);

    // Update config
    const enabledNames = this.availableComponents
      .filter((component) => component.enabled)
      .map((component) => component.name);

    this.config.components.enabled = enabledNames;

    // Save to storage
    await this.saveConfig();
  }

  // LOGO MANAGEMENT METHODS

  /**
   * Gets the logo URL for the current theme
   */
  getLogoUrl(isDark: boolean): string {
    const mode = isDark ? 'dark' : 'light';

    const themeConfig = this.getThemeConfig(mode);
    return (
      themeConfig['logo'] ||
      (isDark ? 'assets/icons/logo-dark.png' : 'assets/icons/logo.png')
    );
  }
}
