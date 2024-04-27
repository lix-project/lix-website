import type { DictionaryDefinitionAugmented } from '@cspell/cspell-types';
export type { CharacterSet, CharacterSetCosts, EditCosts } from '@cspell/cspell-types';
export declare type DictionaryInformation = Exclude<DictionaryDefinitionAugmented['dictionaryInformation'], undefined>;
export declare type SuggestionEditCosts = Exclude<DictionaryInformation['suggestionEditCosts'], undefined>;
export declare type HunspellInformation = Exclude<DictionaryInformation['hunspellInformation'], undefined>;
export declare type HunspellCosts = Exclude<HunspellInformation['costs'], undefined>;
export declare type HunspellAff = HunspellInformation['aff'];
//# sourceMappingURL=DictionaryInformation.d.ts.map