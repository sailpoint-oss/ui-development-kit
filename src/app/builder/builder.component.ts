import { Component } from '@angular/core';
import { SequentialWorkflowDesignerModule } from 'sequential-workflow-designer-angular';
import { createDefinitionModel, createRootModel, createStringValueModel, createVariableDefinitionsValueModel, VariableDefinitions } from 'sequential-workflow-editor-model';
import { Definition, Step } from 'sequential-workflow-model';
import { StepsConfiguration, ToolboxConfiguration, ValidatorConfiguration, StepEditorProvider, RootEditorProvider, Designer } from 'sequential-workflow-designer';
import { EditorProvider } from 'sequential-workflow-editor';
import { Uid } from 'sequential-workflow-designer';
import { createAccountAttribute, AccountAttributeModel, serializeAccountAttribute, isAccountAttributeStep } from './models/account-attribute';
import { createStatic, isStaticStep, serializeStatic, StaticModel } from './models/static';
import { ConcatModel, createConcat, isConcatStep, serializeConcat } from './models/concat';

export interface MyDefinition extends Definition {
  properties: {
    inputs: string;
  };
}

export const rootModel = createRootModel<MyDefinition>(root => {
  root.property('inputs')
    .value(
      createStringValueModel({
        defaultValue: 'lorem ipsum',
      })
    );
});

export const definitionModel = createDefinitionModel((model) => {
  model.root(rootModel)
  model.steps([AccountAttributeModel, StaticModel, ConcatModel]);
 });


function createDefinition(): Definition {
  return {
    properties: {
      inputs: 'lorem ipsum',
    },
    sequence: [createAccountAttribute()],
  };
}

export const serializeStep = (step: Step) => {
  if (isAccountAttributeStep(step)) {
    return serializeAccountAttribute(step);
  }

  if(isConcatStep(step)) {
    return serializeConcat(step);
  }

  if (isStaticStep(step)) {
    return serializeStatic(step);
  }

  throw new Error(`Unsupported step type: ${step.type}`);
}

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [SequentialWorkflowDesignerModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {
  private designer?: Designer;
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


  
      // Default fallback icon
      return null;
    }
  };
  public validatorConfiguration?: ValidatorConfiguration;
  public stepEditorProvider?: StepEditorProvider;
  public rootEditorProvider?: RootEditorProvider;
  public definition: Definition = createDefinition();
  public definitionJSON?: string;
  public isToolboxCollapsed = false;
  public isEditorCollapsed = false;

  public readonly toolboxConfiguration: ToolboxConfiguration = {
      groups: [
        {
          name: 'Transforms',
          steps: [createAccountAttribute(), createConcat(), createStatic()],
        },
      ],
  };

  public ngOnInit() {
    this.updateDefinitionJSON();

    const editorProvider = EditorProvider.create(definitionModel, {
      uidGenerator: Uid.next
    });
    this.stepEditorProvider = editorProvider.createStepEditorProvider();
    this.rootEditorProvider = editorProvider.createRootEditorProvider();

    this.validatorConfiguration = {
      root: editorProvider.createRootValidator(),
      step: editorProvider.createStepValidator()
    };
  }
  
  public onDesignerReady(designer: Designer) {
    this.designer = designer;
  }
  
  public onDefinitionChanged(definition: Definition) {
    this.definition = definition;
    this.updateDefinitionJSON();
  }

  private updateDefinitionJSON() {
    const transformedResult = serializeStep(this.definition.sequence[0])
    this.definitionJSON = JSON.stringify(transformedResult, null, 2);
  }

  public toggleToolboxClicked() {
    this.isToolboxCollapsed = !this.isToolboxCollapsed;
  }

  public toggleEditorClicked() {
    this.isEditorCollapsed = !this.isEditorCollapsed;
  }


}

