import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
    createNumberValueModel,
    createStepModel,
    createStringValueModel
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createRightPad(): RightPadStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Right Pad',
    type: 'rightPad',
    properties: {
        padding: '',
        length: 0
    },
    branches: {
      input: [],
    },
  };
}

export interface RightPadStep extends BranchedStep {
  type: 'rightPad';
  componentType: 'switch';
  properties: {
    padding: string;
    length: number;
  };
}

export const RightPadModel = createStepModel<RightPadStep>(
    'rightPad',
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

export function serializeRightPad(step: RightPadStep) {
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

export function deserializeRightPad(data: any): RightPadStep {
  const step: RightPadStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Right Pad',
    type: 'rightPad',
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


export function isRightPadStep(step: Step): step is RightPadStep {
  return step.type === 'rightPad';
}

export function getRightPadIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
    </svg>`
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
}