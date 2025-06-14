import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Designer,
  RootEditorContext,
  RootEditorProvider,
  StepEditorContext,
  StepEditorProvider,
  StepsConfiguration,
  ToolboxConfiguration,
  Uid,
  ValidatorConfiguration,
} from 'sequential-workflow-designer';
import { SequentialWorkflowDesignerModule } from 'sequential-workflow-designer-angular';
import { EditorProvider } from 'sequential-workflow-editor';
import {
  ChoiceValueModelConfiguration,
  createDefinitionModel,
  createRootModel,
  createStringValueModel,
  DefinitionModel
} from 'sequential-workflow-editor-model';
import {
  Branches,
  Definition,
  Properties,
  Step
} from 'sequential-workflow-model';
import {
  createAccountAttribute,
  createAccountAttributeModel,
  deserializeAccountAttribute,
  getAccountAttributeIcon,
  getAvailableSources,
  isAccountAttributeStep,
  serializeAccountAttribute
} from './models/account-attribute';
import {
  ConcatModel,
  createConcat,
  deserializeConcat,
  getConcatIcon,
  isConcatStep,
  serializeConcat
} from './models/concat';
import {
  createStatic,
  deserializeStatic,
  getStaticIcon,
  isStaticStep,
  serializeStatic,
  StaticModel
} from './models/static';

