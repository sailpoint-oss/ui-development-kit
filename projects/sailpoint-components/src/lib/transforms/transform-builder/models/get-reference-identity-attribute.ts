import {
  Step,
  Uid
} from 'sequential-workflow-designer';
import { createStepModel, createStringValueModel } from 'sequential-workflow-editor-model';

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

  export const GetReferenceIdentityAttributeModel = createStepModel<GetReferenceIdentityAttributeStep>(
    'getReferenceIdentityAttribute',
    'task',
    (step) => {

      step
        .property('uid')
        .value(
          createStringValueModel({
            minLength: 1,
          })
        )
        .label('Reference Identity UID');

      step
        .property('attributeName')
        .value(
          createStringValueModel({
            minLength: 1,
          })
        )
        .label('Attribute Name');
    }
  );
  


  export function serializeGetReferenceIdentityAttribute(step: GetReferenceIdentityAttributeStep) {
    return {
      name: step.name,
      type: "rule",
      attributes: {
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
        name: data.name ?? 'Get Reference Identity Attribute',
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