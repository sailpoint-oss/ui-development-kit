import { Uid } from "sequential-workflow-designer";
import { createStepModel, createStringValueModel } from "sequential-workflow-editor-model";
import { BranchedStep, Step } from "sequential-workflow-model";
import { deserializeToStep, serializeStep } from "../builder.component";

export function createDateMath(): DateMathStep {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Date Math',
      type: 'dateMath',
      properties: {
        expression: '',
        roundUp: false,
      },
      branches: {
        input: [],
      },
    };
  }

export interface DateMathStep extends BranchedStep {
    type: 'dateMath';
    componentType: 'switch';
    properties: {
      expression: string;
      roundUp: boolean;
    };
}

export const DateMathModel = createStepModel<DateMathStep>(
    'dateMath',
    'switch',
    (step) => {
      step
        .property('expression')
        .value(
            createStringValueModel({
                minLength: 1,
              })
        )
        .hint(
          'A string value of the date and time components to operate on, along with the math operations to execute. Multiple operations on multiple components are supported. See <a href="https://developer.sailpoint.com/docs/extensibility/transforms/operations/date-math#transform-structure" target="_blank">Date Math Expression</a> for more details'
        )
        .label('Expression');
    }
  );


  export function serializeDateMath(step: DateMathStep) {
    const attributes: Record<string, any> = {
      label: step.name,
      expression: step.properties.expression,
    };
  
    if (step.properties.roundUp === true) {
        attributes.roundUp = step.properties.roundUp;
    }
     if (step.branches.input.length > 0) {
        attributes.input = serializeStep(step.branches.input[0]);
      }
  
    return {
      type: step.type,
      attributes: attributes,
    };
  }

  export function deserializeDateMath(data: any): DateMathStep {
    const step: DateMathStep = {
      id: Uid.next(),
      componentType: 'switch',
      name: data.attributes.label ?? 'Date Math',
      type: 'dateMath',
      properties: {
        expression: data.attributes.expression,
        roundUp: data.attributes.roundUp ?? false,
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

  export function isDateMathStep(step: Step): step is DateMathStep {
    return step.type === 'dateMath';
  }