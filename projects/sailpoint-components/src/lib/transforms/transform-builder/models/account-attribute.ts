import { Step, Uid } from 'sequential-workflow-designer';
import {
  createBooleanValueModel,
  createChoiceValueModel,
  createNullableVariableValueModel,
  createStepModel,
  createStringValueModel,
  NullableVariable,
} from 'sequential-workflow-editor-model';
import { SailPointSDKService } from '../../../sailpoint-sdk.service';

let description = 'Use the account attribute transform to look up an account for a particular source on an identity and return a specific attribute value from that account.';


export function createAccountAttribute(): AccountAttributeStep {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Account Attribute',
    type: 'accountAttribute',
    description: description,
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
  description: string;
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
      .hint("The name of the account attribute to retrieve.")
      .label('Account Attribute Name');

    step
      .property('sourceName')
      .value(createChoiceValueModel({ choices: sources })
      )
      .hint("The source from which to retrieve the account attribute.")
      .label('Source Name');

    step
      .property('accountSortAttribute')
      .value(
        createNullableVariableValueModel({
          valueType: 'string',
          isRequired: false
        })
      )
      .hint("This configuration's value is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries.")
      .label('Account Sort Attribute');

    step
      .property('accountSortDescending')
      .value(
        createBooleanValueModel({
          defaultValue: true,
        })
      )
      .hint("This configuration's value is a boolean (true/false). It controls the sort order when there are multiple accounts.")
      .label('Sort Descending');

    step
      .property('accountReturnFirstLink')
      .value(
        createBooleanValueModel({
          defaultValue: true,
        })
      )
      .hint("This configuration's value is a boolean (true/false). It controls which account to source a value from for an attribute. If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If this flag is set to false, the transform returns the first non-null value.")
      .label('Return First Link');

    step
      .property('accountFilter')
      .value(
        createNullableVariableValueModel({
          valueType: 'string',
          isRequired: false
        })
      )
      .hint("This expression queries the database to narrow search results. This configuration's value is a sailpoint.object.Filter expression for searching against the database. The default filter always includes the source and identity, and any subsequent expressions are combined in an AND operation with the existing search criteria.")
      .label('Account Filter');

    step
      .property('accountPropertyFilter')
      .value(
        createNullableVariableValueModel({
          valueType: 'string',
          isRequired: false
        })
      )
      .hint("Use this expression to search and filter accounts in memory. This configuration's value is a sailpoint.object.Filter expression for searching against the returned result set.")
      .label('Account Property Filter');
  }
);
}


export async function getAvailableSources(sdk: SailPointSDKService): Promise<{
    names: string[],
    map: Map<string, string>
}> {
    const response = await sdk.listSourcesV1();
    const sourceMap = new Map<string, string>();
    
    response.data.forEach(source => {
        if (typeof source.name === 'string' && typeof source.id === 'string') {
            sourceMap.set(source.name, source.id);
        }
    });
    
    return {
        names: response.data.map(source => source.name),
        map: sourceMap
    };
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
      description: description,
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
