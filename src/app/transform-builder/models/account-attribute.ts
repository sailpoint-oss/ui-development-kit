import { Step, Uid } from 'sequential-workflow-designer';
import {
  createBooleanValueModel,
  createChoiceValueModel,
  createNullableVariableValueModel,
  createStepModel,
  createStringValueModel,
  NullableVariable,
} from 'sequential-workflow-editor-model';
import { SailPointSDKService } from '../../core/services/electron/sailpoint-sdk.service';

export function createAccountAttribute(): AccountAttributeStep {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Account Attribute',
    type: 'accountAttribute',
    properties: {
      attributeName: '',
      sourceName: '',
      accountSortAttribute: null,
      accountSortDescending: false,
      accountReturnFirstLink: false,
      accountFilter: null,
      accountPropertyFilter: null,
    },
  };
}

export interface AccountAttributeStep extends Step {
  type: 'accountAttribute';
  componentType: 'task';
  properties: {
    attributeName: string;
    sourceName: string;
    accountSortAttribute?: NullableVariable;
    accountSortDescending?: boolean;
    accountReturnFirstLink?: boolean;
    accountFilter?: NullableVariable;
    accountPropertyFilter?: NullableVariable;
  };
}

export function createAccountAttributeModel(sources: string[]) {
return createStepModel<AccountAttributeStep>(
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
      .value(createChoiceValueModel({ choices: sources })
      )
      .label('Source Name');

    step
      .property('accountSortAttribute')
      .value(
        createNullableVariableValueModel({
          valueType: 'string',
          isRequired: false
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
        createNullableVariableValueModel({
          valueType: 'string',
          isRequired: false
        })
      )
      .label('Account Filter');

    step
      .property('accountPropertyFilter')
      .value(
        createNullableVariableValueModel({
          valueType: 'string',
          isRequired: false
        })
      )
      .label('Account Property Filter');
  }
);
}


export async function getAvailableSources(sdk: SailPointSDKService): Promise<string[]> {
    const response = await sdk.listSources();
    return response.data.map(source => source.name);
}



export function serializeAccountAttribute(step: AccountAttributeStep) {
  const {
    accountSortDescending,
    accountReturnFirstLink,
    accountSortAttribute,
    accountFilter,
    accountPropertyFilter,
  } = step.properties;

  const attributes: Record<string, any> = {
    attributeName: step.properties.attributeName,
    sourceName: step.properties.sourceName,
  };

  if (accountSortDescending !== false)
    attributes.accountSortDescending = accountSortDescending;
  if (accountReturnFirstLink !== false)
    attributes.accountReturnFirstLink = accountReturnFirstLink;
  if (accountSortAttribute != null)
    attributes.accountSortAttribute = accountSortAttribute;
  if (accountFilter !== null) attributes.accountFilter = accountFilter;
  if (accountPropertyFilter !== null)
    attributes.accountPropertyFilter = accountPropertyFilter;

  return {
    name: step.name,
    type: step.type,
    attributes,
  };
}

export function deserializeAccountAttribute(data: any): AccountAttributeStep {  
    return {
      id: Uid.next(),
      componentType: 'task',
      type: 'accountAttribute',
      name: data.name ?? 'Account Attribute',
      properties: {
        attributeName: data.attributes.attributeName ?? '',
        sourceName: data.attributes.sourceName ?? '',
        accountSortAttribute: data.attributes.accountSortAttribute ?? null,
        accountSortDescending: data.attributes.accountSortDescending ?? false,
        accountReturnFirstLink: data.attributes.accountReturnFirstLink ?? false,
        accountFilter: data.attributes.accountFilter ?? null,
        accountPropertyFilter: data.attributes.accountPropertyFilter ?? null,
      }
    };
  }

export function isAccountAttributeStep(
  step: Step
): step is AccountAttributeStep {
  return step.type === 'accountAttribute';
}

export function getAccountAttributeIcon(): string {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="gray">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>`;
const encoded = encodeURIComponent(svg.trim());
return `data:image/svg+xml,${encoded}`;
}
