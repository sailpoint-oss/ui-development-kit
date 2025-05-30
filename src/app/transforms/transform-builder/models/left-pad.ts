import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
    createNumberValueModel,
    createStepModel,
    createStringValueModel
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createLeftPad(): LeftPadStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Left Pad',
    type: 'leftPad',
    properties: {
        padding: '',
        length: 0
    },
    branches: {
      input: [],
    },
  };
}

export interface LeftPadStep extends BranchedStep {
  type: 'leftPad';
  componentType: 'switch';
  properties: {
    padding: string;
    length: number;
  };
}

export const LeftPadModel = createStepModel<LeftPadStep>(
    'leftPad',
    'switch',
    (step) => {
      step
        .property('padding')
        .value(
            createStringValueModel({
                minLength: 1,
              })
        )
        .hint(
          'This string value represents the character the transform will pad the incoming data to to get to the desired length.'
        )
        .label('Padding Character');

    step
        .property('length')
        .value(
            createNumberValueModel({
                min: 1,
                max: 50000,
              })
        )
        .hint(
          "This is an integer value for the final output string's desired length."
        )
        .label('Total Length');
    }
  );

export function serializeLeftPad(step: LeftPadStep) {
  const attributes: Record<string, any> = {
    padding: step.properties.padding,
    length: step.properties.length
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

export function deserializeLeftPad(data: any): LeftPadStep {
  const step: LeftPadStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Left Pad',
    type: 'leftPad',
    properties: {
        padding: data.attributes.padding,
        length: data.attributes.length
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


export function isLeftPadStep(step: Step): step is LeftPadStep {
  return step.type === 'leftPad';
}

export function getLeftPadIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>`
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
}