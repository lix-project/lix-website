import { Sequence } from 'gensequence';
import { PartialTrieOptions, TrieNode, TrieOptions, TrieRoot } from './TrieNode';
import type { PartialWithUndefined, RemoveUndefined } from './types';
import { YieldResult } from './walker';
export declare function insert(text: string, node?: TrieNode): TrieNode;
export declare function isWordTerminationNode(node: TrieNode): boolean;
/**
 * Sorts the nodes in a trie in place.
 */
export declare function orderTrie(node: TrieNode): void;
/**
 * Generator an iterator that will walk the Trie parent then children in a depth first fashion that preserves sorted order.
 */
export declare function walk(node: TrieNode): Sequence<YieldResult>;
export declare const iterateTrie: typeof walk;
/**
 * Generate a Iterator that can walk a Trie and yield the words.
 */
export declare function iteratorTrieWords(node: TrieNode): Sequence<string>;
export declare function mergeOptionalWithDefaults(options: PartialTrieOptions): TrieOptions;
export declare function createTrieRoot(options: PartialTrieOptions): TrieRoot;
export declare function createTriFromList(words: Iterable<string>, options?: PartialTrieOptions): TrieRoot;
export declare function has(node: TrieNode, word: string): boolean;
export declare function findNode(node: TrieNode, prefix: string): TrieNode | undefined;
export declare function countNodes(root: TrieNode): number;
export declare function countWords(root: TrieNode): number;
export declare function isCircular(root: TrieNode): boolean;
/**
 * Creates a new object of type T based upon the field values from `value`.
 * n[k] = value[k] ?? default[k] where k must be a field in default.
 * Note: it will remove fields not in defaultValue!
 * @param value
 * @param defaultValue
 */
export declare function mergeDefaults<T>(value: PartialWithUndefined<T> | undefined, defaultValue: T): T;
export declare function trieNodeToRoot(node: TrieNode, options: PartialTrieOptions): TrieRoot;
/**
 * Normalize word unicode.
 * @param text - text to normalize
 * @returns returns a word normalized to `NFC`
 */
export declare const normalizeWord: (text: string) => string;
/**
 * converts text to lower case and removes any accents.
 * @param text - text to convert
 * @returns lowercase word without accents
 * @deprecated true
 */
export declare const normalizeWordToLowercase: (text: string) => string;
/**
 * generate case insensitive forms of a word
 * @param text - text to convert
 * @returns the forms of the word.
 */
export declare const normalizeWordForCaseInsensitive: (text: string) => string[];
export declare function isDefined<T>(t: T | undefined): t is T;
export declare function clean<T>(t: T): RemoveUndefined<T>;
//# sourceMappingURL=trie-util.d.ts.map