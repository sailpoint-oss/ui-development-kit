import { BranchedStep, Step, Uid } from 'sequential-workflow-designer';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createReplaceAll(): ReplaceAllStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'ReplaceAll',
    type: 'replaceAll',
    properties: {
        table: new Map<string, string>(),
    },
    branches: {
      input: [],
    },
  };
}

export interface ReplaceAllStep extends BranchedStep {
  type: 'replaceAll';
  componentType: 'switch';
  properties: {
    table: Map<string, string>;
  };
}

// export const ReplaceAllModel = createStepModel<ReplaceAllStep>(
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

export function serializeReplaceAll(step: ReplaceAllStep) {
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

export function deserializeReplaceAll(data: any): ReplaceAllStep {
  const step: ReplaceAllStep = {
    id: Uid.next(),
    componentType: 'switch',
    name: data.name ?? 'ReplaceAll',
    type: 'replaceAll',
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


export function isReplaceAllStep(step: Step): step is ReplaceAllStep {
  return step.type === 'replaceAll';
}

export function getReplaceAllIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"/>
    </svg>`
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
}