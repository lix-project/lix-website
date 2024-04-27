import type { CSpellSettings, LocaleId } from '@cspell/cspell-types';
import { LanguageId } from './LanguageIds';
import type { SuggestionResult } from './SpellingDictionary';
interface SuggestedWordBase extends SuggestionResult {
    dictionaries: string[];
}
export interface SuggestedWord extends SuggestedWordBase {
    noSuggest: boolean;
    forbidden: boolean;
}
export interface SuggestionsForWordResult {
    word: string;
    suggestions: SuggestedWord[];
}
export interface SuggestionOptions {
    /**
     * languageId to use when determining file type.
     */
    languageId?: LanguageId | LanguageId[];
    /**
     * Locale to use.
     */
    locale?: LocaleId;
    /**
     * Strict case and accent checking
     * @default true
     */
    strict?: boolean;
    /**
     * List of dictionaries to use. If specified, only that list of dictionaries will be used.
     */
    dictionaries?: string[];
    /**
     * The number of suggestions to make.
     * @default 8
     */
    numSuggestions?: number;
    /**
     * Max number of changes / edits to the word to get to a suggestion matching suggestion.
     * @default 4
     */
    numChanges?: number;
    /**
     * If multiple suggestions have the same edit / change "cost", then included them even if
     * it causes more than `numSuggestions` to be returned.
     * @default true
     */
    includeTies?: boolean;
    /**
     * By default we want to use the default configuration, but there are cases
     * where someone might not want that.
     * @default true
     */
    includeDefaultConfig?: boolean;
}
export declare function suggestionsForWords(words: Iterable<string> | AsyncIterable<string>, options?: SuggestionOptions, settings?: CSpellSettings): AsyncIterable<SuggestionsForWordResult>;
export declare function suggestionsForWord(word: string, options?: SuggestionOptions, settings?: CSpellSettings): Promise<SuggestionsForWordResult>;
export declare class SuggestionError extends Error {
    readonly code: string;
    constructor(message: string, code: string);
}
export {};
//# sourceMappingURL=suggestions.d.ts.map