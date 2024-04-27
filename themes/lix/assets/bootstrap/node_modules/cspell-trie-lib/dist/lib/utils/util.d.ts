import { UndefinedToOptional } from '../types';
export declare function isDefined<T>(a: T | undefined): a is T;
/**
 * Remove any fields with an `undefined` value.
 * @param t - object to clean
 * @returns t
 */
export declare function cleanCopy<T, U = UndefinedToOptional<T>>(t: T): U;
/**
 * Remove any fields with an `undefined` value.
 * **MODIFIES THE OBJECT**
 * @param t - object to clean
 * @returns t
 */
export declare function clean<T, U = UndefinedToOptional<T>>(t: T): U;
export declare function unique<T>(a: Iterable<T>): T[];
export declare function flatten<T>(i: Iterable<Iterable<T>>): Iterable<T>;
export declare function replaceAll(text: string, match: string, withText: string): string;
/**
 *
 * @param text verbatim text to be inserted into a regexp
 * @returns text that can be used in a regexp.
 */
export declare function regexQuote(text: string): string;
/**
 * Factory to create a function that will replace all occurrences of `match` with `withText`
 * @param match - string to match
 * @param replaceWithText - the text to substitute.
 */
export declare function replaceAllFactory(match: string, replaceWithText: string): (text: string) => string;
//# sourceMappingURL=util.d.ts.map