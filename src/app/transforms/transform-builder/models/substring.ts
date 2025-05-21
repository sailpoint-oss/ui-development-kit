import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import {
    createNumberValueModel,
    createStepModel,
} from 'sequential-workflow-editor-model';
import {
    deserializeToStep,
    serializeStep,
} from '../transform-builder.component';

export function createSubString(): SubStringStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Sub String',
    type: 'substring',
    properties: {
      begin: 0,
      beginOffset: -1,
      end: -1,
      endOffset: -1,
    },
    branches: {
      input: [],
    },
  };
}

export interface SubStringStep extends BranchedStep {
  type: 'substring';
  componentType: 'switch';
  properties: {
    begin: number;
    beginOffset: number;
    end: number;
    endOffset: number;
  };
}

export const SubStringModel = createStepModel<SubStringStep>(
  'substring',
  'switch',
  (step) => {
    step
      .property('begin')
      .value(
        createNumberValueModel({
          min: -2000,
          max: 2000,
          defaultValue: 0,
        })
      )
      .hint(
        'This is the integer value for the location within the input data that contains the first character of the substring you want to return.'
      )
      .label('Begin');

    step
      .property('beginOffset')
      .value(
        createNumberValueModel({
          min: 0,
          max: 2000,
        })
      )
      .hint(
        'This integer value is the number of characters to add to the begin attribute when the transform returns a substring. '
      )
      .label('Begin Offset');

    step
      .property('end')
      .value(
        createNumberValueModel({
          min: 0,
          max: 2000,
        })
      )
      .hint(
        'This is the integer value for the location within the input data that no longer contains the substring you want to return.'
      )
      .label('End');

    step
      .property('end')
      .value(
        createNumberValueModel({
          min: 0,
          max: 2000,
        })
      )
      .hint(
        'This is the integer value for the location within the input data that no longer contains the substring you want to return.'
      )
      .label('End');
  }
);

export function serializeSubString(step: SubStringStep) {
  const attributes: Record<string, any> = {
    begin: step.properties.begin,
  };

  if (step.properties.beginOffset !== -1) {
    attributes.beginOffset = step.properties.beginOffset;
  }

  if (step.properties.end !== -1) {
    attributes.end = step.properties.end;
  }

  if (step.properties.endOffset !== -1) {
    attributes.endOffset = step.properties.endOffset;
  }

  if (step.branches.input.length > 0) {
    attributes.input = serializeStep(step.branches.input[0]);
  }

  return {
    name: step.name,
    type: step.type,
    attributes: attributes,
  };
}

export function deserializeSubString(data: any): SubStringStep {
  const step: SubStringStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Sub String',
    type: 'substring',
    properties: {
        begin: data.attributes.delimiter,
        beginOffset: data.attributes.beginOffset ?? -1,
        end: data.attributes.end ?? -1,
        endOffset: data.attributes.endOffset ?? -1,
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

export function isSubStringStep(step: Step): step is SubStringStep {
  return step.type === 'substring';
}

export function getSubStringIcon(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
  <g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g>
  // <path fill="gray" d="M4,9h16v2H4V9z M4,13h10v2H4V13z"/></g></g></g>
  // </svg>`;
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
}
