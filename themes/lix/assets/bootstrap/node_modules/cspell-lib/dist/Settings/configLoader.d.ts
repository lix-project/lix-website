import type { CSpellSettingsWithSourceTrace, CSpellUserSettings, ImportFileRef, PnPSettings as PnPSettingsStrict } from '@cspell/cspell-types';
import { URI } from 'vscode-uri';
import { CSpellSettingsInternal } from '../Models/CSpellSettingsInternalDef';
import { OptionalOrUndefined } from '../util/types';
import { LoaderResult } from './pnpLoader';
declare type CSpellSettingsWST = CSpellSettingsWithSourceTrace;
declare type CSpellSettingsI = CSpellSettingsInternal;
declare type PnPSettings = OptionalOrUndefined<PnPSettingsStrict>;
export declare const sectionCSpell = "cSpell";
export declare const defaultFileName = "cspell.json";
export declare const defaultConfigFilenames: readonly string[];
/**
 * normalizeSettings handles correcting all relative paths, anchoring globs, and importing other config files.
 * @param rawSettings - raw configuration settings
 * @param pathToSettingsFile - path to the source file of the configuration settings.
 */
declare function normalizeSettings(rawSettings: CSpellSettingsWST, pathToSettingsFile: string, pnpSettings: PnPSettings): CSpellSettingsI;
export declare function readSettings(filename: string): CSpellSettingsI;
export declare function readSettings(filename: string, defaultValues: CSpellSettingsWST): CSpellSettingsI;
export declare function readSettings(filename: string, relativeTo: string): CSpellSettingsI;
export declare function readSettings(filename: string, relativeTo: string, defaultValues: CSpellSettingsWST): CSpellSettingsI;
export declare function searchForConfig(searchFrom: string | undefined, pnpSettings?: PnPSettings): Promise<CSpellSettingsI | undefined>;
export declare function searchForConfigSync(searchFrom: string | undefined, pnpSettings?: PnPSettings): CSpellSettingsI | undefined;
/**
 * Load a CSpell configuration files.
 * @param file - path or package reference to load.
 * @param pnpSettings - PnP settings
 * @returns normalized CSpellSettings
 */
export declare function loadConfig(file: string, pnpSettings?: PnPSettings): Promise<CSpellSettingsI>;
/**
 * Load a CSpell configuration files.
 * @param filename - path or package reference to load.
 * @param pnpSettings - PnP settings
 * @returns normalized CSpellSettings
 */
export declare function loadConfigSync(filename: string, pnpSettings?: PnPSettings): CSpellSettingsI;
export declare function loadPnP(pnpSettings: PnPSettings, searchFrom: URI): Promise<LoaderResult>;
export declare function loadPnPSync(pnpSettings: PnPSettings, searchFrom: URI): LoaderResult;
export declare function readRawSettings(filename: string, relativeTo?: string): CSpellSettingsWST;
/**
 *
 * @param filenames - settings files to read
 * @returns combined configuration
 * @deprecated true
 */
export declare function readSettingsFiles(filenames: string[]): CSpellSettingsI;
export declare function getGlobalSettings(): CSpellSettingsI;
export declare function getCachedFileSize(): number;
export declare function clearCachedSettingsFiles(): void;
export interface ImportFileRefWithError extends ImportFileRef {
    error: Error;
}
export declare function extractImportErrors(settings: CSpellSettingsWST): ImportFileRefWithError[];
declare function normalizeCacheSettings(settings: Pick<CSpellUserSettings, 'cache'>, pathToSettingsDir: string): Pick<CSpellUserSettings, 'cache'>;
declare function validateRawConfigVersion(config: CSpellUserSettings | {
    version: unknown;
}, fileRef: ImportFileRef): void;
declare function validateRawConfigExports(config: CSpellUserSettings, fileRef: ImportFileRef): void;
export declare const __testing__: {
    normalizeCacheSettings: typeof normalizeCacheSettings;
    normalizeSettings: typeof normalizeSettings;
    validateRawConfigExports: typeof validateRawConfigExports;
    validateRawConfigVersion: typeof validateRawConfigVersion;
};
export {};
//# sourceMappingURL=configLoader.d.ts.map