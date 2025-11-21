import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatList, MatListItem } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BehaviorSubject, combineLatest, map, startWith } from 'rxjs';
import { DefaultApiGenericGetRequest } from 'sailpoint-api-client';
import { SailPointSDKService } from '../sailpoint-sdk.service';
import { ElectronApiFactoryService } from '../services';

interface AuthorizationType {
  value: string;
  viewValue: string;
}

interface RightSet {
  id: string;
  name: string;
  description?: string | null;
  category?: string | null;
  rights: string[];
  rightSetIds: string[];
  uiAssignableChildRightSetIds: string[];
  uiAssignable: boolean;
  translatedName?: string | null;
  translatedDescription?: string | null;
  parentId?: string | null;
}

interface RelatedRightSet {
  rightSet: RightSet;
  scopes: string[]; // scope ids
  userLevels: string[]; // user level ids
}

interface ScopeAuthorizationType {
  id: string;
  name: string;
  authType: string;
  description: string;
  rightSets: RightSet[];
  order: number;
}

interface UserLevelAuthType {
  id: string;
  authType: string;
  name: string;
  description: string | null;
  legacyGroup: string | null;
  rightSets: RightSet[];
  custom: boolean;
  adminAssignable: boolean;
  translatedName: string | null;
  translatedGrant: string | null;
  translatedRemove: string | null;
}

type AuthorizationTypeGroupItem =
  | AuthorizationType
  | ScopeAuthorizationType
  | UserLevelAuthType
  | RelatedRightSet
  | RightAuthType;

interface AuthorizationTypeGroup {
  name: string;
  disabled?: boolean;
  items: AuthorizationTypeGroupItem[];
}

// New type for unique rights and their relationships
interface RightAuthType {
  id: string;
  authType: string;
  rightSetIds: string[];
  scopeIds: string[];
  userLevelIds: string[];
}

@Component({
  selector: 'app-auth-viewer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionPanel,
    MatExpansionModule,
    MatList,
    MatListItem,
  ],
  templateUrl: './auth-viewer.component.html',
  styleUrl: './auth-viewer.component.scss',
})
export class AuthViewerComponent implements OnInit {
  title = 'Auth Viewer';

  authorizationTypeGroups: AuthorizationTypeGroup[] = [];
  userLevels: UserLevelAuthType[] = [];
  scopes: ScopeAuthorizationType[] = [];
  uniqueRightSets: RelatedRightSet[] = [];
  rights: RightAuthType[] = [];


  constructor(private sdk: SailPointSDKService, private electronService: ElectronApiFactoryService,) {}

  async ngOnInit() {
    const details = await this.electronService.getApi().getCurrentTokenDetails("devrel")
    console.log('Token Details:', details);

    await Promise.all([this.loadAuthInfo(), this.loadScopeInfo()]);
    this.buildUniqueRightSets();
    this.buildRightAuthTypes();
    // Add related right sets as a group to authorizationTypeGroups
    this.authorizationTypeGroups.push({
      name: 'Right Sets',
      items: this.uniqueRightSets,
    });

    this.authorizationTypeGroups.push({
      name: 'Rights',
      items: this.rights,
    });

    this.authorizationTypeGroupsSubject.next(this.authorizationTypeGroups);

    console.log(this.authorizationTypeGroups);
  }

  loadAuthInfo() {
    const request: DefaultApiGenericGetRequest = {
      path: '/v2025/authorization-capabilities',
      xSailPointExperimental: 'true',
    };
    return this.sdk
      .genericGet(request)
      .then((response) => {
        console.log('Auth Info:', response.data);
        response.data.forEach((element) => {
          const userLevel: UserLevelAuthType = {
            id: element.id,
            authType: "User Level",
            name: element.name,
            description: element.description,
            legacyGroup: element.legacyGroup,
            rightSets: Array.isArray(element.rightSets)
              ? element.rightSets.map((rs: any) => ({
                  id: rs.id,
                  name: rs.name,
                  description: rs.description,
                  category: rs.category,
                  rights: rs.rights || [],
                  rightSetIds: rs.rightSetIds || [],
                  uiAssignableChildRightSetIds:
                  rs.uiAssignableChildRightSetIds || [],
                  uiAssignable: rs.uiAssignable,
                  translatedName: rs.translatedName,
                  translatedDescription: rs.translatedDescription,
                  parentId: rs.parentId,
                }))
              : [],
            custom: element.custom,
            adminAssignable: element.adminAssignable,
            translatedName: element.translatedName,
            translatedGrant: element.translatedGrant,
            translatedRemove: element.translatedRemove,
          };
          this.userLevels.push(userLevel);
        });
        this.authorizationTypeGroups.push({
          name: 'User Levels',
          items: this.userLevels,
        });
      })
      .catch((error) => {
        console.error('Error fetching auth info:', error);
      });
  }

