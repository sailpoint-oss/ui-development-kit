import {
    Uid,
    Step,
    BranchedStep,
    Sequence,
    StepEditorContext,
    Definition,
  } from 'sequential-workflow-designer';
  import {
      createChoiceValueModel,
    createStepModel,
    createStringValueModel,
  } from 'sequential-workflow-editor-model';
  import { deserializeToStep, serializeStep } from '../builder.component';
  import { appendBranchEditor, appendNameEditor, appendPropertyTitle, appendTitle, createButton } from '../utils/utils';
  
  export function createDateCompare(): DateCompareStep {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'Date Compare',
      type: 'dateCompare',
      properties: {
        operator: '',
      },
      branches: {
        positiveCondition: [],
        negativeCondition: [],
        firstDate: [],
        secondDate: [],
      },
    };
  }
  
  export interface DateCompareStep extends BranchedStep {
    type: 'dateCompare';
    componentType: 'switch';
    properties: {
      operator: string;
    };
  }
  
  export const DateCompareModel = createStepModel<DateCompareStep>(
    'dateCompare',
    'switch',
    (step) => {
      step
        .property('operator')
        .value(
            createChoiceValueModel({
                choices: [
                  'GT',
                  'GTE',
                  'LT',
                  'LTE',
                ],
              })
        )
        .hint(
          'Comparison operator, e.g. gt, gte, lt, lte'
        )
        .label('Operator');
    }
  );
  
  export function serializeDateCompare(step: DateCompareStep): {
    type: string;
    attributes: {
      label: string;
      operator: string;
      [key: string]: any;
    };
  } {
    const attributes: { label: string; operator: string; [key: string]: any } =
      {
        label: step.name,
        operator: step.properties.operator,
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
  
  
  export function deserializeDateCompare(data: any): DateCompareStep {
      const branches: { [key: string]: Sequence } = {};
      
      const attributes = data.attributes;
      Object.keys(attributes).forEach((key) => {
        if (key !== 'operator') {
          branches[key] = [deserializeToStep(attributes[key])];
        }
      });
  
    return {
      id: Uid.next(),
      componentType: 'switch',
      type: 'dateCompare',
      name: data.attributes.label ?? `Date Compare`,
      properties: { operator: data.attributes.operator},
      branches: branches,
    };
  }
  
//   export function buildConditionalStepEditor(step: ConditionalStep, context: StepEditorContext, definition: Definition, isReadonly: boolean): HTMLDivElement {
//       const branchedStep = step as unknown as ConditionalStep;
  
//       const root = document.createElement('div');
  
//       function deleteBranch(branch: HTMLDivElement, name: string) {
//         root.removeChild(branch);
//         delete branchedStep.branches[name];
//         // delete branchedStep.properties.conditions[name];
//         context.notifyChildrenChanged();
//       }
  
//       function appendBranch(name: string) {
//         const branch = document.createElement('div');
//         branch.className = 'switch-branch';
  
//         const title = document.createElement('h4');
//         title.innerText = name;
  
//         const label = document.createElement('label');
//         label.innerText = 'Action: ';
  
//         branch.appendChild(title);
//         branch.appendChild(label);
  
//         const deleteButton = createButton('Delete variable', () =>
//           deleteBranch(branch, name)
//         );
//         branch.appendChild(deleteButton);
  
//         root.appendChild(branch);
//       }
  
//       function addBranch(name: string) {
//         // step.properties.conditions[name] = randomCondition();
//         branchedStep.branches[name] = [];
//         context.notifyChildrenChanged();
//         appendBranch(name);
//       }
  
//       appendTitle(root, 'Conditional');
//       appendNameEditor(root, step, context);
//       appendValueEditor(root, step, context);
//       appendBranchEditor(root, step, context, 'Variable Name');
  
//       const addBranchButton = createButton('Add Variable', () => {
//         const input = document.getElementById(
//           'branch-editor-input'
//         ) as HTMLInputElement;
//         const branchName = input.value;
//         if (branchName) {
//           addBranch(branchName);
//         }
//       });
  
//       appendPropertyTitle(root, 'Variables');
//       root.appendChild(addBranchButton);
  
//       for (const branchName of Object.keys(step.branches)) {
//         appendBranch(branchName);
//       }
  
//       return root;
//   }
  
//   export function appendValueEditor(
//       root: HTMLElement,
//       step: ConditionalStep,
//       editorContext: StepEditorContext
//     ): void {
//       const input = document.createElement('textarea');
//       input.value = step.properties.expression;
//       input.addEventListener(
//         'input',
//         () => {
//           step.properties.expression = input.value;
//           editorContext.notifyNameChanged();
//         },
//         false
//       );
    
//       appendPropertyTitle(root, 'Expression');
//       root.appendChild(input);
//     }
  
  export function isDateCompareStep(step: Step): step is DateCompareStep {
    return step.type === 'dateCompare';
  }