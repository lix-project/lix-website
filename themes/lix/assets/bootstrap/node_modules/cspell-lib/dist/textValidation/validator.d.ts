import type { CSpellUserSettings } from '@cspell/cspell-types';
import { CSpellSettingsInternalFinalized } from '../Models/CSpellSettingsInternalDef';
import type { ValidationOptions, ValidationResult } from './textValidator';
export declare const diagSource = "cSpell Checker";
export interface ValidationIssue extends ValidationResult {
    suggestions?: string[];
}
export interface ValidateTextOptions {
    /** Generate suggestions where there are spelling issues. */
    generateSuggestions?: boolean;
    /** The number of suggestions to generate. The higher the number the longer it takes. */
    numSuggestions?: number;
}
export declare function validateText(text: string, settings: CSpellUserSettings, options?: ValidateTextOptions): Promise<ValidationIssue[]>;
export declare function settingsToValidateOptions(settings: CSpellSettingsInternalFinalized): ValidationOptions;
export interface CheckTextInfo {
    text: string;
    items: TextInfoItem[];
}
export interface TextInfoItem {
    text: string;
    startPos: number;
    endPos: number;
    flagIE: IncludeExcludeFlag;
    isError?: boolean;
}
export declare enum IncludeExcludeFlag {
    INCLUDE = "I",
    EXCLUDE = "E"
}
export declare function checkText(text: string, settings: CSpellUserSettings): Promise<CheckTextInfo>;
//# sourceMappingURL=validator.d.ts.map