  loadScopeInfo() {
    const request: DefaultApiGenericGetRequest = {
      path: '/v2025/authorization-scopes',
      xSailPointExperimental: 'true',
    };
    return this.sdk
      .genericGet(request)
      .then((response) => {
        console.log('Auth Info:', response.data);
        response.data.forEach((element) => {
          const scope: ScopeAuthorizationType = {
            id: element.id,
            authType: "Scope",
            name: element.name,
            description: element.description,
            rightSets: Array.isArray(element.rightSets)
              ? element.rightSets.map((rs: any) => ({
                  id: rs.id,
                  name: rs.name,
                  description: rs.description,
                  category: rs.category,
                  rights: rs.rights || [],
                  rightSetIds: rs.rightSetIds || [],
                  uiAssignableChildRightSetIds:
                    rs.uiAssignableChildRightSetIds || [],
                  uiAssignable: rs.uiAssignable,
                  translatedName: rs.translatedName,
                  translatedDescription: rs.translatedDescription,
                  parentId: rs.parentId,
                }))
              : [],
            order: element.order,
          };
          this.scopes.push(scope);
        });
        this.authorizationTypeGroups.push({
          name: 'Scopes',
          items: this.scopes,
        });
      })
      .catch((error) => {
        console.error('Error fetching auth info:', error);
      });
  }

  /**
   * Deduplicate rightSets from scopes and user levels, and map their relationships
   */
  buildUniqueRightSets() {
    const rightSetMap: Map<string, RelatedRightSet> = new Map();

    // Collect from scopes
    for (const scope of this.scopes) {
      for (const rs of scope.rightSets) {
        if (!rightSetMap.has(rs.id)) {
          rightSetMap.set(rs.id, { rightSet: rs, scopes: [], userLevels: [] });
        }
        rightSetMap.get(rs.id)!.scopes.push(scope.id);
      }
    }

    // Collect from user levels
    for (const ul of this.userLevels) {
      for (const rs of ul.rightSets) {
        if (!rightSetMap.has(rs.id)) {
          rightSetMap.set(rs.id, { rightSet: rs, scopes: [], userLevels: [] });
        }
        rightSetMap.get(rs.id)!.userLevels.push(ul.id);
      }
    }

    this.uniqueRightSets = Array.from(rightSetMap.values());
    console.log(
      'Unique right sets built:',
      this.uniqueRightSets.length,
      this.uniqueRightSets
    );
  }
    /**
     * Build unique rights and their relationships to rightSets, scopes, and userLevels
     */
    buildRightAuthTypes() {
      const rightMap: Map<string, RightAuthType> = new Map();

      // From scopes
      for (const scope of this.scopes) {
        for (const rs of scope.rightSets) {
          for (const right of rs.rights) {
            if (!rightMap.has(right)) {
              rightMap.set(right, { id: right, authType: "Right", rightSetIds: [], scopeIds: [], userLevelIds: [] });
            }
            const entry = rightMap.get(right)!;
            if (!entry.scopeIds.includes(scope.id)) entry.scopeIds.push(scope.id);
            if (!entry.rightSetIds.includes(rs.id)) entry.rightSetIds.push(rs.id);
          }
        }
      }

      // From user levels
      for (const ul of this.userLevels) {
        for (const rs of ul.rightSets) {
          for (const right of rs.rights) {
            if (!rightMap.has(right)) {
              rightMap.set(right, { id: right, authType: "Right", rightSetIds: [], scopeIds: [], userLevelIds: [] });
            }
            const entry = rightMap.get(right)!;
            if (!entry.userLevelIds.includes(ul.id)) entry.userLevelIds.push(ul.id);
            if (!entry.rightSetIds.includes(rs.id)) entry.rightSetIds.push(rs.id);
          }
        }
      }

      this.rights = Array.from(rightMap.values());
    }

  authorizationTypeControl = new FormControl();

  // filteredAuthorizationTypeGroups$ = this.authorizationTypeControl.valueChanges.pipe(
  //   startWith(''),
  //   map((value) => this._filterGroups(value || ''))
  // );

  private authorizationTypeGroupsSubject = new BehaviorSubject<
    AuthorizationTypeGroup[]
  >([]);

