import type { SuggestionCollector, SuggestionResult } from 'cspell-trie-lib';
import { CompoundWordsMethod, Trie } from 'cspell-trie-lib';
import { FindResult, HasOptions, SpellingDictionary, SpellingDictionaryOptions, SuggestOptions } from './SpellingDictionary';
export declare class SpellingDictionaryFromTrie implements SpellingDictionary {
    readonly trie: Trie;
    readonly name: string;
    readonly options: SpellingDictionaryOptions;
    readonly source: string;
    static readonly cachedWordsLimit = 50000;
    private _size;
    readonly knownWords: Set<string>;
    readonly unknownWords: Set<string>;
    readonly mapWord: (word: string) => string;
    readonly type = "SpellingDictionaryFromTrie";
    readonly isDictionaryCaseSensitive: boolean;
    readonly containsNoSuggestWords: boolean;
    private weightMap;
    constructor(trie: Trie, name: string, options: SpellingDictionaryOptions, source?: string, size?: number);
    get size(): number;
    has(word: string, hasOptions?: HasOptions): boolean;
    find(word: string, hasOptions?: HasOptions): FindResult | undefined;
    private resolveOptions;
    private _find;
    private findAnyForm;
    isNoSuggestWord(word: string, options?: HasOptions): boolean;
    isForbidden(word: string): boolean;
    suggest(word: string, numSuggestions?: number, compoundMethod?: CompoundWordsMethod, numChanges?: number, ignoreCase?: boolean): SuggestionResult[];
    suggest(word: string, suggestOptions: SuggestOptions): SuggestionResult[];
    private _suggest;
    genSuggestions(collector: SuggestionCollector, suggestOptions: SuggestOptions): void;
    getErrors(): Error[];
}
export declare function createSpellingDictionaryTrie(data: Iterable<string>, name: string, source: string, options: SpellingDictionaryOptions): SpellingDictionary;
//# sourceMappingURL=SpellingDictionaryFromTrie.d.ts.map