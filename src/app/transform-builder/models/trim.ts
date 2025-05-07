import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createTrim(): TrimStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Trim',
    type: 'trim',
    properties: {},
    branches: {
      input: [],
    },
  };
}

export interface TrimStep extends BranchedStep {
  type: 'trim';
  componentType: 'switch';
  properties: {};
}

export function serializeTrim(step: TrimStep) {
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

export function deserializeTrim(data: any): TrimStep {
  const step: TrimStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Trim',
    type: 'trim',
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


export function isTrimStep(step: Step): step is TrimStep {
  return step.type === 'trim';
}


export function getTrimIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
    <circle cx="6" cy="18" fill="none" r="2"/>
    <circle cx="12" cy="12" fill="none" r=".5"/><circle cx="6" cy="6" fill="none" r="2"/>
    <path fill="gray" d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/></svg>`;
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
  }
  
