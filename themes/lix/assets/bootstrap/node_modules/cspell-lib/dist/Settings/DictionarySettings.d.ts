import type { DictionaryDefinition } from '@cspell/cspell-types';
import { CSpellSettingsInternal, DictionaryDefinitionInternal, DictionaryDefinitionInternalWithSource } from '../Models/CSpellSettingsInternalDef';
import { DictionaryReferenceCollection } from './DictionaryReferenceCollection';
export declare type DefMapArrayItem = [string, DictionaryDefinitionInternal];
/**
 * Combines the list of desired dictionaries with the list of dictionary
 * definitions. Order does not matter, but the number of leading `!` does.
 *
 * Excluding dictionaries.
 * - Adding `!` to a dictId will remove the dictionary.
 * - Adding `!!` will add it back.
 *
 * @param dictRefCol - dictionaries desired
 * @param defs - dictionary definitions
 * @returns map from dictIds to definitions
 */
export declare function filterDictDefsToLoad(dictRefCol: DictionaryReferenceCollection, defs: DictionaryDefinitionInternal[]): DictionaryDefinitionInternal[];
export declare function mapDictDefsToInternal(defs: undefined, pathToSettingsFile: string): undefined;
export declare function mapDictDefsToInternal(defs: DictionaryDefinition[], pathToSettingsFile: string): DictionaryDefinitionInternalWithSource[];
export declare function mapDictDefsToInternal(defs: DictionaryDefinition[] | undefined, pathToSettingsFile: string): DictionaryDefinitionInternalWithSource[] | undefined;
export declare function mapDictDefToInternal(def: DictionaryDefinition, pathToSettingsFile: string): DictionaryDefinitionInternalWithSource;
export declare function isDictionaryDefinitionWithSource(d: DictionaryDefinition | DictionaryDefinitionInternalWithSource): d is DictionaryDefinitionInternalWithSource;
export declare function calcDictionaryDefsToLoad(settings: CSpellSettingsInternal): DictionaryDefinitionInternal[];
export declare function isDictionaryDefinitionInternal(def: DictionaryDefinition | DictionaryDefinitionInternal): def is DictionaryDefinitionInternal;
//# sourceMappingURL=DictionarySettings.d.ts.map