import { Uid } from "sequential-workflow-designer";
import { BranchedStep, Step } from "sequential-workflow-model";
import { deserializeToStep, serializeStep } from "../builder.component";
import { createChoiceValueModel, createStepModel } from "sequential-workflow-editor-model";

export function createE164Phone(): E164PhoneStep {
    return {
      id: Uid.next(),
      componentType: 'switch',
      name: 'E.164 Phone',
      type: 'e164phone',
      properties: {
        defaultRegion: 'US',
      },
      branches: {
        input: [],
      },
    };
  }

export interface E164PhoneStep extends BranchedStep {
    type: 'e164phone';
    componentType: 'switch';
    properties: {
        defaultRegion: string;
    };
}

export const E164PhoneModel = createStepModel<E164PhoneStep>(
    'e164phone',
    'switch',
    (step) => {
      step
        .property('defaultRegion')
        .value(
            createChoiceValueModel({
                choices: [
                    "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG",
                    "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB",
                    "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW",
                    "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM",
                    "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM",
                    "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK",
                    "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ",
                    "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA",
                    "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU",
                    "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK",
                    "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT",
                    "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW",
                    "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU",
                    "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR",
                    "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA",
                    "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE",
                    "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS",
                    "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA",
                    "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM",
                    "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG",
                    "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK",
                    "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH",
                    "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TV", "UG",
                    "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VE", "VN", "EH",
                    "YE", "ZM", "ZW"
                  ],
              })
        )
        .label('defaultRegion');
    }
  );


    export function serializeE164Phone(step: E164PhoneStep) {
        // const match = step.properties.defaultRegion.match(/\(([^)]+)\)/);
        // const code = match ? match[1] : null;
      const attributes: Record<string, any> = {
        label: step.name,
        defaultRegion: step.properties.defaultRegion,
      };
  
       if (step.branches.input.length > 0) {
          attributes.input = serializeStep(step.branches.input[0]);
        }
    
      return {
        type: step.type,
        attributes: attributes,
      };
    }
  
