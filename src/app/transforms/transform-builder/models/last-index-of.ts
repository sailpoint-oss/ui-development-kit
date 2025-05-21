import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
    createStepModel,
    createStringValueModel
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createLastIndexOf(): LastIndexOfStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Last Index Of',
    type: 'lastIndexOf',
    properties: {
        substring: '',
    },
    branches: {
      input: [],
    },
  };
}

export interface LastIndexOfStep extends BranchedStep {
  type: 'lastIndexOf';
  componentType: 'switch';
  properties: {
    substring: string;
  };
}

export const LastIndexOfModel = createStepModel<LastIndexOfStep>(
    'lastIndexOf',
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
          'This string value indicates the substring to find the last index of.'
        )
        .label('Search Substring');
    }
  );

export function serializeLastIndexOf(step: LastIndexOfStep) {
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

export function deserializeLastIndexOf(data: any): LastIndexOfStep {
  const step: LastIndexOfStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Last Index Of',
    type: 'lastIndexOf',
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


export function isLastIndexOfStep(step: Step): step is LastIndexOfStep {
  return step.type === 'lastIndexOf';
}