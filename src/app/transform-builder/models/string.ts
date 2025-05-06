import { Step, Uid } from 'sequential-workflow-designer';
import {
  createStepModel,
  createStringValueModel,
} from 'sequential-workflow-editor-model';

export function createString(): StringStep {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'String',
    type: 'string',
    properties: {
        value: 'String value',
    },
  };
}

export interface StringStep extends Step {
  type: 'string';
  componentType: 'task';
  properties: {
    value: string;
  };
}

export const StringModel = createStepModel<StringStep>('string', 'task', step => {
    step.property('value').value(
        createStringValueModel({
          defaultValue: 'String value',
          minLength: 1,
        })
      )
      .label('String Value');
  });

  export function serializeStatic(step: StringStep): string {
    return step.properties.value;
}

export function deserializeString(value: string): StringStep {
    return {
        id: Uid.next(),
        componentType: 'task',
        name: 'String',
        type: 'string',
        properties: {
            value: value,
        },
    }
}



  export function isStringStep(step: Step) {
    return step.type === 'string';
}