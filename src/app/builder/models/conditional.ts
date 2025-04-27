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
import { appendBranchEditor, appendNameEditor, appendPropertyTitle, appendTitle, createButton } from '../utils/utils';

export function createConditional(): ConditionalStep {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Conditional',
    type: 'conditional',
    properties: {
      expression: '',
    },
    branches: {
      positiveCondition: [],
      negativeCondition: [],
    },
  };
}

export interface ConditionalStep extends BranchedStep {
  type: 'conditional';
  componentType: 'switch';
  properties: {
    expression: string;
  };
}

export const ConditionalModel = createStepModel<ConditionalStep>(
  'conditional',
  'switch',
  (step) => {
    step
      .property('expression')
      .value(
        createStringValueModel({
          minLength: 1,
          multiline: true,
          pattern: new RegExp('^.+\\s+eq\\s.+$'),
        })
      )
      .hint(
        'Conditional expression, e.g. $department eq Science, eq is the only supported operator'
      )
      .label('Expression');
  }
);

export function serializeConditional(step: ConditionalStep): {
  type: string;
  attributes: {
    label: string;
    expression: string;
    [key: string]: any;
  };
} {
  const attributes: { label: string; expression: string; [key: string]: any } =
    {
      label: step.name,
      expression: step.properties.expression,
    };

  for (const [branchName, sequence] of Object.entries(step.branches)) {
    if (sequence.length === 1) {
      attributes[branchName] = serializeStep(sequence[0]);
    } else {
      throw new Error(`Branch "${branchName}" must have exactly one step.`);
    }
  }

  return {
    type: step.type,
    attributes: attributes,
  };
}


export function deserializeConditional(data: any): ConditionalStep {
    const branches: { [key: string]: Sequence } = {};
    
    const attributes = data.attributes;
    Object.keys(attributes).forEach((key) => {
      if (key !== 'expression') {
        branches[key] = [deserializeToStep(attributes[key])];
      }
    });

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'conditional',
    name: data.attributes.label ?? 'Conditional',
    properties: { expression: data.attributes.expression},
    branches: branches,
  };
}

export function buildConditionalStepEditor(step: ConditionalStep, context: StepEditorContext, definition: Definition, isReadonly: boolean): HTMLDivElement {
    const branchedStep = step as unknown as ConditionalStep;

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

    appendTitle(root, 'Conditional');
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
    step: ConditionalStep,
    editorContext: StepEditorContext
  ): void {
    const input = document.createElement('textarea');
    input.value = step.properties.expression;
    input.addEventListener(
      'input',
      () => {
        step.properties.expression = input.value;
        editorContext.notifyNameChanged();
      },
      false
    );
  
    appendPropertyTitle(root, 'Expression');
    root.appendChild(input);
  }

export function isConditionalStep(step: Step): step is ConditionalStep {
  return step.type === 'conditional';
}