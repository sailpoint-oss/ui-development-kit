import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  createStringValueModel
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
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterModule } from '@angular/router';
import { TransformReadV2025 } from 'sailpoint-api-client';
import { SailPointSDKService } from '../core/services/electron/sailpoint-sdk.service';
import { ConditionalModel, createConditional, deserializeConditional, getConditionalIcon, isConditionalStep, serializeConditional } from './models/conditional';
import { createDateCompare, DateCompareModel, deserializeDateCompare, getDateCompareIcon, isDateCompareStep, operatorMap, serializeDateCompare } from './models/date-compare';
import { createDateFormat, DateFormatModel, deserializeDateFormat, getDateFormatIcon, isDateFormatStep, serializeDateFormat } from './models/date-format';
import { createDateMath, DateMathModel, deserializeDateMath, getDateMathIcon, isDateMathStep, serializeDateMath } from './models/date-math';
import { createDecomposeDiacriticalMarks, deserializeDecomposeDiacriticalMarks, isDecomposeDiacriticalMarksStep, serializeDecomposeDiacriticalMarks } from './models/decompose-diacritical-marks';
import { createE164Phone, deserializeE164Phone, E164PhoneModel, getE164PhoneIcon, isE164PhoneStep, isoAlpha2Map, serializeE164Phone } from './models/e164-phone';
import { createFirstValid, deserializeFirstValid, FirstValidModel, getFirstValidIcon, isFirstValidStep, serializeFirstValid } from './models/first-valid';
import { createGenerateRandomString, deserializeGenerateRandomString, isGenerateRandomStringStep, serializeGenerateRandomString } from './models/generate-random-string';
import { createGetEndOfString, deserializeGetEndOfString, isGetEndOfStringStep, serializeGetEndOfString } from './models/get-end-of-string';
import { createGetReferenceIdentityAttribute, deserializeGetReferenceIdentityAttribute, isGetReferenceIdentityAttributeStep, serializeGetReferenceIdentityAttribute } from './models/get-reference-identity-attribute';
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
import { createString, deserializeString, isStringStep, StringModel } from './models/string';
import { createSubString, deserializeSubString, getSubStringIcon, isSubStringStep, serializeSubString, SubStringModel } from './models/substring';
import { createTrim, deserializeTrim, getTrimIcon, isTrimStep, serializeTrim } from './models/trim';
import { createUpper, deserializeUpper, getUpperIcon, isUpperStep, serializeUpper } from './models/upper';
import { createUUID, deserializeUUID, getUUIDIcon, isUUIDStep, serializeUUID } from './models/uuid';
import { MapEditorDialogComponent } from './utils/map-editor-dialog.component';


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
  templateUrl: './transform-builder.component.html',
  styleUrl: './transform-builder.component.scss',
})
export class TransformBuilderComponent {
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
  public definitionModel;

  constructor(private router: Router, private dialog: MatDialog, private sdk: SailPointSDKService) {
    const nav = this.router.getCurrentNavigation();
    this.transform = nav?.extras?.state?.transform;

    if (!this.transform) {
      this.definition = createDefinition();
    } else {
      // Deserialize the transform into a definition
      this.definition = createDefinitionFromTransform(this.transform);
      this.isReadonly = false;
    }

    this.definitionModel = createDefinitionModel(async (model) => {
      model.root(rootModel);
      model.steps([
        createAccountAttributeModel(await getAvailableSources(this.sdk)),
        ConcatModel,
        ConditionalModel,
        DateFormatModel,
        DateMathModel,
        E164PhoneModel,
        FirstValidModel,
        StaticModel,
        StringModel,
        DateCompareModel,
        IdentityAttributeModel,
        IndexOfModel,
        ISO3166Model,
        LastIndexOfModel,
        LeftPadModel,
        RandomAlphaNumericModel,
        RandomNumericModel,
        createReferenceStepModel(await getAvailableTransforms(this.sdk)),
        createRuleStepModel(await getAvailableRules(this.sdk)),
        SplitModel,
        SubStringModel
      ]);
    });

    console.log('definition', this.definitionModel);
  }

  getStringIcon(): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="gray"><g><rect fill="none" height="24" width="24"/></g><g><g><g>
    <!-- Your actual path here -->
    </g></g></g></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
  }

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
        string: this.getStringIcon,
      };
  
      const iconFn = iconMap[type];
      if (iconFn) {
        return iconFn();
      }
  
      return this.getDefaultFallbackIcon();
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

  public ngOnInit() {
    this.updateDefinitionJSON();

    const editorProvider = EditorProvider.create(this.definitionModel, {
      uidGenerator: Uid.next,
    });

    this.defaultStepEditorProvider = editorProvider.createStepEditorProvider();

    this.stepEditorProvider = (step, context, definition, isReadonly) => {

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

  isMap(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
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
      if (result) {
        properties[name] = new Map<string, string>(Object.entries(result));
        context.notifyPropertiesChanged();
      }
    });
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
    public renameBranchAtIndex<T>(obj: Record<string, T[]>, oldKey: string, newKey: string, context: StepEditorContext): void {
    if (!obj.hasOwnProperty(oldKey) || oldKey === newKey) return;

    if (obj.hasOwnProperty(newKey)) {
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
    const stepDef = this.definitionModel.steps[stepType];
    if (!stepDef?.properties) return null;  
    const propDef = stepDef.properties.find(p => p.path.parts[p.path.parts.length - 1] === key);
    return (propDef?.value?.configuration as ChoiceValueModelConfiguration).choices
  }


  stepTypeMap: Record<string, Record<string, string>> = {
    e164phone: isoAlpha2Map,
    dateCompare: operatorMap,
    iso3166: iso3166Map
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
}