import { Component } from '@angular/core';
import { SequentialWorkflowDesignerModule } from 'sequential-workflow-designer-angular';
import {
  ChoiceValueModel,
  ChoiceValueModelConfiguration,
  createDefinitionModel,
  createRootModel,
  createStringValueModel,
  createVariableDefinitionsValueModel,
  VariableDefinitions,
} from 'sequential-workflow-editor-model';
import {
  BranchedStep,
  Branches,
  Definition,
  Properties,
  Sequence,
  Step,
} from 'sequential-workflow-model';
import {
  StepsConfiguration,
  ToolboxConfiguration,
  ValidatorConfiguration,
  StepEditorProvider,
  RootEditorProvider,
  Designer,
  StepEditorContext,
  RootEditorContext,
} from 'sequential-workflow-designer';
import { EditorProvider } from 'sequential-workflow-editor';
import { Uid } from 'sequential-workflow-designer';
import {
  createAccountAttribute,
  AccountAttributeModel,
  serializeAccountAttribute,
  isAccountAttributeStep,
  deserializeAccountAttribute,
} from './models/account-attribute';
import {
  buildStaticStepEditor,
  createStatic,
  deserializeStatic,
  isStaticStep,
  serializeStatic,
  StaticModel,
  StaticStep,
} from './models/static';
import {
  buildConcatStepEditor,
  ConcatModel,
  createConcat,
  deserializeConcat,
  isConcatStep,
  serializeConcat,
} from './models/concat';
import { CommonModule } from '@angular/common';

import { MatFormField } from '@angular/material/form-field';
import { app } from 'electron';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { TransformReadV2025 } from 'sailpoint-api-client';
import { buildConditionalStepEditor, ConditionalModel, createConditional, deserializeConditional, isConditionalStep, serializeConditional } from './models/conditional';
import { createString, deserializeString, isStringStep, StringModel } from './models/string';
import { createDateCompare, DateCompareModel, deserializeDateCompare, isDateCompareStep, serializeDateCompare } from './models/date-compare';
import { createDateFormat, DateFormatModel, deserializeDateFormat, isDateFormatStep, serializeDateFormat } from './models/date-format';
import { createDateMath, DateMathModel, deserializeDateMath, isDateMathStep, serializeDateMath } from './models/date-math';
import { buildFirstValidStepEditor, deserializeFirstValid, FirstValidModel, isFirstValidStep, serializeFirstValid } from './models/first-valid';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

export interface MyDefinition extends Definition {
  properties: {
    name: string;
  };
}

export const rootModel = createRootModel<MyDefinition>((root) => {
  root
    .property('name')
    .value(
      createStringValueModel({
        defaultValue: 'lorem ipsum',
      })
    )
    .label('Transform Name');
});

export const definitionModel = createDefinitionModel((model) => {
  model.root(rootModel);
  model.steps([
    AccountAttributeModel,
    ConcatModel,
    ConditionalModel,
    DateFormatModel,
    DateMathModel,
    FirstValidModel,
    StaticModel,
    StringModel,
    DateCompareModel
  ]);
});

function createDefinition(): Definition {
  return {
    properties: {
      name: 'Transform Name',
    },
    sequence: [createAccountAttribute()],
  };
}

export const serializeStep = (step: Step) => {
  if (isAccountAttributeStep(step)) {
    return serializeAccountAttribute(step);
  } else if (isConcatStep(step)) {
    return serializeConcat(step);
  } else if (isStaticStep(step)) {
    return serializeStatic(step);
  } else if (isStringStep(step)) {
    return step.properties.value;
  } else if (isConditionalStep(step)) {
    return serializeConditional(step);
  } else if (isDateCompareStep(step)) {
    return serializeDateCompare(step);
  } else if (isDateFormatStep(step)) {
    return serializeDateFormat(step);
  } else if (isDateMathStep(step)) {
    return serializeDateMath(step);
  } else if (isFirstValidStep(step)) {
    return serializeFirstValid(step);
  }

  throw new Error(`Unsupported step type: ${step.type}`);
};

