import {
  Uid,
  Step,
  BranchedStep,
  Sequence,
  StepEditorContext,
  Definition,
} from 'sequential-workflow-designer';
import {
  createStepModel,
  createStringValueModel,
} from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../builder.component';
import {
  appendBranchEditor,
  appendNameEditor,
  appendPropertyTitle,
  appendTitle,
  createButton,
} from '../utils/utils';

export function createConcat(): ConcatStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Concatenate',
    type: 'concat',
    properties: {},
    branches: {
        variable1: [],
        variable2: [],
    },
  };
}

export interface ConcatStep extends BranchedStep {
  type: 'concat';
  componentType: 'switch';
  properties: {};
}

export const ConcatModel = createStepModel<ConcatStep>(
  'concat',
  'switch',
  (step) => {}
);

export function serializeConcat(step: ConcatStep): {
  type: string;
  attributes: {
    label: string;
    values: any[];
  };
} {
  const arrayOfValues = [];

  for (const [branchName, sequence] of Object.entries(step.branches)) {
    for (const step of sequence) {
      arrayOfValues.push(serializeStep(step));
    }
  }

  return {
    type: step.type,
    attributes: {
      label: step.name,
      values: arrayOfValues,
    },
  };
}

export function deserializeConcat(data: any): ConcatStep {
  const branches: { [key: string]: Sequence } = {};
  data.attributes.values.forEach((element: any, index: number) => {
    const key = element.label ?? `Variable${index}`;
    branches[key] = [deserializeToStep(element)];
  });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'concat',
    name: data.attributes.label ?? 'Concatenate',
    properties: {},
    branches: branches,
  };
}

export function buildConcatStepEditor(
  step: ConcatStep,
  context: StepEditorContext,
  definition: Definition,
  isReadonly: boolean
): HTMLDivElement {
  const branchedStep = step as unknown as BranchedStep;

  const root = document.createElement('div');

  function deleteBranch(branch: HTMLDivElement, name: string) {
    root.removeChild(branch);
    delete branchedStep.branches[name];
    // delete branchedStep.properties.conditions[name];
    context.notifyChildrenChanged();
  }

  function appendBranch(name: string) {
    const branch = document.createElement('div');
    branch.className = 'switch-branch';

    const title = document.createElement('h4');
    title.innerText = name;

    const label = document.createElement('label');
    label.innerText = 'Condition: ';

    branch.appendChild(title);
    branch.appendChild(label);

    const deleteButton = createButton('Delete branch', () =>
      deleteBranch(branch, name)
    );
    branch.appendChild(deleteButton);

    root.appendChild(branch);
  }

  function addBranch(name: string) {
    // step.properties.conditions[name] = randomCondition();
    branchedStep.branches[name] = [];
    context.notifyChildrenChanged();
    appendBranch(name);
  }

  appendTitle(root, 'Concatenate');
  appendNameEditor(root, step, context);

  appendBranchEditor(root, step, context, 'Branch Name');

  const addBranchButton = createButton('Add Branch', () => {
    const input = document.getElementById(
      'branch-editor-input'
    ) as HTMLInputElement;
    const branchName = input.value;
    if (branchName) {
      addBranch(branchName);
    }
  });

  appendPropertyTitle(root, 'Branches');
  root.appendChild(addBranchButton);

  for (const branchName of Object.keys(step.branches)) {
    appendBranch(branchName);
  }

  return root;
}

export function isConcatStep(step: Step): step is ConcatStep {
  return step.type === 'concat';
}
