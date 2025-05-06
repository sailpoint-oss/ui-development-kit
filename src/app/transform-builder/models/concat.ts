import {
    BranchedStep,
    Sequence,
    Step,
    Uid
} from 'sequential-workflow-designer';
import {
    createStepModel
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createConcat(): ConcatStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Concatenate',
    type: 'concat',
    properties: {},
    branches: {
        variable1: [],
        variable2: [],
    },
  };
}

export interface ConcatStep extends BranchedStep {
  type: 'concat';
  componentType: 'switch';
  properties: {};
}

export const ConcatModel = createStepModel<ConcatStep>(
  'concat',
  'switch',
  (step) => {}
);

export function serializeConcat(step: ConcatStep): {
  type: string;
  attributes: {
    label: string;
    values: any[];
  };
} {
  const arrayOfValues = [];

  for (const [branchName, sequence] of Object.entries(step.branches)) {
    for (const step of sequence) {
      arrayOfValues.push(serializeStep(step));
    }
  }

  return {
    type: step.type,
    attributes: {
      label: step.name,
      values: arrayOfValues,
    },
  };
}

export function deserializeConcat(data: any): ConcatStep {
  const branches: { [key: string]: Sequence } = {};
  data.attributes.values.forEach((element: any, index: number) => {
    const key = element.label ?? `Variable${index}`;
    branches[key] = [deserializeToStep(element)];
  });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'concat',
    name: data.attributes.label ?? 'Concatenate',
    properties: {},
    branches: branches,
  };
}

export function isConcatStep(step: Step): step is ConcatStep {
  return step.type === 'concat';
}
