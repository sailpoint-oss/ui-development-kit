import { BranchedStep, Properties, Step, Uid } from 'sequential-workflow-designer';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createUpper(): UpperStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Upper',
    type: 'upper',
    properties: {},
    branches: {
      input: [],
    },
  };
}

export interface UpperStep extends BranchedStep {
  type: 'upper';
  componentType: 'switch';
  properties: Properties;
}

export function serializeUpper(step: UpperStep) {
  const attributes: Record<string, any> = {};

  if (step.branches.input.length > 0) {
    attributes.input = serializeStep(step.branches.input[0]);
  }

  return {
    name: step.name,
    type: step.type,
    attributes: attributes,
  };
}

export function deserializeUpper(data: any): UpperStep {
  const step: UpperStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Upper',
    type: 'upper',
    properties: {},
    branches: {
      input: [],
    },
  };

  if (data.attributes.input) {
    step.branches.input.push(deserializeToStep(data.attributes.input));
  }

  return step;
}


export function isUpperStep(step: Step): step is UpperStep {
  return step.type === 'upper';
}

export function getUpperIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path fill="gray" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
  }

