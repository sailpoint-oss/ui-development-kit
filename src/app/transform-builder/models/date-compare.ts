import {
    BranchedStep,
    Sequence,
    Step,
    Uid
} from 'sequential-workflow-designer';
import {
    createChoiceValueModel,
    createStepModel
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';
  
  export function createDateCompare(): DateCompareStep {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Date Compare',
      type: 'dateCompare',
      properties: {
        operator: '',
      },
      branches: {
        positiveCondition: [],
        negativeCondition: [],
        firstDate: [],
        secondDate: [],
      },
    };
  }
  
  export interface DateCompareStep extends BranchedStep {
    type: 'dateCompare';
    componentType: 'switch';
    properties: {
      operator: string;
    };
  }
  
  export const DateCompareModel = createStepModel<DateCompareStep>(
    'dateCompare',
    'switch',
    (step) => {
      step
        .property('operator')
        .value(
            createChoiceValueModel({
                choices: [
                  'GT',
                  'GTE',
                  'LT',
                  'LTE',
                ],
              })
        )
        .hint(
          'Comparison operator, e.g. gt, gte, lt, lte'
        )
        .label('Operator');
    }
  );
  
  export function serializeDateCompare(step: DateCompareStep): {
    type: string;
    attributes: {
      label: string;
      operator: string;
      [key: string]: any;
    };
  } {
    const attributes: { label: string; operator: string; [key: string]: any } =
      {
        label: step.name,
        operator: step.properties.operator,
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
  
  
  export function deserializeDateCompare(data: any): DateCompareStep {
      const branches: { [key: string]: Sequence } = {};
      
      const attributes = data.attributes;
      Object.keys(attributes).forEach((key) => {
        if (key !== 'operator') {
          branches[key] = [deserializeToStep(attributes[key])];
        }
      });
  
    return {
      id: Uid.next(),
      componentType: 'switch',
      type: 'dateCompare',
      name: data.attributes.label ?? `Date Compare`,
      properties: { operator: data.attributes.operator},
      branches: branches,
    };
  }
  
  export function isDateCompareStep(step: Step): step is DateCompareStep {
    return step.type === 'dateCompare';
  }

  export const operatorMap: Record<string, string> = {
    "LT": "Less Than",
    "LTE": "Less Than or Equal To",
    "GT": "Greater Than",
    "GTE": "Greater Than or Equal To",
  }