import {
    Step,
    Uid
} from 'sequential-workflow-designer';

export function createGenerateRandomString(): GenerateRandomStringStep  {
    return {
      id: Uid.next(),
      componentType: 'task',
      name: 'Generate Random String',
      type: 'generateRandomString',
      properties: {
        includeNumbers: true,
        includeSpecialChars: true,
        length: 16,
      }
    };
  }

  export interface GenerateRandomStringStep extends Step {
    type: 'generateRandomString';
    componentType: 'task';
    properties: {
        includeNumbers: boolean;
        includeSpecialChars: boolean;
        length: number;
    };
  }


  export function serializeGenerateRandomString(step: GenerateRandomStringStep) {

    return {
      type: "rule",
      attributes: {
        label: step.name,
        name: "Cloud Services Deployment Utility",
        operation: "generateRandomString",
        includeNumbers: step.properties.includeNumbers,
        includeSpecialChars: step.properties.includeSpecialChars,
        length: step.properties.length,
      }
    };
  }
  
  export function deserializeGenerateRandomString(data: any): GenerateRandomStringStep {  
      return {
        id: Uid.next(),
        componentType: 'task',
        type: 'generateRandomString',
        name: data.attributes.label ?? 'Generate Random String',
        properties: {
          includeNumbers: data.attributes.includeNumbers,
          includeSpecialChars: data.attributes.includeSpecialChars,
          length: data.attributes.length,
        }
      };
    }
  
  export function isGenerateRandomStringStep(
    step: Step
  ): step is GenerateRandomStringStep {
    return step.type === 'generateRandomString';
  }