export function createDefinitionFromTransform(data: any): Definition {
  return {
    properties: {
      name: data.name,
    },
    sequence: [deserializeToStep(data)],
  };
}

export function deserializeToStep(data: any): Step {
  if (typeof data === 'string') {
    return deserializeString(data);
  } else if (data.type === 'accountAttribute') {
    return deserializeAccountAttribute(data);
  } else if (data.type === 'concat') {
    return deserializeConcat(data);
  } else if (data.type === 'static') {
    return deserializeStatic(data);
  } else if (data.type === 'conditional') {
    return deserializeConditional(data);
  } else if (data.type === 'dateCompare') {
    return deserializeDateCompare(data);
  } else if (data.type === 'dateFormat') {
    return deserializeDateFormat(data);
  } else if (data.type === 'dateMath') {
    return deserializeDateMath(data);
  } else if (data.type === 'firstValid') {
    return deserializeFirstValid(data);
  }

  throw new Error(`Unsupported step type: ${data.type}`);
}
@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    SequentialWorkflowDesignerModule,
    CommonModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
})
export class BuilderComponent {
  private designer?: Designer;
  public validatorConfiguration?: ValidatorConfiguration;
  public stepEditorProvider?: StepEditorProvider;
  public rootEditorProvider?: RootEditorProvider;
  public definition: Definition;
  public definitionJSON?: string;
  public isToolboxCollapsed = false;
  public isEditorCollapsed = false;
  private defaultStepEditorProvider?: StepEditorProvider;
  public transform?: TransformReadV2025;
  public isValid?: boolean;
  public isReadonly = false;
  public definitionModel = definitionModel;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.transform = nav?.extras?.state?.transform;

