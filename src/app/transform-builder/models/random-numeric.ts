import { Step, Uid } from 'sequential-workflow-designer';
import {
    createNumberValueModel,
    createStepModel
} from 'sequential-workflow-editor-model';

export function createRandomNumeric(): RandomNumericStep {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Random Numeric',
    type: 'randomNumeric',
    properties: {
        length: 10,
    },
  };
}

export interface RandomNumericStep extends Step {
  type: 'randomNumeric';
  componentType: 'task';
  properties: {
    length: number;
  };
}

export const RandomNumericModel = createStepModel<RandomNumericStep>('randomNumeric', 'task', step => {
    step.property('length').value(
        createNumberValueModel({
            defaultValue: 10,
            min: 1,
            max: 450
        })
      )
      .label('String Length');
  });

export function serializeRandomNumeric(step: RandomNumericStep){
    return {
        name: step.name,
        type: step.type,
        attributes: {
            length: step.properties.length
        }
    }
}

export function deserializeRandomNumeric(data: any): RandomNumericStep {
    return {
        id: Uid.next(),
        componentType: 'task',
        name: 'Random Numeric',
        type: 'randomNumeric',
        properties: {
            length: data.attributes.length,
        },
    }
}



  export function isRandomNumericStep(step: Step): step is RandomNumericStep {
    return step.type === 'randomNumeric';
}


export function getRandomNumericIcon(): string {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
    </svg>`;
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
  }