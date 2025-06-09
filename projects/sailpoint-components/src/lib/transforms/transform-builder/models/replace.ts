import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
    createStepModel,
    createStringValueModel,
} from 'sequential-workflow-editor-model';
import {
    deserializeToStep,
    serializeStep,
} from '../transform-builder.component';

export function createReplace(): ReplaceStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Replace',
    type: 'replace',
    properties: {
      regex: '',
      replacement: '',
    },
    branches: {
      input: [],
    },
  };
}

export interface ReplaceStep extends BranchedStep {
  type: 'replace';
  componentType: 'switch';
  properties: {
    regex: string;
    replacement: string;
  };
}

export const ReplaceModel = createStepModel<ReplaceStep>(
  'replace',
  'switch',
  (step) => {
    step
      .property('regex')
      .value(
        createStringValueModel({
          minLength: 1,
        })
      )
      .hint('This is the pattern you want to replace.')
      .label('Regex Pattern');

    step
      .property('replacement')
      .value(
        createStringValueModel({
          minLength: 1,
        })
      )
      .hint(
        "This is the replacement string that replaces the pattern wherever it occurs."
      )
      .label('Replacement String');
  }
);

export function serializeReplace(step: ReplaceStep) {
  const attributes: Record<string, any> = {
    regex: step.properties.regex,
    replacement: step.properties.replacement,
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

export function deserializeReplace(data: any): ReplaceStep {
  const step: ReplaceStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Replace',
    type: 'replace',
    properties: {
      regex: data.attributes.regex,
      replacement: data.attributes.replacement,
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

export function isReplaceStep(step: Step): step is ReplaceStep {
  return step.type === 'replace';
}

export function getReplaceIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"/>
    </svg>`
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
}
