import { BranchedStep, Properties, Step, Uid } from 'sequential-workflow-designer';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createLower(): LowerStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Lower',
    type: 'lower',
    properties: {},
    branches: {
      input: [],
    },
  };
}

export interface LowerStep extends BranchedStep {
  type: 'lower';
  componentType: 'switch';
  properties: Properties;
}

export function serializeLower(step: LowerStep) {
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

export function deserializeLower(data: any): LowerStep {
  const step: LowerStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Lower',
    type: 'lower',
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


export function isLowerStep(step: Step): step is LowerStep {
  return step.type === 'lower';
}


export function getLowerIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path fill="gray" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
    </svg>`;
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
  }