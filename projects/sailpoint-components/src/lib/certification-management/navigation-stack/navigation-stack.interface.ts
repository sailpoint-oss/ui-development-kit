/**
 * Interface for navigation stack items
 * Represents a single level in the breadcrumb navigation
 */
export interface NavigationItem {
  /** Unique identifier for this navigation item */
  id: string;

  /** Display title for this level */
  title: string;

  /** Component type to render at this level */
  component: string;

  /** Optional data to pass to the component */
  data?: any;

  /** Breadcrumb display information */
  breadcrumb: {
    /** Label to display in breadcrumb */
    label: string;
    /** Optional icon for breadcrumb */
    icon?: string;
  };

  /** Optional metadata */
  metadata?: {
    /** Timestamp when this level was created */
    timestamp?: Date;
    /** Additional custom properties */
    [key: string]: any;
  };
}

/**
 * Interface for navigation stack state
 */
export interface NavigationStackState {
  /** Current stack of navigation items */
  items: NavigationItem[];

  /** Current active level index */
  currentLevel: number;

  /** Maximum allowed stack depth */
  maxDepth?: number;
}

/**
 * Interface for navigation events
 */
export interface NavigationEvent {
  /** Type of navigation event */
  type: 'push' | 'pop' | 'navigate' | 'clear';

  /** Navigation item involved in the event */
  item?: NavigationItem;

  /** Target level for navigation events */
  targetLevel?: number;

  /** Timestamp of the event */
  timestamp: Date;
}
