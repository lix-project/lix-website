import type { TextOffset as TextOffsetRW } from '@cspell/cspell-types';
import { Sequence } from 'gensequence';
import { SpellingDictionary } from '../SpellingDictionary/SpellingDictionary';
import * as TextRange from '../util/TextRange';
declare type TextOffsetRO = Readonly<TextOffsetRW>;
export interface ValidationOptions extends IncludeExcludeOptions {
    maxNumberOfProblems?: number;
    maxDuplicateProblems?: number;
    minWordLength?: number;
    flagWords?: string[];
    allowCompoundWords?: boolean;
    /** ignore case when checking words against dictionary or ignore words list */
    ignoreCase: boolean;
}
export interface CheckOptions extends ValidationOptions {
    allowCompoundWords: boolean;
    ignoreCase: boolean;
}
export interface IncludeExcludeOptions {
    ignoreRegExpList?: RegExp[];
    includeRegExpList?: RegExp[];
}
export interface WordRangeAcc {
    textOffset: TextOffsetRO;
    isIncluded: boolean;
    rangePos: number;
}
export interface ValidationResult extends TextOffsetRW {
    line: TextOffsetRW;
    isFlagged?: boolean;
    isFound?: boolean;
}
export declare const defaultMaxNumberOfProblems = 200;
export declare const defaultMaxDuplicateProblems = 5;
export declare const defaultMinWordLength = 4;
export declare const minWordSplitLen = 3;
export declare function validateText(text: string, dict: SpellingDictionary, options: ValidationOptions): Sequence<ValidationResult>;
export declare function calcTextInclusionRanges(text: string, options: IncludeExcludeOptions): TextRange.MatchRange[];
export interface LineSegment {
    line: TextOffsetRO;
    segment: TextOffsetRO;
}
export declare type LineValidator = (line: LineSegment) => Iterable<ValidationResult>;
export declare function lineValidatorFactory(dict: SpellingDictionary, options: ValidationOptions): LineValidator;
export declare function isWordValid(dict: SpellingDictionary, wo: TextOffsetRO, line: TextOffsetRO, options: HasWordOptions): boolean;
export interface HasWordOptions {
    ignoreCase: boolean;
    useCompounds: boolean | undefined;
}
export declare function hasWordCheck(dict: SpellingDictionary, word: string, options: HasWordOptions): boolean;
/**
 * Returns a mapper function that will segment a TextOffset based upon the includeRanges.
 * This function is optimized for forward scanning. It will perform poorly for randomly ordered offsets.
 * @param includeRanges Allowed ranges for words.
 */
export declare function mapLineSegmentAgainstRangesFactory(includeRanges: TextRange.MatchRange[]): (lineSeg: LineSegment) => LineSegment[];
export declare const _testMethods: {
    mapWordsAgainstRanges: typeof mapLineSegmentAgainstRangesFactory;
};
export {};
//# sourceMappingURL=textValidator.d.ts.map