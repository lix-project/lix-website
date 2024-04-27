import { CSpellSettingsWithSourceTrace, DictionaryDefinitionAugmented, DictionaryDefinitionCustom, DictionaryDefinitionPreferred } from '@cspell/cspell-types';
import { WeightMap } from 'cspell-trie-lib';
import { OptionalOrUndefined } from '../util/types';
export declare const SymbolCSpellSettingsInternal: unique symbol;
export interface CSpellSettingsInternal extends Omit<CSpellSettingsWithSourceTrace, 'dictionaryDefinitions'> {
    [SymbolCSpellSettingsInternal]: true;
    dictionaryDefinitions?: DictionaryDefinitionInternal[];
}
export interface CSpellSettingsInternalFinalized extends CSpellSettingsInternal {
    finalized: true;
    ignoreRegExpList: RegExp[];
    includeRegExpList: RegExp[];
}
declare type DictionaryDefinitionCustomUniqueFields = Omit<DictionaryDefinitionCustom, keyof DictionaryDefinitionPreferred>;
export interface DictionaryDefinitionInternal extends Readonly<DictionaryDefinitionPreferred>, Readonly<Partial<DictionaryDefinitionCustomUniqueFields>>, Readonly<DictionaryDefinitionAugmented> {
    /**
     * Optional weight map used to improve suggestions.
     */
    readonly weightMap?: WeightMap | undefined;
    /** The path to the config file that contains this dictionary definition */
    readonly __source?: string | undefined;
}
export interface DictionaryDefinitionInternalWithSource extends DictionaryDefinitionInternal {
    readonly __source: string;
}
export declare function createCSpellSettingsInternal(parts?: OptionalOrUndefined<Partial<CSpellSettingsInternal>>): CSpellSettingsInternal;
export declare function isCSpellSettingsInternal(cs: CSpellSettingsInternal | CSpellSettingsWithSourceTrace | OptionalOrUndefined<CSpellSettingsInternal | CSpellSettingsWithSourceTrace>): cs is CSpellSettingsInternal;
export {};
//# sourceMappingURL=CSpellSettingsInternalDef.d.ts.map