import { Uid, Step, BranchedStep } from 'sequential-workflow-designer';
import {
  createStepModel,
  createStringValueModel,
} from 'sequential-workflow-editor-model';
import { serializeStep } from '../builder.component';

export function createConcat(): ConcatStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Concatenate',
    type: 'concat',
    properties: {},
    branches: {
      ValueOne: [],
      valueTwo: [],
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
  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'concat',
    name: data.attributes.label,
    properties: {},
    branches: {},
  };
}

export function isConcatStep(step: Step): step is ConcatStep {
  return step.type === 'concat';
}
