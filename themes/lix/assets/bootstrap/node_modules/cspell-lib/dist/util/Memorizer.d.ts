/** Only types that can be easily turned into strings */
declare type P0 = string | number | boolean | RegExp | undefined;
declare type Primitive = P0 | P0[];
/**
 * Memorize the result of a function call to be returned on later calls with the same parameters.
 *
 * Note: The parameters are converted into a string: `key = args.join('>!@[')`
 *
 * For speed, it keeps two caches, L0 and L1. Each cache can contain up to `size` values. But that actual number
 * of cached values is between `size + 1` and `size * 2`.
 *
 * Caches are NOT sorted. Items are added to L0 until it is full. Once it is full, L1 takes over L0's values and L0 is cleared.
 *
 * If an item is not found in L0, L1 is checked before calling the `fn` and the resulting value store in L0.
 *
 * @param fn - function to be called.
 * @param size - size of cache
 */
export declare function memorizer<F extends (...args: Primitive[]) => any, Args extends Parameters<F> = Parameters<F>, R extends ReturnType<F> = ReturnType<F>>(fn: F, size?: number): (...args: Args) => R;
/**
 * Memorize the result of a function call to be returned on later calls with the same parameters.
 *
 * Note: `keyFn` is use to convert the function parameters into a string to look up in the cache.
 *
 * For speed, it keeps two caches, L0 and L1. Each cache can contain up to `size` values. But that actual number
 * of cached values is between `size + 1` and `size * 2`.
 *
 * Caches are NOT sorted. Items are added to L0 until it is full. Once it is full, L1 takes over L0's values and L0 is cleared.
 *
 * If an item is not found in L0, L1 is checked before calling the `fn` and the resulting value store in L0.
 *
 * @param fn - function to be memorized
 * @param keyFn - extracts a `key` value from the arguments to `fn` to be used as the key to the cache
 * @param size - size of the cache.
 * @returns A function
 */
export declare function memorizerKeyBy<F extends (...args: any[]) => any, Args extends Parameters<F> = Parameters<F>, R extends ReturnType<F> = ReturnType<F>>(fn: F, keyFn: (...args: Args) => string, size?: number): (...args: Args) => R;
/**
 * Create a function that memorizes the last call. If the next call is called with the same arguments, the
 * the last value is returned.
 * @param fn - function to memorize
 * @returns a new function.
 */
export declare function memorizeLastCall<T>(fn: (...p: []) => T): (...p: []) => T;
export declare function memorizeLastCall<T, K0>(fn: (...p: [K0]) => T): (...p: [K0]) => T;
export declare function memorizeLastCall<T, K0, K1>(fn: (...p: [K0, K1]) => T): (...p: [K0, K1]) => T;
export declare function memorizeLastCall<T, K0, K1, K2>(fn: (...p: [K0, K1, K2]) => T): (...p: [K0, K1, K2]) => T;
export declare function memorizeLastCall<T, K0, K1, K2, K3>(fn: (...p: [K0, K1, K2, K3]) => T): (...p: [K0, K1, K2, K3]) => T;
export declare function memorizeLastCall<T, K>(fn: (...p: [...K[]]) => T): (...p: [...K[]]) => T;
/**
 * calls a function exactly once and always returns the same value.
 * @param fn - function to call
 * @returns a new function
 */
export declare function callOnce<T>(fn: () => T): () => T;
export declare function memorizerAll<K extends any[], T>(fn: (...p: K) => T): (...p: K) => T;
export {};
//# sourceMappingURL=Memorizer.d.ts.map