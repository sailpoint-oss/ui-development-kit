import { Component, OnInit } from '@angular/core';
import {
  Definition,
  Designer,
  RootEditorContext,
  Properties,
  Uid,
  Step,
  StepEditorContext,
  StepsConfiguration,
  ToolboxConfiguration,
  ValidatorConfiguration,
  BranchedStep,
  StepEditorProvider,
} from 'sequential-workflow-designer';
import { SequentialWorkflowDesignerModule } from 'sequential-workflow-designer-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



function createAccountAttribute(): Step  {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Account Attribute',
    type: 'account-attribute',
    properties: {
      accountAttribute: 'first_name',
      sourceName: 'Employees',
      accountSortAttribute: '',
      accountSortDescending: false,
      accountReturnFirstLink: false,
      accountFilter: '',
      accountPropertyFilter: ''
    },
  };
}
export interface AccountAttributeStep extends Step {
  type: 'accountAttribute';
  componentType: 'task';
  properties: {
    attributeName: string;
    sourceName: string;
    accountSortAttribute: string;
    accountSortDescending: boolean;
    accountReturnFirstLink: boolean;
    accountFilter: string;
    accountPropertyFilter: string;
  };
}

import { createStepModel, createStringValueModel, VariableDefinitions } from 'sequential-workflow-editor-model';

export const AccountAttributeStepModel = createStepModel<AccountAttributeStep>('accountAttribute', 'task', step => {
  step.property('attributeName')
    .value(
      createStringValueModel({
        minLength: 1
      })
    )
    .label('Account Attribute Name');
  step.property('sourceName')
    .value(
      createStringValueModel({
        minLength: 1
      })
    )
    .label('Source Name');
});

function createStatic(): Step  {
  return {
    id: Uid.next(),
    componentType: 'task',
    name: 'Static',
    type: 'static',
    properties: {
      value: ''
    },
  };
}

function createConcatenation(): BranchedStep  {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'Concatenation',
    type: 'concat',
    properties: { },
    branches: {
      responseOne: [], 
      responseTwo: [],
    },
  };
}

function createFirstValid(): BranchedStep  {
  return {
    id: Uid.next(),
    componentType: 'switch',
    name: 'First Valid',
    type: 'first-valid',
    properties: { },
    branches: {
      responseOne: [], 
      responseTwo: [],
      responseThree: [],
    },
  };
}

// function createIf(): BranchedStep {
//   return {
//     id: Uid.next(),
//     componentType: 'switch',
//     name: 'If',
//     type: 'if',
//     properties: { velocity: 10 },
//     branches: {
//       true: [],
//       false: [],
//     },
//   };
// }

function createDefinition(): Definition {
  return {
    properties: {
      velocity: 0,
    },
    sequence: [createAccountAttribute(), createFirstValid()],
  };
}

import { createDefinitionModel } from 'sequential-workflow-editor-model';
import { EditorProvider } from 'sequential-workflow-editor';
import { createRootModel, createVariableDefinitionsValueModel } from 'sequential-workflow-editor-model';

export const rootModel = createRootModel<MyDefinition>(root => {
  root.property('inputs')
    .value(
      createVariableDefinitionsValueModel({})
    );
});

export interface MyDefinition extends Definition {
  properties: {
    inputs: VariableDefinitions;
  };
}

export const definitionModel = createDefinitionModel((model) => { 
  model.root(rootModel)
  model.steps([AccountAttributeStepModel])
 });

@Component({
  selector: 'app-transform-builder',
  standalone: true,
  imports: [
    SequentialWorkflowDesignerModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './transform-builder.component.html',
  styleUrl: './transform-builder.component.scss',
})
export class TransformBuilderComponent implements OnInit {
  private designer?: Designer;

  public definition: Definition = createDefinition();
  public definitionJSON?: string;
  public selectedStepId: string | null = null;
  public isReadonly = false;
  public isToolboxCollapsed = false;
  public isEditorCollapsed = false;
  public isValid?: boolean;
  public stepEditorProvider?: StepEditorProvider;


  public readonly toolboxConfiguration: ToolboxConfiguration = {
    groups: [
      {
        name: 'Transforms',
        steps: [createAccountAttribute(), createConcatenation(), createFirstValid(), createStatic()],
      },
    ],
  };
  public readonly stepsConfiguration: StepsConfiguration = {
    iconUrlProvider: (componentType, type) => {
      if (type === 'account-attribute') {
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

      if (type === 'first-valid') {
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


  
      // Default fallback icon
      return null;
    }
  };

  // public readonly validatorConfiguration: ValidatorConfiguration = {
  //   step: (step: Step) =>
  //     !!step.name && Number(step.properties['velocity']) >= 0,
  //   root: (definition: Definition) =>
  //     Number(definition.properties['velocity']) >= 0,
  // };

  public ngOnInit() {
    this.updateDefinitionJSON();

    const editorProvider = EditorProvider.create(definitionModel, {
      uidGenerator: Uid.next
    });

    this.stepEditorProvider = editorProvider.createStepEditorProvider();

  }

  public onDesignerReady(designer: Designer) {
    this.designer = designer;
    this.updateIsValid();
    console.log('designer ready', this.designer);
  }

  public onDefinitionChanged(definition: Definition) {
    this.definition = definition;
    this.updateIsValid();
    this.updateDefinitionJSON();
    console.log('definition has changed');
  }

  public onSelectedStepIdChanged(stepId: string | null) {
    this.selectedStepId = stepId;
  }

  public onIsToolboxCollapsedChanged(isCollapsed: boolean) {
    this.isToolboxCollapsed = isCollapsed;
  }

  public onIsEditorCollapsedChanged(isCollapsed: boolean) {
    this.isEditorCollapsed = isCollapsed;
  }

  public updateName(step: Step, event: Event, context: StepEditorContext) {
    step.name = (event.target as HTMLInputElement).value;
    context.notifyNameChanged();
  }

  public updateProperty(
    properties: Properties,
    name: string,
    event: Event,
    context: RootEditorContext | StepEditorContext
  ) {
    properties[name] = (event.target as HTMLInputElement).value;
    context.notifyPropertiesChanged();
  }

  public reloadDefinitionClicked() {
    this.definition = createDefinition();
    this.updateDefinitionJSON();
  }

  public toggleReadonlyClicked() {
    this.isReadonly = !this.isReadonly;
  }

  public toggleSelectedStepClicked() {
    if (this.selectedStepId) {
      this.selectedStepId = null;
    } else if (this.definition.sequence.length > 0) {
      this.selectedStepId = this.definition.sequence[0].id;
    }
  }

  public toggleToolboxClicked() {
    this.isToolboxCollapsed = !this.isToolboxCollapsed;
  }

  public toggleEditorClicked() {
    this.isEditorCollapsed = !this.isEditorCollapsed;
  }

  private updateDefinitionJSON() {
    this.definitionJSON = JSON.stringify(this.definition, null, 2);
  }

  private updateIsValid() {
    this.isValid = this.designer?.isValid();
  }
}
