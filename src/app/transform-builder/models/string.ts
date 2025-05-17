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

export function getStringIcon(): string {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24"/></g><g><g><g>
  // <path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"/></g></g></g>
  // </svg>`;
const encoded = encodeURIComponent(svg.trim());
return `data:image/svg+xml,${encoded}`;
}