import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriteriaTreeComponent } from './criteria-tree.component';
import { CriteriaNode } from '../models/criteria.model';

describe('CriteriaTreeComponent', () => {
  let fixture: ComponentFixture<CriteriaTreeComponent>;
  let component: CriteriaTreeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriaTreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CriteriaTreeComponent);
    component = fixture.componentInstance;
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('wraps a non-null node into the MatTree data source', () => {
    const node: CriteriaNode = {
      operation: 'AND',
      children: [{ operation: 'EQUALS', stringValue: 'x' }],
    };
    component.node = node;
    component.ngOnChanges({
      node: {
        currentValue: node,
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.roots).toEqual([node]);
  });

  it('renders an empty data source for null', () => {
    component.node = null;
    component.ngOnChanges({
      node: {
        currentValue: null,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.roots).toEqual([]);
  });

  it('formats leaf values, falling back to ∅ when unset', () => {
    expect(
      component.leafValueText({ operation: 'EQUALS', values: ['a', 'b'] })
    ).toBe('a, b');
    expect(
      component.leafValueText({ operation: 'EQUALS', stringValue: 'only' })
    ).toBe('only');
    expect(component.leafValueText({ operation: 'EQUALS' })).toBe('∅');
  });

  it('identifies composite nodes via hasChild', () => {
    expect(
      component.hasChild(0, {
        operation: 'AND',
        children: [{ operation: 'EQUALS', stringValue: 'x' }],
      })
    ).toBe(true);
    expect(
      component.hasChild(0, { operation: 'EQUALS', stringValue: 'x' })
    ).toBe(false);
  });
});
