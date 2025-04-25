import {
    Uid,
    Step,
  } from 'sequential-workflow-designer';
  import { createStepModel, createStringValueModel } from 'sequential-workflow-editor-model';

export function createStatic(): StaticStep  {
    return {
      id: Uid.next(),
      componentType: 'task',
      name: 'Static',
      type: 'static',
      properties: {
        value: ''
      },
    };
  }

  export interface StaticStep extends Step {
    type: 'static';
    componentType: 'task';
    properties: {
        value: string;
    };
  }

export const StaticModel = createStepModel<StaticStep>('static', 'task', step => {
    step.property('value')
      .value(
        createStringValueModel({
          minLength: 1
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
    };
  } {  
    return {
      type: step.type,
      attributes: {
        label: step.name,
        value: step.properties.value,
      },
    };
  }

  export function isStaticStep(step: Step): step is StaticStep {
    return step.type === 'static';
}