import { StepEditorContext } from "sequential-workflow-designer";
import { BranchedStep, Step } from "sequential-workflow-model";
import { StaticStep } from "../models/static";

export function createButton(
    text: string,
    clickHandler: (this: HTMLButtonElement, ev: MouseEvent) => any
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', clickHandler, false);
    return button;
  }
  
  export function appendTitle(root: HTMLElement, title: string): void {
    const h2 = document.createElement('h2');
    h2.innerText = title;
    root.appendChild(h2);
  }
  
  export function appendPropertyTitle(root: HTMLElement, title: string): void {
    const h3 = document.createElement('h3');
    h3.innerText = title;
    root.appendChild(h3);
  }
  
  export function appendNameEditor(
    root: HTMLElement,
    step: Step,
    editorContext: StepEditorContext
  ): void {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = step.name;
    input.addEventListener(
      'input',
      () => {
        step.name = input.value;
        editorContext.notifyNameChanged();
      },
      false
    );
  
    appendPropertyTitle(root, 'Name');
    root.appendChild(input);
  }
  
  export function appendBranchEditor(
    root: HTMLElement,
    step: BranchedStep,
    editorContext: StepEditorContext,
    typeName: string
  ): void {
    const input = document.createElement('input');
    input.id = 'branch-editor-input'; // Assign an id here
    input.type = 'text';
    appendPropertyTitle(root, typeName);
    root.appendChild(input);
  }
  
  export function appendConditionEditor(
    root: HTMLElement,
    value: string,
    onChange: (value: string) => void
  ): void {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    input.addEventListener(
      'input',
      () => {
        onChange(input.value);
      },
      false
    );
    root.appendChild(input);
  }
  