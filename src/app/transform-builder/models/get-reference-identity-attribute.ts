import {
    Step,
    Uid
} from 'sequential-workflow-designer';

export function createGetReferenceIdentityAttribute(): GetReferenceIdentityAttributeStep  {
    return {
      id: Uid.next(),
      componentType: 'task',
      name: 'Get Reference Identity Attribute',
      type: 'getReferenceIdentityAttribute',
      properties: {
        uid: '',
        attributeName: '',
      }
    };
  }

  export interface GetReferenceIdentityAttributeStep extends Step {
    type: 'getReferenceIdentityAttribute';
    componentType: 'task';
    properties: {
        uid: string;
        attributeName: string;
    };
  }


  export function serializeGetReferenceIdentityAttribute(step: GetReferenceIdentityAttributeStep) {
    return {
      type: "rule",
      attributes: {
        label: step.name,
        name: "Cloud Services Deployment Utility",
        operation: "getReferenceIdentityAttribute",
        uid: step.properties.uid,
        attributeName: step.properties.attributeName,
      }
    };
  }
  
  export function deserializeGetReferenceIdentityAttribute(data: any): GetReferenceIdentityAttributeStep {  
      return {
        id: Uid.next(),
        componentType: 'task',
        type: 'getReferenceIdentityAttribute',
        name: data.attributes.label ?? 'Get Reference Identity Attribute',
        properties: {
            uid: data.attributes.uid,
            attributeName: data.attributes.attributeName,
        }
      };
    }
  
  export function isGetReferenceIdentityAttributeStep(
    step: Step
  ): step is GetReferenceIdentityAttributeStep {
    return step.type === 'getReferenceIdentityAttribute';
  }