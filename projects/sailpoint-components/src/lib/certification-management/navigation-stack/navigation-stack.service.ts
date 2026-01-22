import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  NavigationItem,
  NavigationStackState,
  NavigationEvent,
} from './navigation-stack.interface';

/**
 * Service for managing breadcrumb navigation stack
 * Provides methods to push, pop, and navigate between levels
 */
@Injectable({
  providedIn: 'root', // Can be changed to 'component' if you want component-level injection
})
export class NavigationStackService {
  private stack: NavigationItem[] = [];
  private currentLevel = 0;
  private maxDepth = 10; // Prevent infinite nesting

  // Observable for stack state changes
  private stackStateSubject = new BehaviorSubject<NavigationStackState>({
    items: [],
    currentLevel: 0,
  });

  // Observable for navigation events
  private navigationEventSubject = new BehaviorSubject<NavigationEvent | null>(
    null
  );

  constructor() {}

  /**
   * Get current stack state as observable
   */
  getStackState(): Observable<NavigationStackState> {
    return this.stackStateSubject.asObservable();
  }

  /**
   * Get navigation events as observable
   */
  getNavigationEvents(): Observable<NavigationEvent | null> {
    return this.navigationEventSubject.asObservable();
  }

  /**
   * Get current stack state synchronously
   */
  getCurrentState(): NavigationStackState {
    return {
      items: [...this.stack],
      currentLevel: this.currentLevel,
      maxDepth: this.maxDepth,
    };
  }

  /**
   * Push a new navigation item onto the stack
   */
  push(item: NavigationItem): void {
    if (this.stack.length >= this.maxDepth) {
      console.warn(
        `Navigation stack reached maximum depth of ${this.maxDepth}`
      );
      return;
    }

    // Add timestamp to metadata
    item.metadata = {
      ...item.metadata,
      timestamp: new Date(),
    };

    this.stack.push(item);
    this.currentLevel = this.stack.length - 1;

    this.emitStateChange();
    this.emitNavigationEvent({
      type: 'push',
      item,
      timestamp: new Date(),
    });
  }

  /**
   * Pop the last navigation item from the stack
   */
  pop(): NavigationItem | null {
    if (this.stack.length <= 1) {
      console.warn('Cannot pop from navigation stack - at root level');
      return null;
    }

    const poppedItem = this.stack.pop();
    this.currentLevel = this.stack.length - 1;

    this.emitStateChange();
    this.emitNavigationEvent({
      type: 'pop',
      item: poppedItem || undefined,
      timestamp: new Date(),
    });

    return poppedItem || null;
  }

  /**
   * Navigate to a specific level in the stack
   */
  navigateToLevel(level: number): void {
    if (level < 0 || level >= this.stack.length) {
      console.warn(
        `Invalid navigation level: ${level}. Stack length: ${this.stack.length}`
      );
      return;
    }

    this.currentLevel = level;

    // Remove items after the target level
    this.stack = this.stack.slice(0, level + 1);

    this.emitStateChange();
    this.emitNavigationEvent({
      type: 'navigate',
      targetLevel: level,
      timestamp: new Date(),
    });
  }

  /**
   * Get the current active navigation item
   */
  peek(): NavigationItem | null {
    return this.stack[this.currentLevel] || null;
  }

  /**
   * Get all breadcrumb items for display
   */
  getBreadcrumbs(): NavigationItem[] {
    return [...this.stack];
  }

  /**
   * Clear the entire stack (except root)
   */
  clear(): void {
    const rootItem = this.stack[0];
    this.stack = rootItem ? [rootItem] : [];
    this.currentLevel = 0;

    this.emitStateChange();
    this.emitNavigationEvent({
      type: 'clear',
      timestamp: new Date(),
    });
  }

  /**
   * Check if we can navigate back
   */
  canGoBack(): boolean {
    return this.currentLevel > 0;
  }

  /**
   * Check if we can navigate forward
   */
  canGoForward(): boolean {
    return this.currentLevel < this.stack.length - 1;
  }

  /**
   * Get stack depth
   */
  getDepth(): number {
    return this.stack.length;
  }

  /**
   * Set maximum stack depth
   */
  setMaxDepth(depth: number): void {
    this.maxDepth = Math.max(1, depth);
  }

  /**
   * Initialize with a root item
   */
  initialize(rootItem: NavigationItem): void {
    this.stack = [rootItem];
    this.currentLevel = 0;

    this.emitStateChange();
    this.emitNavigationEvent({
      type: 'push',
      item: rootItem,
      timestamp: new Date(),
    });
  }

  /**
   * Emit stack state change
   */
  private emitStateChange(): void {
    this.stackStateSubject.next({
      items: [...this.stack],
      currentLevel: this.currentLevel,
      maxDepth: this.maxDepth,
    });
  }

  /**
   * Emit navigation event
   */
  private emitNavigationEvent(event: NavigationEvent): void {
    this.navigationEventSubject.next(event);
  }
}