export function deserializeE164Phone(data: any): E164PhoneStep {
      const step: E164PhoneStep = {
        id: Uid.next(),
        componentType: 'switch',
        name: data.attributes?.label ?? 'E.164 Phone',
        type: 'e164phone',
        properties: {
            defaultRegion: data.attributes?.defaultRegion ?? 'US',
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
  
export function isE164PhoneStep(step: Step): step is E164PhoneStep {
      return step.type === 'e164phone';
    }

export const isoAlpha2Map: Record<string, string> = {
        "AF": "Afghanistan (AF)",
        "AX": "Åland Islands (AX)",
        "AL": "Albania (AL)",
        "DZ": "Algeria (DZ)",
        "AS": "American Samoa (AS)",
        "AD": "Andorra (AD)",
        "AO": "Angola (AO)",
        "AI": "Anguilla (AI)",
        "AQ": "Antarctica (AQ)",
        "AG": "Antigua and Barbuda (AG)",
        "AR": "Argentina (AR)",
        "AM": "Armenia (AM)",
        "AW": "Aruba (AW)",
        "AU": "Australia (AU)",
        "AT": "Austria (AT)",
        "AZ": "Azerbaijan (AZ)",
        "BS": "Bahamas (BS)",
        "BH": "Bahrain (BH)",
        "BD": "Bangladesh (BD)",
        "BB": "Barbados (BB)",
        "BY": "Belarus (BY)",
        "BE": "Belgium (BE)",
        "BZ": "Belize (BZ)",
        "BJ": "Benin (BJ)",
        "BM": "Bermuda (BM)",
        "BT": "Bhutan (BT)",
        "BO": "Bolivia (BO)",
        "BQ": "Bonaire, Sint Eustatius and Saba (BQ)",
        "BA": "Bosnia and Herzegovina (BA)",
        "BW": "Botswana (BW)",
        "BV": "Bouvet Island (BV)",
        "BR": "Brazil (BR)",
        "IO": "British Indian Ocean Territory (IO)",
        "BN": "Brunei Darussalam (BN)",
        "BG": "Bulgaria (BG)",
        "BF": "Burkina Faso (BF)",
        "BI": "Burundi (BI)",
        "CV": "Cabo Verde (CV)",
        "KH": "Cambodia (KH)",
        "CM": "Cameroon (CM)",
        "CA": "Canada (CA)",
        "KY": "Cayman Islands (KY)",
        "CF": "Central African Republic (CF)",
        "TD": "Chad (TD)",
        "CL": "Chile (CL)",
        "CN": "China (CN)",
        "CX": "Christmas Island (CX)",
        "CC": "Cocos (Keeling) Islands (CC)",
        "CO": "Colombia (CO)",
        "KM": "Comoros (KM)",
        "CG": "Congo (CG)",
        "CD": "Congo, Democratic Republic of the (CD)",
        "CK": "Cook Islands (CK)",
        "CR": "Costa Rica (CR)",
        "HR": "Croatia (HR)",
        "CU": "Cuba (CU)",
        "CW": "Curaçao (CW)",
        "CY": "Cyprus (CY)",
        "CZ": "Czechia (CZ)",
        "DK": "Denmark (DK)",
        "DJ": "Djibouti (DJ)",
        "DM": "Dominica (DM)",
        "DO": "Dominican Republic (DO)",
        "EC": "Ecuador (EC)",
        "EG": "Egypt (EG)",
        "SV": "El Salvador (SV)",
        "GQ": "Equatorial Guinea (GQ)",
        "ER": "Eritrea (ER)",
        "EE": "Estonia (EE)",
        "SZ": "Eswatini (SZ)",
        "ET": "Ethiopia (ET)",
        "FK": "Falkland Islands (Malvinas) (FK)",
        "FO": "Faroe Islands (FO)",
        "FJ": "Fiji (FJ)",
        "FI": "Finland (FI)",
        "FR": "France (FR)",
        "GF": "French Guiana (GF)",
        "PF": "French Polynesia (PF)",
        "TF": "French Southern Territories (TF)",
        "GA": "Gabon (GA)",
        "GM": "Gambia (GM)",
        "GE": "Georgia (GE)",
        "DE": "Germany (DE)",
        "GH": "Ghana (GH)",
        "GI": "Gibraltar (GI)",
        "GR": "Greece (GR)",
        "GL": "Greenland (GL)",
        "GD": "Grenada (GD)",
        "GP": "Guadeloupe (GP)",
        "GU": "Guam (GU)",
        "GT": "Guatemala (GT)",
        "GG": "Guernsey (GG)",
        "GN": "Guinea (GN)",
        "GW": "Guinea-Bissau (GW)",
        "GY": "Guyana (GY)",
        "HT": "Haiti (HT)",
        "HM": "Heard Island and McDonald Islands (HM)",
        "VA": "Holy See (VA)",
        "HN": "Honduras (HN)",
        "HK": "Hong Kong (HK)",
        "HU": "Hungary (HU)",
        "IS": "Iceland (IS)",
        "IN": "India (IN)",
        "ID": "Indonesia (ID)",
        "IR": "Iran (IR)",
        "IQ": "Iraq (IQ)",
        "IE": "Ireland (IE)",
        "IM": "Isle of Man (IM)",
        "IL": "Israel (IL)",
        "IT": "Italy (IT)",
        "JM": "Jamaica (JM)",
        "JP": "Japan (JP)",
        "JE": "Jersey (JE)",
        "JO": "Jordan (JO)",
        "KZ": "Kazakhstan (KZ)",
        "KE": "Kenya (KE)",
        "KI": "Kiribati (KI)",
        "KP": "Korea (Democratic People's Republic of) (KP)",
        "KR": "Korea (Republic of) (KR)",
        "KW": "Kuwait (KW)",
        "KG": "Kyrgyzstan (KG)",
        "LA": "Lao People's Democratic Republic (LA)",
        "LV": "Latvia (LV)",
        "LB": "Lebanon (LB)",
        "LS": "Lesotho (LS)",
        "LR": "Liberia (LR)",
        "LY": "Libya (LY)",
        "LI": "Liechtenstein (LI)",
        "LT": "Lithuania (LT)",
        "LU": "Luxembourg (LU)",
        "MO": "Macao (MO)",
        "MG": "Madagascar (MG)",
        "MW": "Malawi (MW)",
        "MY": "Malaysia (MY)",
        "MV": "Maldives (MV)",
        "ML": "Mali (ML)",
        "MT": "Malta (MT)",
        "MH": "Marshall Islands (MH)",
        "MQ": "Martinique (MQ)",
        "MR": "Mauritania (MR)",
        "MU": "Mauritius (MU)",
        "YT": "Mayotte (YT)",
        "MX": "Mexico (MX)",
        "FM": "Micronesia (FM)",
        "MD": "Moldova (MD)",
        "MC": "Monaco (MC)",
        "MN": "Mongolia (MN)",
        "ME": "Montenegro (ME)",
        "MS": "Montserrat (MS)",
        "MA": "Morocco (MA)",
        "MZ": "Mozambique (MZ)",
        "MM": "Myanmar (MM)",
        "NA": "Namibia (NA)",
        "NR": "Nauru (NR)",
        "NP": "Nepal (NP)",
        "NL": "Netherlands (NL)",
        "NC": "New Caledonia (NC)",
        "NZ": "New Zealand (NZ)",
        "NI": "Nicaragua (NI)",
        "NE": "Niger (NE)",
        "NG": "Nigeria (NG)",
        "NU": "Niue (NU)",
        "NF": "Norfolk Island (NF)",
        "MK": "North Macedonia (MK)",
        "MP": "Northern Mariana Islands (MP)",
        "NO": "Norway (NO)",
        "OM": "Oman (OM)",
        "PK": "Pakistan (PK)",
        "PW": "Palau (PW)",
        "PS": "Palestine (PS)",
        "PA": "Panama (PA)",
        "PG": "Papua New Guinea (PG)",
        "PY": "Paraguay (PY)",
        "PE": "Peru (PE)",
        "PH": "Philippines (PH)",
        "PN": "Pitcairn (PN)",
        "PL": "Poland (PL)",
        "PT": "Portugal (PT)",
        "PR": "Puerto Rico (PR)",
        "QA": "Qatar (QA)",
        "RE": "Réunion (RE)",
        "RO": "Romania (RO)",
        "RU": "Russian Federation (RU)",
        "RW": "Rwanda (RW)",
        "BL": "Saint Barthélemy (BL)",
        "SH": "Saint Helena, Ascension and Tristan da Cunha (SH)",
        "KN": "Saint Kitts and Nevis (KN)",
        "LC": "Saint Lucia (LC)",
        "MF": "Saint Martin (MF)",
        "PM": "Saint Pierre and Miquelon (PM)",
        "VC": "Saint Vincent and the Grenadines (VC)",
        "WS": "Samoa (WS)",
        "SM": "San Marino (SM)",
        "ST": "Sao Tome and Principe (ST)",
        "SA": "Saudi Arabia (SA)",
        "SN": "Senegal (SN)",
        "RS": "Serbia (RS)",
        "SC": "Seychelles (SC)",
        "SL": "Sierra Leone (SL)",
        "SG": "Singapore (SG)",
        "SX": "Sint Maarten (SX)",
        "SK": "Slovakia (SK)",
        "SI": "Slovenia (SI)",
        "SB": "Solomon Islands (SB)",
        "SO": "Somalia (SO)",
        "ZA": "South Africa (ZA)",
        "GS": "South Georgia and the South Sandwich Islands (GS)",
        "SS": "South Sudan (SS)",
        "ES": "Spain (ES)",
        "LK": "Sri Lanka (LK)",
        "SD": "Sudan (SD)",
        "SR": "Suriname (SR)",
        "SJ": "Svalbard and Jan Mayen (SJ)",
        "SE": "Sweden (SE)",
        "CH": "Switzerland (CH)",
        "SY": "Syrian Arab Republic (SY)",
        "TW": "Taiwan (TW)",
        "TJ": "Tajikistan (TJ)",
        "TZ": "Tanzania (TZ)",
        "TH": "Thailand (TH)",
        "TL": "Timor-Leste (TL)",
        "TG": "Togo (TG)",
        "TK": "Tokelau (TK)",
        "TO": "Tonga (TO)",
        "TT": "Trinidad and Tobago (TT)",
        "TN": "Tunisia (TN)",
        "TR": "Turkey (TR)",
        "TM": "Turkmenistan (TM)",
        "TV": "Tuvalu (TV)",
        "UG": "Uganda (UG)",
        "UA": "Ukraine (UA)",
        "AE": "United Arab Emirates (AE)",
        "GB": "United Kingdom (GB)",
        "US": "United States (US)",
        "UY": "Uruguay (UY)",
        "UZ": "Uzbekistan (UZ)",
        "VU": "Vanuatu (VU)",
        "VE": "Venezuela (VE)",
        "VN": "Viet Nam (VN)",
        "EH": "Western Sahara (EH)",
        "YE": "Yemen (YE)",
        "ZM": "Zambia (ZM)",
        "ZW": "Zimbabwe (ZW)"
      }
      
  