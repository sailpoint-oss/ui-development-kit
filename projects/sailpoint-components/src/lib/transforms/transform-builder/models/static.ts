import {
  BranchedStep,
  Sequence,
  Step,
  Uid
} from 'sequential-workflow-designer';
import { createStepModel, createStringValueModel } from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createStatic(): StaticStep  {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Static',
      type: 'static',
      properties: {
        value: ''
      },
      branches: {},
    };
  }

  export interface StaticStep extends BranchedStep {
    type: 'static';
    componentType: 'switch';
    properties: {
        value: string;
    };
  }

export const StaticModel = createStepModel<StaticStep>('static', 'switch', step => {
    step.property('value')
      .value(
        createStringValueModel({
          minLength: 1,
          multiline: true,
        })
      )
      .hint('Static values support apache velocity language')
      .label('Static Value');
  });



export function serializeStatic(step: StaticStep): {
    name: string;
    type: string;
    attributes: {
      value: string;
      [key: string]: any;
    };
  } {
    const attributes: { value: string; [key: string]: any } = {
        value: step.properties.value,
    };

    for (const [branchName, sequence] of Object.entries(step.branches)) {
        if (sequence.length === 1) {
          attributes[branchName] = serializeStep(sequence[0]);
        }
      }

    return {
      name: step.name,
      type: step.type,
      attributes: attributes
    };
  }

  export function deserializeStatic(data: any): StaticStep {
    const branches: { [key: string]: Sequence } = {};
    
    const attributes = data.attributes as Record<string, unknown>;
    Object.keys(attributes).forEach((key) => {
      if (key !== 'value') {
        branches[key] = [deserializeToStep(attributes[key])];
      }
    });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'static',
    name: data.name ? `Static (${data.name})` : 'Static',
    properties: { value: data.attributes.value},
    branches: branches,
  };
}

export function isStaticStep(step: Step): step is StaticStep {
  return step.type === 'static';
}


export function getStaticIcon(): string {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24"/></g><g><g><g>
  // <path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"/></g></g></g>
  // </svg>`;
const encoded = encodeURIComponent(svg.trim());
return `data:image/svg+xml,${encoded}`;
}