import {
  BranchedStep,
  Sequence,
  Step,
  Uid
} from 'sequential-workflow-designer';
import {
  createStepModel,
  createStringValueModel,
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createConditional(): ConditionalStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Conditional',
    type: 'conditional',
    properties: {
      expression: '',
    },
    branches: {
      positiveCondition: [],
      negativeCondition: [],
    },
  };
}

export interface ConditionalStep extends BranchedStep {
  type: 'conditional';
  componentType: 'switch';
  properties: {
    expression: string;
  };
}

export const ConditionalModel = createStepModel<ConditionalStep>(
  'conditional',
  'switch',
  (step) => {
    step
      .property('expression')
      .value(
        createStringValueModel({
          minLength: 1,
          multiline: true,
          pattern: new RegExp('^.+\\s+eq\\s.+$'),
        })
      )
      .hint(
        'Conditional expression, e.g. $department eq Science, eq is the only supported operator'
      )
      .label('Expression');
  }
);

export function serializeConditional(step: ConditionalStep): {
  name: string;
  type: string;
  attributes: {
    expression: string;
    [key: string]: any;
  };
} {
  const attributes: { expression: string; [key: string]: any } =
    {
      expression: step.properties.expression,
    };

  for (const [branchName, sequence] of Object.entries(step.branches)) {
    if (sequence.length === 1) {
      attributes[branchName] = serializeStep(sequence[0]);
    } else {
      throw new Error(`Branch "${branchName}" must have exactly one step.`);
    }
  }

  return {
    name: step.name, 
    type: step.type,
    attributes: attributes,
  };
}


export function deserializeConditional(data: any): ConditionalStep {
    const branches: { [key: string]: Sequence } = {};
    
    const attributes = data.attributes as Record<string, unknown>
    Object.keys(attributes).forEach((key) => {
      if (key !== 'expression') {
        branches[key] = [deserializeToStep(attributes[key])];
      }
    });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'conditional',
    name: data.name ?? 'Conditional',
    properties: { expression: data.attributes.expression},
    branches: branches,
  };
}

export function isConditionalStep(step: Step): step is ConditionalStep {
  return step.type === 'conditional';
}

export function getConditionalIcon(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z"/></g></g></g></svg>`;
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
}