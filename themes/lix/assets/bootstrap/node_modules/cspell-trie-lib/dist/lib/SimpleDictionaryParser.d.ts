import { Trie } from './trie';
export interface ParseDictionaryOptions {
    compoundCharacter: string;
    optionalCompoundCharacter: string;
    forbiddenPrefix: string;
    caseInsensitivePrefix: string;
    /**
     * Start of a single-line comment.
     * @default "#"
     */
    commentCharacter: string;
    /**
     * If word starts with prefix, do not strip case or accents.
     * @default false;
     */
    keepExactPrefix: string;
    /**
     * Tell the parser to automatically strip case and accents.
     * @default true
     */
    stripCaseAndAccents: boolean;
}
export declare const defaultParseDictionaryOptions: ParseDictionaryOptions;
/**
 * Normalizes a dictionary words based upon prefix / suffixes.
 * Case insensitive versions are also generated.
 * @param lines - one word per line
 * @param _options - defines prefixes used when parsing lines.
 * @returns words that have been normalized.
 */
export declare function parseDictionaryLines(lines: Iterable<string>, options?: Partial<ParseDictionaryOptions>): Iterable<string>;
export declare function parseLinesToDictionary(lines: Iterable<string>, options?: Partial<ParseDictionaryOptions>): Trie;
export declare function parseDictionary(text: string, options?: Partial<ParseDictionaryOptions>): Trie;
//# sourceMappingURL=SimpleDictionaryParser.d.ts.map