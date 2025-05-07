import { Step, Uid } from 'sequential-workflow-designer';
import {
    createChoiceValueModel,
    createStepModel
} from 'sequential-workflow-editor-model';
import { SailPointSDKService } from '../../core/services/electron/sailpoint-sdk.service';


export function createReference(): ReferenceStep {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Reference',
    type: 'reference',
    properties: {
        id: '',
    },
  };
}

export interface ReferenceStep extends Step {
  type: 'reference';
  componentType: 'task';
  properties: {
    id: string;
  };
}

export function createReferenceStepModel(transforms: string[]) {
    return createStepModel<ReferenceStep>('reference', 'task', step => {
    step.property('id').value(
        createChoiceValueModel({
            choices: transforms,
        })
      )
      .label('Name of the Transform to Reference');
  });
}

export async function getAvailableTransforms(sdk: SailPointSDKService): Promise<string[]> {
    const response = await sdk.listTransforms();
    return response.data.map(transform => transform.name);
}

export function serializeReference(step: ReferenceStep){
    return {
        name: step.name,
        type: step.type,
        attributes: {
            id: step.properties.id
        }
    }
}

export function deserializeReference(data: any): ReferenceStep {
    return {
        id: Uid.next(),
        componentType: 'task',
        name: 'Reference',
        type: 'reference',
        properties: {
            id: data.attributes.id,
        },
    }
}



  export function isReferenceStep(step: Step): step is ReferenceStep {
    return step.type === 'reference';
}


export function getReferenceIcon(): string {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path fill="gray" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>`;
  const encoded = encodeURIComponent(svg.trim());
  return `data:image/svg+xml,${encoded}`;
  }