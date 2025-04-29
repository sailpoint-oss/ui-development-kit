import { Uid, Step, BranchedStep } from 'sequential-workflow-designer';
import {
  createBooleanValueModel,
  createStepModel,
  createStringValueModel,
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../builder.component';

export function createDateFormat(): DateFormatStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Date Format',
    type: 'dateFormat',
    properties: {
      inputFormat: 'yyyy-MM-dd',
      outputFormat: 'MM/dd/yyyy',
    },
    branches: {
      input: [],
    },
  };
}

export interface DateFormatStep extends BranchedStep {
  type: 'dateFormat';
  componentType: 'switch';
  properties: {
    inputFormat: string;
    outputFormat: string;
  };
}

export const DateFormatModel = createStepModel<DateFormatStep>(
    'dateFormat',
    'switch',
    (step) => {
      step
        .property('inputFormat')
        .value(
            createStringValueModel({
                minLength: 1,
              })
        )
        .hint(
          'This string value indicates either the explicit SimpleDateFormat or the built-in named format of the incoming data.'
        )
        .label('Input Format');
    step
        .property('outputFormat')
        .value(
            createStringValueModel({
                minLength: 1,
              })
        )
        .hint(
          'This string value indicates either the explicit SimpleDateFormat or the built-in named format that the data is formatted into.'
        )
        .label('Output Format');
    }
  );

export function serializeDateFormat(step: DateFormatStep) {
  const attributes: Record<string, any> = {
    label: step.name,
    inputFormat: step.properties.inputFormat,
    outputFormat: step.properties.outputFormat,
  };

  if (step.branches.input.length > 0) {
    attributes.input = serializeStep(step.branches.input[0]);
  }

  return {
    type: step.type,
    attributes: attributes,
  };
}

export function deserializeDateFormat(data: any): DateFormatStep {
  const step: DateFormatStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.attributes.label ?? 'Date Format',
    type: 'dateFormat',
    properties: {
      inputFormat: data.attributes.inputFormat,
      outputFormat: data.attributes.outputFormat,
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


export function isDateFormatStep(step: Step): step is DateFormatStep {
  return step.type === 'dateFormat';
}