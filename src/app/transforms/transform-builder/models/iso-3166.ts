import { Uid } from "sequential-workflow-designer";
import { createChoiceValueModel, createStepModel } from "sequential-workflow-editor-model";
import { BranchedStep, Step } from "sequential-workflow-model";
import { deserializeToStep, serializeStep } from "../transform-builder.component";

export function createISO3166(): ISO3166Step {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'ISO 3166',
      type: 'iso3166',
      properties: {
        format: 'alpha2',
      },
      branches: {
        input: [],
      },
    };
  }

export interface ISO3166Step extends BranchedStep {
    type: 'iso3166';
    componentType: 'switch';
    properties: {
        format: string;
    };
}

export const ISO3166Model = createStepModel<ISO3166Step>(
    'iso3166',
    'switch',
    (step) => {
      step
        .property('format')
        .value(
            createChoiceValueModel({
                choices: [
                    "alpha2",
                    "alpha3",
                    "numeric",
                  ],
              })
        )
        .hint(
          'This string value indicates the format of the ISO 3166 code. Default is alpha2.'
        )
        .label('Format');
    }
  );


    export function serializeISO3166(step: ISO3166Step) {
        // const match = step.properties.defaultRegion.match(/\(([^)]+)\)/);
        // const code = match ? match[1] : null;
      const attributes: Record<string, any> = {
        format: step.properties.format,
      };
  
       if (step.branches.input.length > 0) {
          attributes.input = serializeStep(step.branches.input[0]);
        }
    
      return {
        name: step.name,
        type: step.type,
        attributes: attributes,
      };
    }
  
export function deserializeISO3166(data: any): ISO3166Step {
      const step: ISO3166Step = {
        id: Uid.next(),
        componentType: 'switch',
        name: data.name ?? 'ISO 3166',
        type: 'iso3166',
        properties: {
            format: data.attributes?.format ?? 'alpha2',
        },
        branches: {
          input: [],
        },
      };
    
      if (data.attributes?.input) {
        step.branches.input.push(deserializeToStep(data.attributes?.input));
      }
    
      return step;
  
    }
  
export function isISO3166Step(step: Step): step is ISO3166Step {
      return step.type === 'iso3166';
    }

export const iso3166Map: Record<string, string> = {
        "ALPHA2": "Two letter country code (US)",
        "ALPHA3": "Three letter country code (USA)",
        "NUMERIC": "Three digit country code (840)",
      }
      
  