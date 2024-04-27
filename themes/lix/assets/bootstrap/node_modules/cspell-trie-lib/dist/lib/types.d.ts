/**
 * Make all optional fields required.
 */
export declare type RequireOptional<T> = {
    [K in keyof Required<T>]: T[K];
};
/**
 * Make all properties in T optional and Possibly undefined
 */
export declare type PartialWithUndefined<T> = {
    [P in keyof T]?: T[P] | undefined;
};
/**
 * Make all fields mandatory
 */
export declare type Mandatory<T> = {
    [P in keyof T]-?: Exclude<T[P], undefined>;
};
/**
 * Union the fields
 */
export declare type UnionFields<T, U> = {
    [K in keyof T | keyof U]: (K extends keyof T ? T[K] : undefined) | (K extends keyof U ? U[K] : undefined);
};
/**
 * The keys of an object where the values cannot be undefined.
 */
export declare type RequiredKeys<T> = Exclude<{
    [P in keyof T]: T[P] extends Exclude<T[P], undefined> ? P : never;
}[keyof T], undefined>;
/**
 * The keys of an object where the values cannot be undefined.
 */
export declare type OptionalOrUndefinedKeys<T> = Exclude<{
    [P in keyof T]: T[P] extends Exclude<T[P], undefined> ? never : P;
}[keyof T], undefined>;
/**
 * Extract the fields that cannot be `undefined`
 */
export declare type OnlyRequired<T> = {
    [P in RequiredKeys<T>]: T[P];
};
/**
 * The keys of an object where the values cannot be undefined.
 */
export declare type NoUndefined<T> = {
    [P in keyof T]: Exclude<T[P], undefined>;
};
/**
 * Extract the fields that can be `undefined`
 */
export declare type OnlyOptionalOrUndefined<T> = {
    [P in keyof T as P extends OptionalOrUndefinedKeys<T> ? P : never]: T[P];
};
/**
 * Make fields that can be `undefined` optional
 */
export declare type MakeOptional<T> = OnlyRequired<T> & Partial<OnlyOptionalOrUndefined<T>>;
/**
 * Like Required, but keeps the Optional.
 */
export declare type RemoveUndefined<T> = {
    [P in keyof T]: Exclude<T[P], undefined>;
};
/**
 * Make all `undefined` optional and removes the `undefined`
 */
export declare type UndefinedToOptional<T> = RemoveUndefined<MakeOptional<T>>;
export declare type ArrayItem<T extends Array<unknown>> = T extends Array<infer R> ? R : never;
//# sourceMappingURL=types.d.ts.map