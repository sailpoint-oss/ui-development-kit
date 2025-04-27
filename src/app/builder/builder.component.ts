import { Component } from '@angular/core';
import { SequentialWorkflowDesignerModule } from 'sequential-workflow-designer-angular';
import {
  createDefinitionModel,
  createRootModel,
  createStringValueModel,
  createVariableDefinitionsValueModel,
  VariableDefinitions,
} from 'sequential-workflow-editor-model';
import {
  BranchedStep,
  Definition,
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
import { createDateFormat, DateFormatModel, isDateFormatStep, serializeDateFormat } from './models/date-format';

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
  }
  if (isConcatStep(step)) {
    return serializeConcat(step);
  }
  if (isStaticStep(step)) {
    return serializeStatic(step);
  }
  if (isStringStep(step)) {
    return step.properties.value;
  }
  if (isConditionalStep(step)) {
    return serializeConditional(step);
  }
  if (isDateCompareStep(step)) {
    return serializeDateCompare(step);
  }
  if (isDateFormatStep(step)) {
    return serializeDateFormat(step);
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
    return createDateFormat();
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

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.transform = nav?.extras?.state?.transform;

    if (!this.transform) {
      this.definition = createDefinition();
    } else {
      // Deserialize the transform into a definition
      this.definition = createDefinitionFromTransform(this.transform);
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
          <path fill="grey" d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>`;
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
}