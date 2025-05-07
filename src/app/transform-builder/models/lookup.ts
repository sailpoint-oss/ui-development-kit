import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createLookup(): LookupStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Lookup',
    type: 'lookup',
    properties: {
        table: new Map<string, string>([['default', 'defaultReturnValue']]),
    },
    branches: {
      input: [],
    },
  };
}

export interface LookupStep extends BranchedStep {
  type: 'lookup';
  componentType: 'switch';
  properties: {
    table: Map<string, string>;
  };
}

// export const LookupModel = createStepModel<LookupStep>(
//     'leftPad',
//     'switch',
//     (step) => {
//       step
//         .property('padding')
//         .value(
//             createStringValueModel({
//                 minLength: 1,
//               })
//         )
//         .hint(
//           'This string value represents the character the transform will pad the incoming data to to get to the desired length.'
//         )
//         .label('Padding Character');

//     step
//         .property('length')
//         .value(
//             createNumberValueModel({
//                 min: 1,
//                 max: 50000,
//               })
//         )
//         .hint(
//           "This is an integer value for the final output string's desired length."
//         )
//         .label('Total Length');
//     }
//   );

export function serializeLookup(step: LookupStep) {
  const attributes: Record<string, any> = {
    table: Object.fromEntries(step.properties.table)
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

export function deserializeLookup(data: any): LookupStep {
  const step: LookupStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'Lookup',
    type: 'lookup',
    properties: {
        table: new Map<string, string>(Object.entries(data.attributes.table)),
    },
    branches: {
      input: [],
    },
  };

  if (data.attributes.input) {
    step.branches.input.push(deserializeToStep(data.attributes.input));
  }

  console.log(step.properties.table)

  return step;
}


export function isLookupStep(step: Step): step is LookupStep {
  return step.type === 'lookup';
}

export function getLookupIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path fill="grey" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>`
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
}