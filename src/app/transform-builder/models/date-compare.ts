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
    name: string;
    type: string;
    attributes: {
      operator: string;
      [key: string]: any;
    };
  } {
    const attributes: { operator: string; [key: string]: any } =
      {
        operator: step.properties.operator,
      };
  
    for (const [branchName, sequence] of Object.entries(step.branches)) {
      if (sequence.length === 1) {
        attributes[branchName] = serializeStep(sequence[0]);
      }
    }
  
    return {
      name: step.name,
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
      name: data.name ?? `Date Compare`,
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

  export function getDateCompareIcon(): string {
      const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path fill="gray" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>
      </svg>`;
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
  }