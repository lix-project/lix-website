import { TrieRoot } from '../../TrieNode';
import { CompoundWordsMethod, YieldResult } from './walkerTypes';
/**
 * Ask for the next result.
 * goDeeper of true tells the walker to go deeper in the Trie if possible. Default is true.
 * This can be used to limit the walker's depth.
 */
export declare type HintedWalkerIterator = Generator<YieldResult, void, Hinting | undefined>;
export declare function hintedWalker(root: TrieRoot, ignoreCase: boolean, hint: string, compoundingMethod: CompoundWordsMethod | undefined, emitWordSeparator?: string): HintedWalkerIterator;
/**
 * Walks the Trie and yields a value at each node.
 * next(goDeeper: boolean):
 */
declare function hintedWalkerNext(root: TrieRoot, ignoreCase: boolean, hint: string, compoundingMethod: CompoundWordsMethod | undefined, emitWordSeparator?: string): HintedWalkerIterator;
export interface Hinting {
    goDeeper: boolean;
}
export declare const __testing__: {
    hintedWalkerNext: typeof hintedWalkerNext;
};
export {};
//# sourceMappingURL=hintedWalker.d.ts.map