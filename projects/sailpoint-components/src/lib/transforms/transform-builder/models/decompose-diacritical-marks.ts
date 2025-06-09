import { Uid } from "sequential-workflow-designer";
import { BranchedStep, Properties, Step } from "sequential-workflow-model";
import { deserializeToStep, serializeStep } from "../transform-builder.component";

export function createDecomposeDiacriticalMarks(): DecomposeDiacriticalMarksStep {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Decompose Diacritical Marks',
      type: 'decomposeDiacriticalMarks',
      properties: {},
      branches: {
        input: [],
      },
    };
  }

export interface DecomposeDiacriticalMarksStep extends BranchedStep {
    type: 'decomposeDiacriticalMarks';
    componentType: 'switch';
    properties: Properties;
}



  export function serializeDecomposeDiacriticalMarks(step: DecomposeDiacriticalMarksStep) {
    const attributes: Record<string, any> = {};

     if (step.branches.input.length > 0) {
        attributes.input = serializeStep(step.branches.input[0]);
      }
  
    return {
      name: step.name,
      type: step.type,
      attributes: attributes,
    };
  }

  export function deserializeDecomposeDiacriticalMarks(data: any): DecomposeDiacriticalMarksStep {
    const step: DecomposeDiacriticalMarksStep = {
      id: Uid.next(),
      componentType: 'switch',
      name: data.name ?? 'Decompose Diacritical Marks',
      type: 'decomposeDiacriticalMarks',
      properties: {},
      branches: {
        input: [],
      },
    };
  
    if (data.attributes.input) {
      step.branches.input.push(deserializeToStep(data.attributes.input));
    }
  
    return step;

  }

  export function isDecomposeDiacriticalMarksStep(step: Step): step is DecomposeDiacriticalMarksStep {
    return step.type === 'decomposeDiacriticalMarks';
  }