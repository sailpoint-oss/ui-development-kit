import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessDetailComponent } from './access-detail.component';
import { NavigationStackService } from '../navigation-stack/navigation-stack.service';
import { of } from 'rxjs';

describe('AccessDetailComponent', () => {
  let component: AccessDetailComponent;
  let fixture: ComponentFixture<AccessDetailComponent>;
  let mockNavigationStackService: jasmine.SpyObj<NavigationStackService>;

  beforeEach(async () => {
    const navigationStackServiceSpy = jasmine.createSpyObj(
      'NavigationStackService',
      ['getNavigationEvents', 'peek']
    );

    await TestBed.configureTestingModule({
      imports: [AccessDetailComponent],
      providers: [
        {
          provide: NavigationStackService,
          useValue: navigationStackServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessDetailComponent);
    component = fixture.componentInstance;
    mockNavigationStackService = TestBed.inject(
      NavigationStackService
    ) as jasmine.SpyObj<NavigationStackService>;

    // Setup default mock returns
    mockNavigationStackService.getNavigationEvents.and.returnValue(of(null));
    mockNavigationStackService.peek.and.returnValue(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display access type correctly', () => {
    const mockAccessReviewItem = {
      accessSummary: {
        access: {
          type: 'ENTITLEMENT',
          id: 'test-id',
          name: 'Test Entitlement',
        },
      },
      identitySummary: {
        id: 'identity-id',
        name: 'Test User',
        identityId: 'identity-id',
        completed: true,
      },
      id: 'review-id',
      completed: false,
      newAccess: false,
      decision: 'APPROVE',
      comments: 'Test comment',
    };

    component.accessReviewItem = mockAccessReviewItem;
    fixture.detectChanges();

    expect(component.getAccessTypeDisplay()).toBe('Entitlement');
    expect(component.getAccessTypeIcon()).toBe('key');
  });

  it('should handle different access types', () => {
    const testCases = [
      {
        type: 'ENTITLEMENT',
        expectedDisplay: 'Entitlement',
        expectedIcon: 'key',
      },
      {
        type: 'ACCESS_PROFILE',
        expectedDisplay: 'Access Profile',
        expectedIcon: 'user',
      },
      { type: 'ROLE', expectedDisplay: 'Role', expectedIcon: 'team' },
      {
        type: 'UNKNOWN',
        expectedDisplay: 'UNKNOWN',
        expectedIcon: 'question-circle',
      },
    ];

    testCases.forEach((testCase) => {
      const mockItem = {
        accessSummary: {
          access: {
            type: testCase.type,
            id: 'test-id',
            name: 'Test Access',
          },
        },
        identitySummary: {
          id: 'identity-id',
          name: 'Test User',
          identityId: 'identity-id',
          completed: true,
        },
        id: 'review-id',
        completed: false,
        newAccess: false,
        decision: 'APPROVE',
        comments: 'Test comment',
      };

      component.accessReviewItem = mockItem;
      expect(component.getAccessTypeDisplay()).toBe(testCase.expectedDisplay);
      expect(component.getAccessTypeIcon()).toBe(testCase.expectedIcon);
    });
  });

  it('should check for entitlement data correctly', () => {
    const mockItemWithEntitlement = {
      accessSummary: {
        access: { type: 'ENTITLEMENT', id: 'test', name: 'Test' },
        entitlement: {
          id: 'entitlement-id',
          name: 'Test Entitlement',
          description: 'Test description',
          privileged: false,
          owner: {
            type: 'IDENTITY',
            id: 'owner-id',
            name: 'Owner Name',
            email: 'owner@test.com',
          },
          attributeName: 'memberOf',
          attributeValue: 'CN=test',
          sourceSchemaObjectType: 'groups',
          sourceName: 'Test Source',
          sourceType: 'Active Directory',
          sourceId: 'source-id',
          hasPermissions: false,
          isPermission: false,
          revocable: true,
          cloudGoverned: false,
          containsDataAccess: false,
          account: {
            nativeIdentity: 'CN=Test User',
            disabled: false,
            locked: false,
            type: 'IDENTITY',
            id: 'account-id',
            name: 'Test User',
            created: '2023-01-01T00:00:00.000Z',
            modified: '2023-01-01T00:00:00.000Z',
            activityInsights: {
              accountID: 'account-id',
              usageDays: 30,
              usageDaysState: 'COMPLETE',
            },
            description: 'Test account',
            governanceGroupId: 'gov-id',
            owner: {
              id: 'owner-id',
              type: 'IDENTITY',
              displayName: 'Owner Name',
            },
          },
        },
      },
      identitySummary: {
        id: 'identity-id',
        name: 'Test User',
        identityId: 'identity-id',
        completed: true,
      },
      id: 'review-id',
      completed: false,
      newAccess: false,
      decision: 'APPROVE',
      comments: 'Test comment',
    };

    const mockItemWithoutEntitlement = {
      accessSummary: {
        access: { type: 'ENTITLEMENT', id: 'test', name: 'Test' },
      },
      identitySummary: {
        id: 'identity-id',
        name: 'Test User',
        identityId: 'identity-id',
        completed: true,
      },
      id: 'review-id',
      completed: false,
      newAccess: false,
      decision: 'APPROVE',
      comments: 'Test comment',
    };

    component.accessReviewItem = mockItemWithEntitlement;
    expect(component.hasEntitlement()).toBe(true);

    component.accessReviewItem = mockItemWithoutEntitlement;
    expect(component.hasEntitlement()).toBe(false);
  });

  it('should get correct decision badge class', () => {
    const testCases = [
      { decision: 'APPROVE', expectedClass: 'badge-success' },
      { decision: 'REJECT', expectedClass: 'badge-danger' },
      { decision: 'REVOKE', expectedClass: 'badge-warning' },
      { decision: 'UNKNOWN', expectedClass: 'badge-secondary' },
      { decision: '', expectedClass: 'badge-secondary' },
    ];

    testCases.forEach((testCase) => {
      const mockItem = {
        accessSummary: {
          access: { type: 'ENTITLEMENT', id: 'test', name: 'Test' },
        },
        identitySummary: {
          id: 'identity-id',
          name: 'Test User',
          identityId: 'identity-id',
          completed: true,
        },
        id: 'review-id',
        completed: false,
        newAccess: false,
        decision: testCase.decision,
        comments: 'Test comment',
      };

      component.accessReviewItem = mockItem;
      expect(component.getDecisionBadgeClass()).toBe(testCase.expectedClass);
    });
  });

  it('should format dates correctly', () => {
    const testDate = '2023-12-25T10:30:00.000Z';
    const formattedDate = component.formatDate(testDate);

    expect(formattedDate).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('should handle invalid dates', () => {
    expect(component.formatDate('invalid-date')).toBe('invalid-date');
    expect(component.formatDate('')).toBe('N/A');
    expect(component.formatDate(null as unknown as string)).toBe('N/A');
  });
});
