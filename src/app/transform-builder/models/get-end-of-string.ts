import {
  BranchedStep,
  Step,
  Uid
} from 'sequential-workflow-designer';
import { serializeStep } from '../transform-builder.component';

export function createGetEndOfString(): GetEndOfStringStep  {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Get End of String',
      type: 'getEndOfString',
      properties: {
        numChars: 4,
      },
      branches: {
        input: [],
      },
    };
  }

  export interface GetEndOfStringStep extends BranchedStep {
    type: 'getEndOfString';
    componentType: 'switch';
    properties: {
        numChars: number;
    };
  }


  export function serializeGetEndOfString(step: GetEndOfStringStep) {

      const attributes: Record<string, any> = {
        name: "Cloud Services Deployment Utility",
        operation: "getEndOfString",
        numChars: step.properties.numChars,
      };
    
      if (step.branches.input.length > 0) {
        attributes.input = serializeStep(step.branches.input[0]);
      }
    
      return {
        name: step.name,
        type: "rule",
        attributes: attributes,
      };
  }
  
  export function deserializeGetEndOfString(data: any): GetEndOfStringStep {  
      return {
        id: Uid.next(),
        componentType: 'switch',
        type: 'getEndOfString',
        name: data.name ?? 'Get End of String',
        properties: {
            numChars: data.attributes.numChars,
        },
        branches: {
          input: [],
        },
      };
    }
  
  export function isGetEndOfStringStep(
    step: Step
  ): step is GetEndOfStringStep {
    return step.type === 'getEndOfString';
  }