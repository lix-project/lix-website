import type { CSpellSettingsWithSourceTrace, Glob, ImportFileRef } from '@cspell/cspell-types';
import { CSpellSettingsInternal, CSpellSettingsInternalFinalized } from '../Models/CSpellSettingsInternalDef';
import { OptionalOrUndefined } from '../util/types';
declare type CSpellSettingsWST = CSpellSettingsWithSourceTrace;
declare type CSpellSettingsWSTO = OptionalOrUndefined<CSpellSettingsWithSourceTrace>;
declare type CSpellSettingsI = CSpellSettingsInternal;
export declare const configSettingsFileVersion0_1 = "0.1";
export declare const configSettingsFileVersion0_2 = "0.2";
export declare const currentSettingsFileVersion = "0.2";
export declare const ENV_CSPELL_GLOB_ROOT = "CSPELL_GLOB_ROOT";
declare function mergeObjects(left: undefined, right: undefined): undefined;
declare function mergeObjects<T>(left: T, right: undefined): T;
declare function mergeObjects<T>(left: T, right: T): T;
declare function mergeObjects<T>(left: undefined, right: T): T;
export declare function mergeSettings(left: CSpellSettingsWSTO | CSpellSettingsI, ...settings: (CSpellSettingsWSTO | CSpellSettingsI | undefined)[]): CSpellSettingsI;
export declare function mergeInDocSettings(left: CSpellSettingsWSTO, right: CSpellSettingsWSTO): CSpellSettingsWST;
export declare function calcOverrideSettings(settings: CSpellSettingsWSTO, filename: string): CSpellSettingsI;
/**
 *
 * @param settings - settings to finalize
 * @returns settings where all globs and file paths have been resolved.
 */
export declare function finalizeSettings(settings: CSpellSettingsWSTO | CSpellSettingsI): CSpellSettingsInternalFinalized;
export declare function toInternalSettings(settings: undefined): undefined;
export declare function toInternalSettings(settings: CSpellSettingsI | CSpellSettingsWSTO): CSpellSettingsI;
export declare function toInternalSettings(settings?: CSpellSettingsI | CSpellSettingsWSTO): CSpellSettingsI | undefined;
/**
 * @param filename - filename
 * @param globs - globs
 * @returns true if it matches
 * @deprecated true
 * @deprecationMessage No longer actively supported. Use package: `cspell-glob`.
 */
export declare function checkFilenameMatchesGlob(filename: string, globs: Glob | Glob[]): boolean;
/**
 * Return a list of Setting Sources used to create this Setting.
 * @param settings the settings to search
 */
export declare function getSources(settings: CSpellSettingsWSTO): CSpellSettingsWSTO[];
export interface ImportFileRefWithError extends ImportFileRef {
    error: Error;
}
export interface ConfigurationDependencies {
    configFiles: string[];
    dictionaryFiles: string[];
}
export declare function extractDependencies(settings: CSpellSettingsWSTO | CSpellSettingsI): ConfigurationDependencies;
export declare const __testing__: {
    mergeObjects: typeof mergeObjects;
};
export {};
//# sourceMappingURL=CSpellSettingsServer.d.ts.map