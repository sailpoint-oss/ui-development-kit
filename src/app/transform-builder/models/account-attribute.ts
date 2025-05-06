import { Step, Uid } from 'sequential-workflow-designer';
import {
  createBooleanValueModel,
  createStepModel,
  createStringValueModel,
} from 'sequential-workflow-editor-model';

export function createAccountAttribute(): AccountAttributeStep {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Account Attribute',
    type: 'accountAttribute',
    properties: {
      attributeName: 'first_name',
      sourceName: 'Employees',
      accountSortAttribute: '',
      accountSortDescending: false,
      accountReturnFirstLink: false,
      accountFilter: '',
      accountPropertyFilter: '',
    },
  };
}

export interface AccountAttributeStep extends Step {
  type: 'accountAttribute';
  componentType: 'task';
  properties: {
    attributeName: string;
    sourceName: string;
    accountSortAttribute?: string;
    accountSortDescending?: boolean;
    accountReturnFirstLink?: boolean;
    accountFilter?: string;
    accountPropertyFilter?: string;
  };
}

export const AccountAttributeModel = createStepModel<AccountAttributeStep>(
  'accountAttribute',
  'task',
  (step) => {
    step
      .property('attributeName')
      .value(
        createStringValueModel({
          minLength: 1,
        })
      )
      .label('Account Attribute Name');

    step
      .property('sourceName')
      .value(
        createStringValueModel({
          minLength: 1,
        })
      )
      .label('Source Name');

    step
      .property('accountSortAttribute')
      .value(
        createStringValueModel({
          multiline: true,
        })
      )
      .label('Account Sort Attribute');

    step
      .property('accountSortDescending')
      .value(
        createBooleanValueModel({
          defaultValue: true,
        })
      )
      .label('Sort Descending');

    step
      .property('accountReturnFirstLink')
      .value(
        createBooleanValueModel({
          defaultValue: true,
        })
      )
      .label('Return First Link');

    step
      .property('accountFilter')
      .value(
        createStringValueModel({
          multiline: true,
        })
      )
      .label('Account Filter');

    step
      .property('accountPropertyFilter')
      .value(
        createStringValueModel({
          multiline: true,
        })
      )
      .label('Account Property Filter');
  }
);

export function serializeAccountAttribute(step: AccountAttributeStep) {
  const {
    accountSortDescending,
    accountReturnFirstLink,
    accountSortAttribute,
    accountFilter,
    accountPropertyFilter,
  } = step.properties;

  const attributes: Record<string, any> = {
    label: step.name,
    attributeName: step.properties.attributeName,
    sourceName: step.properties.sourceName,
  };

  if (accountSortDescending !== false)
    attributes.accountSortDescending = accountSortDescending;
  if (accountReturnFirstLink !== false)
    attributes.accountReturnFirstLink = accountReturnFirstLink;
  if (accountSortAttribute !== '')
    attributes.accountSortAttribute = accountSortAttribute;
  if (accountFilter !== '') attributes.accountFilter = accountFilter;
  if (accountPropertyFilter !== '')
    attributes.accountPropertyFilter = accountPropertyFilter;

  return {
    type: step.type,
    attributes,
  };
}

export function deserializeAccountAttribute(data: any): AccountAttributeStep {  
    return {
      id: Uid.next(),
      componentType: 'task',
      type: 'accountAttribute',
      name: data.attributes.label ?? 'Account Attribute',
      properties: {
        attributeName: data.attributes.attributeName ?? '',
        sourceName: data.attributes.sourceName ?? '',
        accountSortAttribute: data.attributes.accountSortAttribute ?? '',
        accountSortDescending: data.attributes.accountSortDescending ?? false,
        accountReturnFirstLink: data.attributes.accountReturnFirstLink ?? false,
        accountFilter: data.attributes.accountFilter ?? '',
        accountPropertyFilter: data.attributes.accountPropertyFilter ?? '',
      }
    };
  }

export function isAccountAttributeStep(
  step: Step
): step is AccountAttributeStep {
  return step.type === 'accountAttribute';
}
