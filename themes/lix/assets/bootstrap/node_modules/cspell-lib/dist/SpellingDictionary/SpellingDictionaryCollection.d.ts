import { CompoundWordsMethod, FindResult, HasOptions, SearchOptions, SpellingDictionary, SpellingDictionaryOptions, SuggestionCollector, SuggestionResult, SuggestOptions } from './SpellingDictionary';
declare function identityString(w: string): string;
export declare class SpellingDictionaryCollection implements SpellingDictionary {
    readonly dictionaries: SpellingDictionary[];
    readonly name: string;
    readonly options: SpellingDictionaryOptions;
    readonly mapWord: typeof identityString;
    readonly type = "SpellingDictionaryCollection";
    readonly source: string;
    readonly isDictionaryCaseSensitive: boolean;
    readonly containsNoSuggestWords: boolean;
    constructor(dictionaries: SpellingDictionary[], name: string);
    has(word: string, hasOptions?: HasOptions): boolean;
    find(word: string, hasOptions?: HasOptions): FindResult | undefined;
    isNoSuggestWord(word: string, options?: HasOptions): boolean;
    isForbidden(word: string): boolean;
    suggest(word: string, numSuggestions?: number, compoundMethod?: CompoundWordsMethod, numChanges?: number, ignoreCase?: boolean): SuggestionResult[];
    suggest(word: string, suggestOptions: SuggestOptions): SuggestionResult[];
    _suggest(word: string, suggestOptions: SuggestOptions): SuggestionResult[];
    get size(): number;
    genSuggestions(collector: SuggestionCollector, suggestOptions: SuggestOptions): void;
    getErrors(): Error[];
    private _isForbiddenInDict;
    private _isNoSuggestWord;
}
export declare function createCollection(dictionaries: SpellingDictionary[], name: string): SpellingDictionaryCollection;
declare function isWordInAnyDictionary(dicts: SpellingDictionary[], word: string, options: SearchOptions): SpellingDictionary | undefined;
declare function isWordForbiddenInAnyDictionary(dicts: SpellingDictionary[], word: string): SpellingDictionary | undefined;
export declare const __testing__: {
    isWordInAnyDictionary: typeof isWordInAnyDictionary;
    isWordForbiddenInAnyDictionary: typeof isWordForbiddenInAnyDictionary;
};
export {};
//# sourceMappingURL=SpellingDictionaryCollection.d.ts.map