import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterModule } from '@angular/router';
import { TransformReadV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from '../../sailpoint-sdk.service';
import { ConditionalModel, createConditional, deserializeConditional, getConditionalIcon, isConditionalStep, serializeConditional } from './models/conditional';
import { createDateCompare, DateCompareModel, deserializeDateCompare, getDateCompareIcon, isDateCompareStep, operatorMap, serializeDateCompare } from './models/date-compare';
import { createDateFormat, DateFormatMap, DateFormatModel, deserializeDateFormat, getDateFormatIcon, isDateFormatStep, serializeDateFormat } from './models/date-format';
import { createDateMath, DateMathModel, deserializeDateMath, getDateMathIcon, isDateMathStep, serializeDateMath } from './models/date-math';
import { createDecomposeDiacriticalMarks, deserializeDecomposeDiacriticalMarks, isDecomposeDiacriticalMarksStep, serializeDecomposeDiacriticalMarks } from './models/decompose-diacritical-marks';
import { createE164Phone, deserializeE164Phone, E164PhoneModel, getE164PhoneIcon, isE164PhoneStep, isoAlpha2Map, serializeE164Phone } from './models/e164-phone';
import { createFirstValid, deserializeFirstValid, FirstValidModel, getFirstValidIcon, isFirstValidStep, serializeFirstValid } from './models/first-valid';
import { createGenerateRandomString, deserializeGenerateRandomString, GenerateRandomStringModel, isGenerateRandomStringStep, serializeGenerateRandomString } from './models/generate-random-string';
import { createGetEndOfString, deserializeGetEndOfString, GetEndOfStringModel, isGetEndOfStringStep, serializeGetEndOfString } from './models/get-end-of-string';
import { createGetReferenceIdentityAttribute, deserializeGetReferenceIdentityAttribute, GetReferenceIdentityAttributeModel, isGetReferenceIdentityAttributeStep, serializeGetReferenceIdentityAttribute } from './models/get-reference-identity-attribute';
import { createIdentityAttribute, deserializeIdentityAttribute, getIdentityAttributeIcon, IdentityAttributeModel, isIdentityAttributeStep, serializeIdentityAttribute } from './models/identity-attribute';
import { createIndexOf, deserializeIndexOf, IndexOfModel, isIndexOfStep, serializeIndexOf } from './models/index-of';
import { createISO3166, deserializeISO3166, isISO3166Step, iso3166Map, ISO3166Model, serializeISO3166 } from './models/iso-3166';
import { createLastIndexOf, deserializeLastIndexOf, isLastIndexOfStep, LastIndexOfModel, serializeLastIndexOf } from './models/last-index-of';
import { createLeftPad, deserializeLeftPad, getLeftPadIcon, isLeftPadStep, LeftPadModel, serializeLeftPad } from './models/left-pad';
import { createLookup, deserializeLookup, getLookupIcon, isLookupStep, serializeLookup } from './models/lookup';
import { createLower, deserializeLower, getLowerIcon, isLowerStep, serializeLower } from './models/lower';
import { createNameNormalizer, deserializeNameNormalizer, isNameNormalizerStep, serializeNameNormalizer } from './models/name-normalizer';
import { createRandomAlphaNumeric, deserializeRandomAlphaNumeric, getRandomAlphaNumericIcon, isRandomAlphaNumericStep, RandomAlphaNumericModel, serializeRandomAlphaNumeric } from './models/random-alphanumeric';
import { createRandomNumeric, deserializeRandomNumeric, isRandomNumericStep, RandomNumericModel, serializeRandomNumeric } from './models/random-numeric';
import { createReference, createReferenceStepModel, deserializeReference, getAvailableTransforms, getReferenceIcon, isReferenceStep, serializeReference } from './models/reference';
import { createReplace, deserializeReplace, getReplaceIcon, isReplaceStep, serializeReplace } from './models/replace';
import { createReplaceAll, deserializeReplaceAll, getReplaceAllIcon, isReplaceAllStep, serializeReplaceAll } from './models/replace-all';
import { createRFC5646, deserializeRFC5646, isRFC5646Step, serializeRFC5646 } from './models/rfc-5646';
import { createRightPad, deserializeRightPad, getRightPadIcon, isRightPadStep, serializeRightPad } from './models/right-pad';
import { createRule, createRuleStepModel, deserializeRule, getAvailableRules, isRuleStep, serializeRule } from './models/rule';
import { createSplit, deserializeSplit, getSplitIcon, isSplitStep, serializeSplit, SplitModel } from './models/split';
import { createString, deserializeString, getStringIcon, isStringStep, StringModel } from './models/string';
import { createSubString, deserializeSubString, getSubStringIcon, isSubStringStep, serializeSubString, SubStringModel } from './models/substring';
import { createTrim, deserializeTrim, getTrimIcon, isTrimStep, serializeTrim } from './models/trim';
import { createUpper, deserializeUpper, getUpperIcon, isUpperStep, serializeUpper } from './models/upper';
import { createUUID, deserializeUUID, getUUIDIcon, isUUIDStep, serializeUUID } from './models/uuid';
import { MapEditorDialogComponent } from './utils/map-editor-dialog.component';
import { TransformPreviewComponent } from './utils/transform-preview.component';

interface StepDefinition {
  id: string;
  name: string;
  type: string;
  componentType: string;
  properties: Record<string, any>;
  sequence?: StepDefinition[];
  branches?: Record<string, StepDefinition[]>;
}

interface WorkflowDefinition {
  properties: Record<string, any>;
  sequence: StepDefinition[];
}

// Result type for enhanced search with path information
interface StepSearchResult {
  step: StepDefinition;
  path: (string | number)[];
  sequence: StepDefinition[];
  index: number;
}

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

function createDefinition(): Definition {
  return {
    properties: {
      name: 'Transform Name',
    },
    sequence: [createAccountAttribute()],
  };
}

function createMyDefinitionModel(configuration: { sources: string[], transforms: string[], rules: string[] }): DefinitionModel<Definition> {
  return createDefinitionModel(model => {
    model.root(rootModel)
    model.steps([
            createAccountAttributeModel(configuration.sources),
            ConcatModel,
            ConditionalModel,
            DateCompareModel,
            DateFormatModel,
            DateMathModel,
            E164PhoneModel,
            FirstValidModel,
            GenerateRandomStringModel,
            GetEndOfStringModel,
            GetReferenceIdentityAttributeModel,
            IdentityAttributeModel,
            IndexOfModel,
            ISO3166Model,
            LastIndexOfModel,
            LeftPadModel,
            RandomAlphaNumericModel,
            RandomNumericModel,
            createReferenceStepModel(configuration.transforms),
            createRuleStepModel(configuration.rules),
            StaticModel,
            StringModel,
            SplitModel,
            SubStringModel
    ]);
  });
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
  } else if (isDecomposeDiacriticalMarksStep(step)) {
    return serializeDecomposeDiacriticalMarks(step);
  } else if (isE164PhoneStep(step)) {
    return serializeE164Phone(step);
  } else if (isGenerateRandomStringStep(step)) {
    return serializeGenerateRandomString(step);
  } else if (isGetEndOfStringStep(step)) {
    return serializeGetEndOfString(step);
  } else if (isGetReferenceIdentityAttributeStep(step)) {
    return serializeGetReferenceIdentityAttribute(step);
  } else if (isIdentityAttributeStep(step)) {
    return serializeIdentityAttribute(step);
  } else if (isIndexOfStep(step)) {
    return serializeIndexOf(step);
  } else if (isISO3166Step(step)) {
    return serializeISO3166(step);
  } else if (isLastIndexOfStep(step)) {
    return serializeLastIndexOf(step);
  } else if (isLeftPadStep(step)) {
    return serializeLeftPad(step);
  } else if (isLookupStep(step)) {
    return serializeLookup(step);
  } else if (isLowerStep(step)) {
    return serializeLower(step);
  } else if (isNameNormalizerStep(step)) {
    return serializeNameNormalizer(step);
  } else if (isRandomAlphaNumericStep(step)) {
    return serializeRandomAlphaNumeric(step);
  } else if (isRandomNumericStep(step)) {
    return serializeRandomNumeric(step);
  } else if (isReferenceStep(step)) {
    return serializeReference(step);
  } else if (isReplaceAllStep(step)) {
    return serializeReplaceAll(step);
  } else if (isReplaceStep(step)) {
    return serializeReplace(step);
  } else if (isRFC5646Step(step)) {
    return serializeRFC5646(step);
  } else if (isRightPadStep(step)) {
    return serializeRightPad(step);
  } else if (isRuleStep(step)){
    return serializeRule(step);
  } else if (isSplitStep(step)) {
    return serializeSplit(step);
  } else if (isSubStringStep(step)) {
    return serializeSubString(step);
  } else if (isTrimStep(step)) {
    return serializeTrim(step);
  } else if (isUpperStep(step)) {
    return serializeUpper(step);
  } else if (isUUIDStep(step)) {
    return serializeUUID(step);
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

type Deserializer = (data: any) => Step;

const deserializers: Record<string, Deserializer> = {
  accountAttribute: deserializeAccountAttribute,
  concat: deserializeConcat,
  static: deserializeStatic,
  conditional: deserializeConditional,
  dateCompare: deserializeDateCompare,
  dateFormat: deserializeDateFormat,
  dateMath: deserializeDateMath,
  firstValid: deserializeFirstValid,
  decomposeDiacriticalMarks: deserializeDecomposeDiacriticalMarks,
  e164phone: deserializeE164Phone,
  generateRandomString: deserializeGenerateRandomString,
  getEndOfString: deserializeGetEndOfString,
  getReferenceIdentityAttribute: deserializeGetReferenceIdentityAttribute,
  identityAttribute: deserializeIdentityAttribute,
  indexOf: deserializeIndexOf,
  iso3166: deserializeISO3166,
  lastIndexOf: deserializeLastIndexOf,
  leftPad: deserializeLeftPad,
  lookup: deserializeLookup,
  lower: deserializeLower,
  nameNormailizer: deserializeNameNormalizer,
  randomAlphaNumeric: deserializeRandomAlphaNumeric,
  randomNumeric: deserializeRandomNumeric,
  reference: deserializeReference,
  replaceAll: deserializeReplaceAll,
  replace: deserializeReplace,
  rfc5646: deserializeRFC5646,
  rightPad: deserializeRightPad,
  rule: deserializeRule,
  split: deserializeSplit,
  substring: deserializeSubString,
  trim: deserializeTrim,
  upper: deserializeUpper,
  uuid: deserializeUUID
};

export function deserializeToStep(data: any): Step {
  if (typeof data === 'string') {
    return deserializeString(data);
  }

  const deserializer = deserializers[data.type];
  if (deserializer) {
    return deserializer(data);
  }

  throw new Error(`Unsupported step type: ${data.type}`);
}
@Component({
  selector: 'app-transform-builder',
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
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './transform-builder.component.html',
  styleUrl: './transform-builder.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TransformBuilderComponent implements OnInit {
  @Input() transform?: TransformReadV2025;

  private designer?: Designer;
  public validatorConfiguration?: ValidatorConfiguration;
  public stepEditorProvider?: StepEditorProvider;
  public rootEditorProvider?: RootEditorProvider;
  public definition?: Definition;
  public definitionJSON?: string;
  public isToolboxCollapsed = false;
  public isEditorCollapsed = false;
  private defaultStepEditorProvider?: StepEditorProvider;
  public isValid?: boolean;
  public customInputDate?: string;
  public preview?: string
  public isReadonly = false;
  public definitionModel?: DefinitionModel<Definition>;
  public isReady = false;

  constructor(private router: Router, private dialog: MatDialog, private sdk: SailPointSDKService) {}

  getDefaultFallbackIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path fill="gray" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
  }
  
  public readonly stepsConfiguration: StepsConfiguration = {
    iconUrlProvider: (componentType, type) => {
      const iconMap: Record<string, () => string> = {
        accountAttribute: getAccountAttributeIcon,
        concat: getConcatIcon,
        firstValid: getFirstValidIcon,
        static: getStaticIcon,
        conditional: getConditionalIcon,
        dateCompare: getDateCompareIcon,
        dateFormat: getDateFormatIcon,
        dateMath: getDateMathIcon,
        e164phone: getE164PhoneIcon,
        identityAttribute: getIdentityAttributeIcon,
        lookup: getLookupIcon,
        leftPad: getLeftPadIcon,
        randomAlphaNumeric: getRandomAlphaNumericIcon,
        randomNumeric: getRandomAlphaNumericIcon,
        reference: getReferenceIcon,
        replaceAll: getReplaceAllIcon,
        replace: getReplaceIcon,
        rightPad: getRightPadIcon,
        split: getSplitIcon,
        substring: getSubStringIcon,
        trim: getTrimIcon,
        lower: getLowerIcon,
        upper: getUpperIcon,
        uuid: getUUIDIcon,
        string: getStringIcon,
      };
  
      const iconFn = iconMap[type];
      if (iconFn) {
        return iconFn();
      }
  
      return this.getDefaultFallbackIcon();
    },

    canInsertStep: (step, targetSequence, targetIndex) => {
      const stepType = step.type;
      
      // Check the step that would be directly above (previous)
      if (targetIndex > 0) {
        const previousStep = targetSequence[targetIndex - 1];
        if (previousStep.type === stepType) {
          return false; // Same type directly above
        }
      }
      
      // Check the step that would be directly below (next)
      if (targetIndex < targetSequence.length) {
        const nextStep = targetSequence[targetIndex];
        if (nextStep.type === stepType) {
          return false; // Same type directly below
        }
      }
      
      return true; // Allow insertion
    },
    // Optional: Also prevent moving existing steps to invalid positions
    canMoveStep: (sourceSequence, step, targetSequence, targetIndex) => {
      // Reuse the same logic for move operations
      const stepType = step.type;
      
      // Check adjacent positions in target sequence
      const previousStep = targetIndex > 0 ? targetSequence[targetIndex - 1] : null;
      const nextStep = targetIndex < targetSequence.length ? targetSequence[targetIndex] : null;
      
      if ((previousStep && previousStep.type === stepType) || 
          (nextStep && nextStep.type === stepType)) {
        return false;
      }
      
      return true;
    }
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
          createDecomposeDiacriticalMarks(),
          createE164Phone(),
          createFirstValid(),
          createGenerateRandomString(),
          createGetEndOfString(),
          createGetReferenceIdentityAttribute(),
          createIdentityAttribute(),
          createIndexOf(),
          createISO3166(),
          createLastIndexOf(),
          createLeftPad(),
          createLookup(),
          createLower(),
          createNameNormalizer(),
          createRandomAlphaNumeric(),
          createRandomNumeric(),
          createReference(),
          createReplaceAll(),
          createReplace(),
          createRFC5646(),
          createRightPad(),
          createRule(),
          createSplit(),
          createStatic(),
          createSubString(),
          createTrim(),
          createUpper(),
          createUUID()
        ],
      },
      {
        name: 'Primitives',
        steps: [createString()],
      },
    ],
  };
  
  public ngOnInit(): void {

    if (!this.transform) {
      this.definition = createDefinition();
    } else {
      this.definition = createDefinitionFromTransform(this.transform);
      this.isReadonly = false;
    }

    this.updateDefinitionJSON();
  
    void (async () => {
      try {
        const [sources, transforms, rules] = await Promise.all([
          getAvailableSources(this.sdk),
          getAvailableTransforms(this.sdk),
          getAvailableRules(this.sdk),
        ]);
  
        const model = createMyDefinitionModel({ sources, transforms, rules });
  
        if (!model) {
          throw new Error('Failed to create DefinitionModel.');
        }
  
        this.definitionModel = model;
  
        const editorProvider = EditorProvider.create(this.definitionModel, {
          uidGenerator: () => Uid.next(),
        });
  
        this.rootEditorProvider = editorProvider.createRootEditorProvider();
        this.stepEditorProvider = editorProvider.createStepEditorProvider();
  
        this.validatorConfiguration = {
          root: editorProvider.createRootValidator(),
          step: editorProvider.createStepValidator(),
        };
  
        this.isReady = true;
      } catch (error) {
        console.error('Failed during ngOnInit async setup:', error);
      }
    })();
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
    const transformedResult = this.definition?.sequence?.[0] ? serializeStep(this.definition.sequence[0]) : undefined;
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

  public onSelectedStepIdChanged(selectedStepId: string | null) {
    console.log('onSelectedStepIdChanged', selectedStepId);
    this.isEditorCollapsed = false;
  }

  objectKeys = Object.keys;

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  isNumber(value: any): boolean {
    return typeof value === 'number' || (!isNaN(value) && !isNaN(parseFloat(value)));
  }

  isMap(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  editMap(properties: Properties, name: string, context: StepEditorContext): void {
    const currentMap = properties[name];

    const mapObject = currentMap instanceof Map
    ? Object.fromEntries(currentMap)
    : currentMap;

    const dialogRef = this.dialog.open(MapEditorDialogComponent, {
      width: '800px',
      height: '600px',
      maxWidth: 'none',
      data: { map: mapObject }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (this.isStringRecord(result)) {
        properties[name] = new Map(Object.entries(result));
        context.notifyPropertiesChanged();
      }
    });
    
  }

  isStringRecord(value: unknown): value is Record<string, string> {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Object.values(value).every(v => typeof v === 'string')
    );
  }

  togglePreview(): void {

  const selectedStepId = this.designer?.getSelectedStepId();
  const definition = this.designer?.getDefinition();
  
  let serializedTransform: string | undefined;

    if (selectedStepId) {
    // Serialize selected step
    if (!definition) {
      alert('Definition not found');
      return;
    }
    const selectedStep = this.findStepById(definition, selectedStepId);
    
    if (!selectedStep) {
      alert('Selected step not found');
      return;
    }

    
    serializedTransform = JSON.stringify(serializeStep(selectedStep), null, 2);

  } else {
    // Serialize whole definition
    if (definition?.sequence[0]) {
      serializedTransform = JSON.stringify(serializeStep(definition.sequence[0]), null, 2);
    } else {
      serializedTransform = undefined;
    }
  }




    this.dialog.open(TransformPreviewComponent, {
      width: '70%',
      height: '75%',
      maxWidth: 'none',
      data: { sdkService: this.sdk, transformDefinition: serializedTransform }
    });
  
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

  // Basic findStepById function
  findStepById(definition: Definition, stepId: string): StepDefinition | null {
    function searchInSequence(sequence: StepDefinition[]): StepDefinition | null {
      for (const step of sequence) {
        // Direct match
        if (step.id === stepId) {
          return step;
        }
        
        // Search in nested sequence
        if (step.sequence && Array.isArray(step.sequence)) {
          const found = searchInSequence(step.sequence);
          if (found) return found;
        }
        
        // Search in branches
        if (step.branches && typeof step.branches === 'object') {
          for (const branchKey in step.branches) {
            const branch = step.branches[branchKey];
            if (Array.isArray(branch)) {
              const found = searchInSequence(branch);
              if (found) return found;
            }
          }
        }
      }
      
      return null;
    }
    
    return searchInSequence(definition.sequence);
  }

  getBranchNames(branches: Record<string, any[]>): string[] {
    return Object.keys(branches || {});
  }

  public updateProperty(
    properties: Properties,
    name: string,
    event: Event | MatSlideToggleChange,
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


public renameBranchAtIndex<T>(
  obj: Record<string, T[]>,
  oldKey: string,
  newKey: string,
  context: StepEditorContext
): void {
  if (!Object.prototype.hasOwnProperty.call(obj, oldKey) || oldKey === newKey) return;

  if (Object.prototype.hasOwnProperty.call(obj, newKey)) {
    throw new Error(`Key "${newKey}" already exists.`);
  }

  obj[newKey] = obj[oldKey];
  delete obj[oldKey];

  context.notifyChildrenChanged();
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
    if (!this.definitionModel) return null;

    const stepDef = this.definitionModel.steps[stepType];
    if (!stepDef?.properties) return null;  
    const propDef = stepDef.properties.find(p => p.path.parts[p.path.parts.length - 1] === key);
    return (propDef?.value?.configuration as ChoiceValueModelConfiguration).choices
  }


  stepTypeMap: Record<string, Record<string, string>> = {
    e164phone: isoAlpha2Map,
    dateCompare: operatorMap,
    iso3166: iso3166Map,
    dateFormat: DateFormatMap
  }
  
  public getChoiceLabel(stepType: string, choice: string): string {
    const lookup = this.stepTypeMap[stepType]
    return lookup?.[choice.toUpperCase()] ?? choice
  }

  public branchingEnabled(step: Step): boolean {
    if (isConcatStep(step) || isStaticStep(step) || isConditionalStep(step) || isFirstValidStep(step)) {
      return true;
    } else {
      return false;
    }
  }

  isRequired(stepName: string, key: string): boolean {
    if (!this.definitionModel) return false;

    const stepDef = this.definitionModel.steps[stepName];
    if (!stepDef?.properties) return false;
    const propDef = stepDef.properties.find(p => p.path.parts[p.path.parts.length - 1] === key);
    if (!propDef) return false;
    const config = propDef.value?.configuration;
    if (!config) return false;

    // NullableVariableValueModelConfiguration
    if ('isRequired' in config && typeof config.isRequired === 'boolean') {
      return config.isRequired;
    }
  
    // StringValueModelConfiguration
    if ('minLength' in config && typeof config.minLength === 'number') {
      return config.minLength >= 1;
    }
  
    if ('choices' in config && Array.isArray(config.choices)) {
      return config.choices.length > 1;
    }


    // const stepDef = this.definitionModel.steps[stepName];
    // console.log('stepDef', stepDef);

    return false;
  }
  
}