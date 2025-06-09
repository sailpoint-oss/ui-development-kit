import {
  BranchedStep,
  Properties,
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
  properties: Properties;
}

export const ConcatModel = createStepModel<ConcatStep>(
  'concat',
  'switch',
  () => {}
);

export function serializeConcat(step: ConcatStep): {
  name: string;
  type: string;
  attributes: {
    values: any[];
  };
} {
  const arrayOfValues = [];

  for (const [, sequence] of Object.entries(step.branches)) {
    for (const step of sequence) {
      arrayOfValues.push(serializeStep(step));
    }
  }

  return {
    name: step.name,
    type: step.type,
    attributes: {
      values: arrayOfValues,
    },
  };
}

export function deserializeConcat(data: any): ConcatStep {
  const branches: { [key: string]: Sequence } = {};
  data.attributes.values.forEach((element: any, index: number) => {
    const key = element.name ?? `Variable${index}`;
    branches[key] = [deserializeToStep(element)];
  });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'concat',
    name: data.name ? `Concatenate (${data.name})` : 'Concatenate',
    properties: {},
    branches: branches,
  };
}

export function isConcatStep(step: Step): step is ConcatStep {
  return step.type === 'concat';
}

export function getConcatIcon(): string {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path fill="gray" d="M22 12l-4 4-1.41-1.41L18.17 13h-5.23c-.34 3.1-2.26 5.72-4.94 7.05C7.96 21.69 6.64 23 5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3c.95 0 1.78.45 2.33 1.14 1.9-1.03 3.26-2.91 3.58-5.14h-3.1C7.4 14.16 6.3 15 5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14C6.78 6.55 5.95 7 5 7 3.34 7 2 5.66 2 4s1.34-3 3-3c1.64 0 2.96 1.31 2.99 2.95 2.68 1.33 4.6 3.95 4.94 7.05h5.23l-1.58-1.59L18 8l4 4z"/>
  </svg>`;
const encoded = encodeURIComponent(svg.trim());
return `data:image/svg+xml,${encoded}`;
}
