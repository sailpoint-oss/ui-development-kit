import {
    BranchedStep,
    Sequence,
    Step,
    Uid
} from 'sequential-workflow-designer';
import { createStepModel, createStringValueModel } from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../transform-builder.component';

export function createStatic(): StaticStep  {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Static',
      type: 'static',
      properties: {
        value: ''
      },
      branches: {},
    };
  }

  export interface StaticStep extends BranchedStep {
    type: 'static';
    componentType: 'switch';
    properties: {
        value: string;
    };
  }

export const StaticModel = createStepModel<StaticStep>('static', 'switch', step => {
    step.property('value')
      .value(
        createStringValueModel({
          minLength: 1,
          multiline: true,
        })
      )
      .hint('Static values support apache velocity language')
      .label('Static Value');
  });



export function serializeStatic(step: StaticStep): {
    type: string;
    attributes: {
      label: string;
      value: string;
      [key: string]: any;
    };
  } {
    const attributes: { label: string; value: string; [key: string]: any } = {
        label: step.name,
        value: step.properties.value,
    };

    for (const [branchName, sequence] of Object.entries(step.branches)) {
        if (sequence.length === 1) {
          attributes[branchName] = serializeStep(sequence[0]);
        }
      }

    return {
      type: step.type,
      attributes: attributes
    };
  }

  export function deserializeStatic(data: any): StaticStep {
    const branches: { [key: string]: Sequence } = {};
    
    const attributes = data.attributes;
    Object.keys(attributes).forEach((key) => {
      if (key !== 'label' && key !== 'value') {
        branches[key] = [deserializeToStep(attributes[key])];
      }
    });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'static',
    name: data.attributes.label ?? 'Static',
    properties: { value: data.attributes.value},
    branches: branches,
  };
}

export function isStaticStep(step: Step): step is StaticStep {
  return step.type === 'static';
}