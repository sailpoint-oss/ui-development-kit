import {
    Uid,
    Step,
    BranchedStep,
    Sequence,
    StepEditorContext,
    Definition,
  } from 'sequential-workflow-designer';
  import { createBooleanValueModel, createStepModel } from 'sequential-workflow-editor-model';
import { deserializeToStep, serializeStep } from '../builder.component';
import { appendBranchEditor, appendNameEditor, appendPropertyTitle, appendTitle, createButton } from '../utils/utils';

export function createFirstValid(): FirstValidStep  {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'First Valid',
      type: 'firstValid',
      properties: {
        ignoreErrors: false
      },
      branches: {},
    };
  }

  export interface FirstValidStep extends BranchedStep {
    type: 'firstValid';
    componentType: 'switch';
    properties: {
        ignoreErrors: boolean;
    };
  }

export const FirstValidModel = createStepModel<FirstValidStep>('firstValid', 'switch', step => {
    step
    .property('ignoreErrors')
    .value(
      createBooleanValueModel({
        defaultValue: true,
      })
    )
    .hint('This true or false value indicates whether to proceed to the next option if an error (like an NPE) occurs. Default is false.')
    .label('Return First Link');
  });



export function serializeFirstValid(step: FirstValidStep): {
    type: string;
    attributes: {
      label: string;
      [key: string]: any;
    };
  } {
    const attributes: { label: string; [key: string]: any } = {
        label: step.name,
    };

    if (step.properties.ignoreErrors === true) {
        attributes.ignoreErrors = step.properties.ignoreErrors;
    }


    for (const [branchName, sequence] of Object.entries(step.branches)) {
        if (sequence.length === 1) {
          attributes[branchName] = serializeStep(sequence[0]);
        } else {
          throw new Error(`Branch "${branchName}" must have exactly one step.`);
        }
      }

    return {
      type: step.type,
      attributes: attributes
    };
  }

  export function deserializeFirstValid(data: any): FirstValidStep {
    const branches: { [key: string]: Sequence } = {};
    
    const attributes = data.attributes;

    if (attributes.ignoreErrors !== undefined) {
        attributes.ignoreErrors = attributes.ignoreErrors === 'true';
    }

    data.attributes.values.forEach((element: any, index: number) => {
        const key = element.label ?? `Variable${index}`;
        console.log(`iterating over: ` + element)
        branches[key] = [deserializeToStep(element)];
      });
    

  return {
    id: Uid.next(),
    componentType: 'switch',
    type: 'firstValid',
    name: data.attributes.label ?? 'First Valid',
    properties: { ignoreErrors: data.attributes.ignoreErrors},
    branches: branches,
  };
}

export function buildFirstValidStepEditor(step: FirstValidStep, context: StepEditorContext, definition: Definition, isReadonly: boolean): HTMLDivElement {
    const branchedStep = step as unknown as FirstValidStep;

    const root = document.createElement('div');

    function deleteBranch(branch: HTMLDivElement, name: string) {
      root.removeChild(branch);
      delete branchedStep.branches[name];
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
      branchedStep.branches[name] = [];
      context.notifyChildrenChanged();
      appendBranch(name);
    }

    appendTitle(root, 'First Valid');
    appendNameEditor(root, step, context);
    appendValueEditor(root, step, context);
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

export function appendValueEditor(
    root: HTMLElement,
    step: FirstValidStep,
    editorContext: StepEditorContext
  ): void {
    const select = document.createElement('select');
  
    const trueOption = document.createElement('option');
    trueOption.value = 'true';
    trueOption.text = 'True';
    select.appendChild(trueOption);
  
    const falseOption = document.createElement('option');
    falseOption.value = 'false';
    falseOption.text = 'False';
    select.appendChild(falseOption);
  
    if (step.properties.ignoreErrors !== undefined) {
      select.value = String(step.properties.ignoreErrors);
    }
  
    select.addEventListener(
      'input',
      () => {
        step.properties.ignoreErrors = select.value === 'true';
        editorContext.notifyNameChanged();
      },
      false
    );
  
    appendPropertyTitle(root, 'Value');
    root.appendChild(select);
  }
  

  import { MatSlideToggle } from '@angular/material/slide-toggle';
  import { ViewContainerRef } from '@angular/core';
  
  export function appendToggleEditor(
    root: HTMLElement,
    step: FirstValidStep,
    editorContext: StepEditorContext,
    viewContainerRef: ViewContainerRef
  ): void {
    appendPropertyTitle(root, 'Ignore Errors?');
  
    const toggleRef = viewContainerRef.createComponent(MatSlideToggle);
  
    toggleRef.instance.checked = !!step.properties.ignoreErrors;
    toggleRef.instance.color = 'primary';
    toggleRef.instance.labelPosition = 'after';
    toggleRef.instance.name = 'ignoreErrorsToggle';
  
    toggleRef.instance.change.subscribe((event: any) => {
      step.properties.ignoreErrors = event.checked;
      editorContext.notifyNameChanged();
    });
  
    root.appendChild(toggleRef.location.nativeElement);
  }
  


  export function isFirstValidStep(step: Step): step is FirstValidStep {
    return step.type === 'firstValid';
}