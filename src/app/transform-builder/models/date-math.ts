import { Uid } from "sequential-workflow-designer";
import { createStepModel, createStringValueModel } from "sequential-workflow-editor-model";
import { BranchedStep, Step } from "sequential-workflow-model";
import { deserializeToStep, serializeStep } from "../transform-builder.component";

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
      expression: step.properties.expression,
    };
  
    if (step.properties.roundUp === true) {
        attributes.roundUp = step.properties.roundUp;
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

  export function deserializeDateMath(data: any): DateMathStep {
    const step: DateMathStep = {
      id: Uid.next(),
      componentType: 'switch',
      name: data.name ?? 'Date Math',
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

  export function getDateMathIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"/>
    </svg>`
    const encoded = encodeURIComponent(svg.trim());
    return `data:image/svg+xml,${encoded}`;
  }