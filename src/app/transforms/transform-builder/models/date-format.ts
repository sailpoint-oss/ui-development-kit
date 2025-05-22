import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
  createChoiceValueModel,
  createStepModel,
  createStringValueModel
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

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
          createChoiceValueModel({
            choices: [
              'ISO8601',
              'LDAP',
              'PEOPLE_SOFT',
              'EPOCH_TIME_JAVA',
              'EPOCH_TIME_WIN32',
              'CUSTOM'
            ],
            defaultValue: 'ISO8601',
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
    inputFormat: step.properties.inputFormat,
    outputFormat: step.properties.outputFormat,
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

export function deserializeDateFormat(data: any): DateFormatStep {
  const step: DateFormatStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Date Format',
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

export function getDateFormatIcon(): string {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path fill="gray" d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
  </svg>`;
const encoded = encodeURIComponent(svg.trim());
return `data:image/svg+xml,${encoded}`;
}

export const DateFormatMap: Record<string, string> = {
  "ISO8601": "ISO8601",
  "LDAP": "LDAP",
  "PEOPLE_SOFT": "PeopleSoft",
  "EPOCH_TIME_JAVA": "Epoch Time (Java)",
  "EPOCH_TIME_WIN32": "Epoch Time (Win32)",
  "CUSTOM": "CUSTOM SimpleDateFormat",
}