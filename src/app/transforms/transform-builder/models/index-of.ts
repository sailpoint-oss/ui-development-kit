import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
    createStepModel,
    createStringValueModel
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createIndexOf(): IndexOfStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Index Of',
    type: 'indexOf',
    properties: {
        substring: '',
    },
    branches: {
      input: [],
    },
  };
}

export interface IndexOfStep extends BranchedStep {
  type: 'indexOf';
  componentType: 'switch';
  properties: {
    substring: string;
  };
}

export const IndexOfModel = createStepModel<IndexOfStep>(
    'indexOf',
    'switch',
    (step) => {
      step
        .property('substring')
        .value(
            createStringValueModel({
                minLength: 1,
              })
        )
        .hint(
          'This string value indicates the substring to find the index of.'
        )
        .label('Search Substring');
    }
  );

export function serializeIndexOf(step: IndexOfStep) {
  const attributes: Record<string, any> = {
    substring: step.properties.substring,
  };

  if (step.branches.input.length > 0) {
    attributes.input = serializeStep(step.branches.input[0]);
  }

  return {
    name: step.name,
    type: step.type,
    attributes: attributes,
  };
}

export function deserializeIndexOf(data: any): IndexOfStep {
  const step: IndexOfStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Index Of',
    type: 'indexOf',
    properties: {
        substring: data.attributes.substring,
    },
    branches: {
      input: [],
    },
  };

  if (data.attributes.input) {
    step.branches.input.push(deserializeToStep(data.attributes.input));
  }

  return step;
}


export function isIndexOfStep(step: Step): step is IndexOfStep {
  return step.type === 'indexOf';
}