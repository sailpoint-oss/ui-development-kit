import {
    Uid,
    Step,
    BranchedStep,
    Sequence,
    StepEditorContext,
    Definition,
  } from 'sequential-workflow-designer';
  import { createStepModel, createStringValueModel } from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../builder.component';
import { appendBranchEditor, appendNameEditor, appendPropertyTitle, appendTitle, createButton } from '../utils/utils';

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

export function buildStaticStepEditor(step: StaticStep, context: StepEditorContext, definition: Definition, isReadonly: boolean): HTMLDivElement {
    const branchedStep = step as unknown as StaticStep;

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
      label.innerText = 'Action: ';

      branch.appendChild(title);
      branch.appendChild(label);

      const deleteButton = createButton('Delete variable', () =>
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

    appendTitle(root, 'Static');
    appendNameEditor(root, step, context);
    appendValueEditor(root, step, context);
    appendBranchEditor(root, step, context, 'Variable Name');

    const addBranchButton = createButton('Add Variable', () => {
      const input = document.getElementById(
        'branch-editor-input'
      ) as HTMLInputElement;
      const branchName = input.value;
      if (branchName) {
        addBranch(branchName);
      }
    });

    appendPropertyTitle(root, 'Variables');
    root.appendChild(addBranchButton);

    for (const branchName of Object.keys(step.branches)) {
      appendBranch(branchName);
    }

    return root;
}

export function appendValueEditor(
    root: HTMLElement,
    step: StaticStep,
    editorContext: StepEditorContext
  ): void {
    const input = document.createElement('textarea');
    input.value = step.properties.value;
    input.addEventListener(
      'input',
      () => {
        step.properties.value = input.value;
        editorContext.notifyNameChanged();
      },
      false
    );
  
    appendPropertyTitle(root, 'Value');
    root.appendChild(input);
  }
  export function isStaticStep(step: Step): step is StaticStep {
    return step.type === 'static';
}