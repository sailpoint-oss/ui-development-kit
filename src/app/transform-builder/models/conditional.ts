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
  type: string;
  attributes: {
    label: string;
    expression: string;
    [key: string]: any;
  };
} {
  const attributes: { label: string; expression: string; [key: string]: any } =
    {
      label: step.name,
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
    type: step.type,
    attributes: attributes,
  };
}


export function deserializeConditional(data: any): ConditionalStep {
    const branches: { [key: string]: Sequence } = {};
    
    const attributes = data.attributes;
    Object.keys(attributes).forEach((key) => {
      if (key !== 'expression') {
        branches[key] = [deserializeToStep(attributes[key])];
      }
    });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'conditional',
    name: data.attributes.label ?? 'Conditional',
    properties: { expression: data.attributes.expression},
    branches: branches,
  };
}

export function isConditionalStep(step: Step): step is ConditionalStep {
  return step.type === 'conditional';
}