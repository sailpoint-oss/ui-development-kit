import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
    createBooleanValueModel,
    createNumberValueModel,
    createStepModel,
    createStringValueModel,
} from 'sequential-workflow-editor-model';
import {
    deserializeToStep,
    serializeStep,
} from '../transform-builder.component';

export function createSplit(): SplitStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Split',
    type: 'split',
    properties: {
      delimiter: '',
      index: 0,
      throws: true,
    },
    branches: {
      input: [],
    },
  };
}

export interface SplitStep extends BranchedStep {
  type: 'split';
  componentType: 'switch';
  properties: {
    delimiter: string;
    index: number;
    throws: boolean;
  };
}

export const SplitModel = createStepModel<SplitStep>(
  'split',
  'switch',
  (step) => {
    step
      .property('delimiter')
      .value(
        createStringValueModel({
          minLength: 1,
        })
      )
      .hint(
        'This can be either a single character or a regex expression. Transforms use it identify the break point between two substrings in the incoming data.'
      )
      .label('Delimiter');

    step
      .property('index')
      .value(
        createNumberValueModel({
          min: 0,
          max: 2000,
        })
      )
      .hint(
        'This is the integer value for the desired array element after the incoming data has been split into a list'
      )
      .label('Index to return');
    step
      .property('throws')
      .value(createBooleanValueModel({ defaultValue: true }))
      .hint(
        'This true or false value indicates whether to throw an error if the index is out of bounds. Default is true.'
      )
      .label('Throw Error if Index Out of Bounds');
  }
);

export function serializeSplit(step: SplitStep) {
  const attributes: Record<string, any> = {
    delimiter: step.properties.delimiter,
    index: step.properties.index,
    throws: step.properties.throws
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

export function deserializeSplit(data: any): SplitStep {
  const step: SplitStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Split',
    type: 'split',
    properties: {
      delimiter: data.attributes.delimiter,
      index: data.attributes.index,
      throws: data.attributes.throws !== undefined ? data.attributes.throws : true
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

export function isSplitStep(step: Step): step is SplitStep {
  return step.type === 'split';
}

export function getSplitIcon(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"/>
    </svg>`;
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
}
