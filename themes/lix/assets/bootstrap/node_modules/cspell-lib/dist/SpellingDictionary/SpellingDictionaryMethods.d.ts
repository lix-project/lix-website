import { DictionaryInformation } from '@cspell/cspell-types';
import { CompoundWordsMethod, SuggestionResult, WeightMap } from 'cspell-trie-lib';
import { HasOptions, SearchOptions, SpellingDictionary, SuggestOptions } from './SpellingDictionary';
export { impersonateCollector, suggestionCollector } from 'cspell-trie-lib';
export declare type FilterSuggestionsPredicate = (word: SuggestionResult) => boolean;
export declare type SuggestArgs = Parameters<SpellingDictionary['suggest']> | Parameters<(word: string, numSuggestions?: number, compoundMethod?: CompoundWordsMethod, numChanges?: number, ignoreCase?: boolean) => SuggestionResult[]>;
export declare const defaultNumSuggestions = 10;
export declare function wordSearchFormsArray(word: string, isDictionaryCaseSensitive: boolean, ignoreCase: boolean): string[];
export declare function wordSearchForms(word: string, isDictionaryCaseSensitive: boolean, ignoreCase: boolean): Set<string>;
export declare function wordSuggestFormsArray(word: string): string[];
export declare function wordSuggestForms(word: string): Set<string>;
interface DictionaryWordForm {
    w: string;
    p: string;
}
declare function wordDictionaryForms(word: string, prefixNoCase: string): IterableIterator<DictionaryWordForm>;
export declare function wordDictionaryFormsCollector(prefixNoCase: string): (word: string) => Iterable<string>;
export declare function hasOptionToSearchOption(opt: HasOptions | undefined): SearchOptions;
export declare function suggestArgsToSuggestOptions(args: SuggestArgs): SuggestOptions;
export declare function createWeightMapFromDictionaryInformation(di: undefined): undefined;
export declare function createWeightMapFromDictionaryInformation(di: DictionaryInformation): WeightMap;
export declare function createWeightMapFromDictionaryInformation(di: DictionaryInformation | undefined): WeightMap | undefined;
export declare const __testMethods: {
    wordSearchForms: typeof wordSearchForms;
    wordSearchFormsArray: typeof wordSearchFormsArray;
    wordDictionaryForms: typeof wordDictionaryForms;
    wordDictionaryFormsCollector: typeof wordDictionaryFormsCollector;
};
//# sourceMappingURL=SpellingDictionaryMethods.d.ts.map