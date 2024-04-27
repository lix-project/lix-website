export declare function opTakeAsync<T>(count: number): (iter: AsyncIterable<T> | Iterable<T>) => AsyncIterable<T>;
export declare function opTakeSync<T>(count: number): (iter: Iterable<T>) => Iterable<T>;
export declare const opTake: <T>(count: number) => import("../internalTypes").PipeFn<T, T>;
//# sourceMappingURL=take.d.ts.map