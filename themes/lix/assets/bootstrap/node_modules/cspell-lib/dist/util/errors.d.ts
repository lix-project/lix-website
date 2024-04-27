/// <reference types="node" />
declare function getTypeOf(t: unknown): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export declare function isErrnoException(e: unknown): e is NodeJS.ErrnoException;
export declare function isError(e: unknown): e is Error;
export declare function toError(e: unknown, errorFactory?: UnknownErrorConstructor): Error;
interface UnknownErrorConstructor {
    new (cause: unknown): Error;
}
export declare class UnknownError extends Error {
    readonly cause: unknown;
    constructor(cause: unknown);
}
export declare const __testing__: {
    getTypeOf: typeof getTypeOf;
};
export {};
//# sourceMappingURL=errors.d.ts.map