  filteredAuthorizationTypeGroups$ = combineLatest([
    this.authorizationTypeControl.valueChanges.pipe(startWith('')),
    this.authorizationTypeGroupsSubject,
  ]).pipe(map(([value, groups]) => this._filterGroups(value || '', groups)));

  private _filterGroups(
    value: any,
    groups: AuthorizationTypeGroup[]
  ): AuthorizationTypeGroup[] {
    if (!value) {
      return groups;
    } else if (value instanceof Object) {
      return groups;
    }

    const filterValue = value.toLowerCase();

    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          if ('rightSet' in item && item.rightSet) {
            return (
              (item.rightSet.id &&
                item.rightSet.id.toLowerCase().includes(filterValue)) ||
              (item.rightSet.name &&
                item.rightSet.name.toLowerCase().includes(filterValue))
            );
          } else if ('id' in item && typeof item.id === 'string') {
            return typeof filterValue === 'string'
              ? item.id.toLowerCase().includes(filterValue)
              : false;
          } else if ('name' in item && typeof item.name === 'string') {
            return typeof filterValue === 'string'
              ? item.name.toLowerCase().includes(filterValue)
              : false;
          }
          return false;
        }),
      }))
      .filter((group) => group.items.length > 0);
  }

  getDisplayValue(item: AuthorizationTypeGroupItem): string {
    if ('viewValue' in item && item.viewValue) {
      return item.viewValue;
    } else if ('id' in item && typeof item.id === 'string') {
      return item.id;
    } else if ('name' in item && typeof item.name === 'string') {
      return item.name;
    } else if ('rightSet' in item && item.rightSet) {
      return item.rightSet.id;
    }
    return '';
  }

  displayFn(item: AuthorizationTypeGroupItem): string {
    if (!item) {
      return '';
    }
    if ('id' in item && typeof item.id === 'string') {
      return item.id;
    } else if ('name' in item && typeof item.name === 'string') {
      return item.name;
    } else if ('rightSet' in item && item.rightSet) {
      return item.rightSet.id;
    }
    return '';
  }

  isRelatedRightSet(item: any): item is RelatedRightSet {
    // First check if item exists and is an object
    if (!item || typeof item !== 'object') {
      return false;
    }

    // Check if it has the expected structure
    return (
      item &&
      typeof item === 'object' &&
      'rightSet' in item &&
      item.rightSet &&
      typeof item.rightSet === 'object' &&
      Array.isArray(item.scopes) &&
      Array.isArray(item.userLevels)
    );
  }

  getRelatedScopes(item: RelatedRightSet): ScopeAuthorizationType[] {
    return this.scopes.filter((scope) => item.scopes.includes(scope.id));
  }

  getRelatedUserLevels(item: RelatedRightSet): UserLevelAuthType[] {
    return this.userLevels.filter((ul) => item.userLevels.includes(ul.id));
  }

  getScopeById(id: string): ScopeAuthorizationType | undefined {
    return this.scopes.find((scope) => scope.id === id);
  }

  getUserLevelById(id: string): UserLevelAuthType | undefined {
    return this.userLevels.find((ul) => ul.id === id);
  }

  getRightSetById(id: string): RightSet | undefined {
    const related = this.uniqueRightSets.find((rs) => rs.rightSet.id === id);
    return related ? related.rightSet : undefined;
  }

  /**
   * For a given scope, find user levels that share at least one rightSet
   */
  getUserLevelsForScope(scope: ScopeAuthorizationType): UserLevelAuthType[] {
    console.log('Finding user levels for scope:', scope.id);
    const scopeRightSetIds = scope.rightSets.map(rs => rs.id);
    return this.userLevels.filter(ul =>
      ul.rightSets.some(rs => scopeRightSetIds.includes(rs.id))
    );
  }

  get selectedItemType(): 'relatedRightSet' | 'scope' | 'userLevel' | 'other' {
    const value = this.authorizationTypeControl.value;
    if (!value || typeof value !== 'object') {
      return 'other';
    }

    if ('rightSet' in value && value.rightSet) {
      return 'relatedRightSet';
    } else if ('rightSets' in value && Array.isArray(value.rightSets)) {
      if ('order' in value) {
        return 'scope';
      } else {
        return 'userLevel';
      }
    }
    return 'other';
  }

  get selectedRightSet(): RelatedRightSet | null {
    const value = this.authorizationTypeControl.value;
    return this.selectedItemType === 'relatedRightSet' ? value : null;
  }

  toString(obj: any): string {
    return JSON.stringify(obj, null, 2);
  }
}
