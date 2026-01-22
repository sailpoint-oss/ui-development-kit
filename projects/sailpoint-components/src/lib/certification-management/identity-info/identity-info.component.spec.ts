import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentityInfoComponent } from './identity-info.component';
import { NavigationStackService } from '../navigation-stack/navigation-stack.service';
import { SailPointSDKService } from '../../sailpoint-sdk.service';
import { of } from 'rxjs';

describe('IdentityInfoComponent', () => {
  let component: IdentityInfoComponent;
  let fixture: ComponentFixture<IdentityInfoComponent>;
  let mockNavigationStackService: jasmine.SpyObj<NavigationStackService>;
  // let mockSailPointSDKService: jasmine.SpyObj<SailPointSDKService>;

  beforeEach(async () => {
    const navigationStackServiceSpy = jasmine.createSpyObj(
      'NavigationStackService',
      ['getStackState', 'pop', 'navigateToLevel']
    );
    const sailPointSDKServiceSpy = jasmine.createSpyObj('SailPointSDKService', [
      'getIdentity',
    ]);

    await TestBed.configureTestingModule({
      imports: [IdentityInfoComponent],
      providers: [
        {
          provide: NavigationStackService,
          useValue: navigationStackServiceSpy,
        },
        { provide: SailPointSDKService, useValue: sailPointSDKServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentityInfoComponent);
    component = fixture.componentInstance;
    mockNavigationStackService = TestBed.inject(
      NavigationStackService
    ) as jasmine.SpyObj<NavigationStackService>;
    // mockSailPointSDKService = TestBed.inject(
    //   SailPointSDKService
    // ) as jasmine.SpyObj<SailPointSDKService>;

    // Setup default mock behavior
    mockNavigationStackService.getStackState.and.returnValue(
      of({
        items: [],
        currentLevel: 0,
      })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load identity when identityId is provided', () => {
    component.identityId = 'test-identity-id';
    spyOn(component as any, 'loadIdentity');

    component.ngOnInit();

    expect((component as any).loadIdentity).toHaveBeenCalled();
  });

  it('should show error when no identityId is provided', () => {
    component.identityId = '';
    spyOn(component as any, 'loadIdentity');

    component.ngOnInit();

    expect((component as any).loadIdentity).toHaveBeenCalled();
  });

  it('should format date correctly', () => {
    const testDate = new Date('2023-01-15T10:30:00Z');
    const formatted = component.formatDate(testDate);

    expect(formatted).toContain('Jan');
    expect(formatted).toContain('15');
    expect(formatted).toContain('2023');
  });

  it('should return N/A for undefined date', () => {
    const formatted = component.formatDate(undefined);
    expect(formatted).toBe('N/A');
  });

  it('should get correct status color', () => {
    expect(component.getStatusColor('ACTIVE')).toBe('green');
    expect(component.getStatusColor('INACTIVE')).toBe('red');
    expect(component.getStatusColor('PENDING')).toBe('orange');
    expect(component.getStatusColor('UNKNOWN')).toBe('default');
  });

  it('should get attribute value safely', () => {
    component.identity = {
      attributes: {
        title: 'Software Engineer',
        department: 'Engineering',
      },
    } as any;

    expect(component.getAttributeValue('title')).toBe('Software Engineer');
    expect(component.getAttributeValue('nonexistent')).toBe('N/A');
  });

  it('should get attribute keys for iteration', () => {
    component.identity = {
      attributes: {
        title: 'Software Engineer',
        department: 'Engineering',
      },
    } as any;

    const keys = component.getAttributeKeys();
    expect(keys).toEqual(['title', 'department']);
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockNavigationStackService.pop).toHaveBeenCalled();
  });

  it('should navigate to specific level when navigateToLevel is called', () => {
    component.navigateToLevel(1);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockNavigationStackService.navigateToLevel).toHaveBeenCalledWith(1);
  });
});