    if (!this.transform) {
      this.definition = createDefinition();
    } else {
      // Deserialize the transform into a definition
      this.definition = createDefinitionFromTransform(this.transform);
      this.isReadonly = false;
      console.log(definitionModel)
    }
  }

  public readonly stepsConfiguration: StepsConfiguration = {
    iconUrlProvider: (componentType, type) => {
      if (type === 'accountAttribute') {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="gray">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
          </svg>`;
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }
      if (type === 'concat') {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24"/></g><g>
            <path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z"/></g>
          </svg>`;
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }

      if (type === 'firstValid') {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="gray">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"/>
          </svg>`;
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }

      if (type === 'static') {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24"/></g><g><g><g>
          // <path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"/></g></g></g>
          // </svg>`;
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }

      if (type === 'conditional') {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z"/></g></g></g></svg>`;
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }

      if(type === 'string') {
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24"/></g><g><g><g>
        // <path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"/></g></g></g>
        // </svg>`;
      const encoded = encodeURIComponent(svg.trim());
      return `data:image/svg+xml,${encoded}`;
      }

      if (type === 'dateCompare') {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path fill="gray" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>
          </svg>`;
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }

      if (type === 'dateFormat') {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path fill="gray" d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>`;
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }
      if (type === 'dateMath') {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
        <path fill="gray" d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"/>
        </svg>`
        const encoded = encodeURIComponent(svg.trim());
        return `data:image/svg+xml,${encoded}`;
      }
      // Default fallback icon
      return null;
    },
    canInsertStep: (step, targetSequence, targetIndex) => {
      // console.log('canInsertStep', step, targetSequence, targetIndex);
      // const previousStep = targetSequence[targetIndex - 1];
      // if (previousStep && previousStep.type === 'accountAttribute') {
      //   return false;
      // }
      return true;
    },
  };

  public readonly toolboxConfiguration: ToolboxConfiguration = {
    groups: [
      {
        name: 'Transforms',
        steps: [
          createAccountAttribute(),
          createConcat(),
          createConditional(),
          createDateCompare(),
          createDateFormat(),
          createDateMath(),
          createStatic(),
        ],
      },
      {
        name: 'Primitives',
        steps: [createString()],
      },
    ],
  };

  public ngOnInit() {
    this.updateDefinitionJSON();

    const editorProvider = EditorProvider.create(definitionModel, {
      uidGenerator: Uid.next,
    });

    this.defaultStepEditorProvider = editorProvider.createStepEditorProvider();

    this.stepEditorProvider = (step, context, definition, isReadonly) => {
      if (isConcatStep(step)) {
        return buildConcatStepEditor(step, context, definition, isReadonly);
      }
      if (isStaticStep(step)) {
        return buildStaticStepEditor(step, context, definition, isReadonly);
      }
      if (isConditionalStep(step)) {
        return buildConditionalStepEditor(step, context, definition, isReadonly);
      }
      if(isFirstValidStep(step)) {
        return buildFirstValidStepEditor(step, context, definition, isReadonly);
      }

      return this.defaultStepEditorProvider!(
        step,
        context,
        definition,
        isReadonly
      );
    };

    this.rootEditorProvider = editorProvider.createRootEditorProvider();

    this.validatorConfiguration = {
      root: editorProvider.createRootValidator(),
      step: editorProvider.createStepValidator(),
    };

  }


  public onDesignerReady(designer: Designer) {
    this.designer = designer;
    this.updateIsValid();
  }

  public onDefinitionChanged(definition: Definition) {
    this.definition = definition;
    this.updateDefinitionJSON();
  }

  private updateDefinitionJSON() {
    const transformedResult = serializeStep(this.definition.sequence[0]);
    this.definitionJSON = JSON.stringify(transformedResult, null, 2);
  }

  public toggleToolboxClicked() {
    this.isToolboxCollapsed = !this.isToolboxCollapsed;
  }

  public toggleEditorClicked() {
    this.isEditorCollapsed = !this.isEditorCollapsed;
  }
  private updateIsValid() {
    this.isValid = this.designer?.isValid();
  }
  public toggleReadonlyClicked() {
    this.isReadonly = !this.isReadonly;
  }

  objectKeys = Object.keys;

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  getBranchNames(branches: Record<string, any[]>): string[] {
    return Object.keys(branches || {});
  }

  public updateProperty(
    properties: Properties,
    name: string,
    event: Event,
    context: RootEditorContext | StepEditorContext
  ) {
    console.log(event)
    if (event instanceof MatSlideToggleChange) {
      properties[name] = event.checked;
    } else if (event instanceof InputEvent) {
      properties[name] = (event.target as HTMLInputElement).value;
    }
    context.notifyPropertiesChanged();
  }

  public removeBranch(
    branches: Branches,
    index: number,
    event: Event,
    context: StepEditorContext
  ) {
    console.log('removeBranch', branches, index);
    this.deleteBranchAtIndex(branches, index);
    console.log('branches', branches);
    context.notifyChildrenChanged()
  }

  public deleteBranchAtIndex<T>(obj: Record<string, T[]>, index: number): void {
    const keys = Object.keys(obj);
    if (index < 0 || index >= keys.length) return;
  
    const keyToDelete = keys[index];
    delete obj[keyToDelete];
  }

  public addBranch(
    branches: Branches,
    context: StepEditorContext
  ) {
    const index = Object.keys(branches || {}).length + 1
    branches["New Branch " + index] = [];
    context.notifyChildrenChanged();
  }

  public getChoicesForProperty(stepType: string, key: string): string[] | null {
    const stepDef = this.definitionModel.steps[stepType];
    if (!stepDef?.properties) return null;  
    const propDef = stepDef.properties.find(p => p.path.parts[p.path.parts.length - 1] === key);
    return (propDef?.value?.configuration as ChoiceValueModelConfiguration).choices
  }
  
}