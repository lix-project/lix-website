/**
 * Handles loading of `.pnp.js` and `.pnp.js` files.
 */
import { URI } from 'vscode-uri';
export declare type LoaderResult = URI | undefined;
export declare class PnpLoader {
    readonly pnpFiles: string[];
    private cacheKeySuffix;
    constructor(pnpFiles?: string[]);
    /**
     * Request that the nearest .pnp file gets loaded
     * @param uriDirectory starting directory
     * @returns promise - rejects on error - success if loaded or not found.
     */
    load(uriDirectory: URI): Promise<LoaderResult>;
    peek(uriDirectory: URI): Promise<LoaderResult>;
    /**
     * Request that the nearest .pnp file gets loaded
     * @param uriDirectory starting directory
     * @returns promise - rejects on error - success if loaded or not found.
     */
    loadSync(uriDirectory: URI): LoaderResult;
    peekSync(uriDirectory: URI): LoaderResult;
    /**
     * Clears the cached so .pnp files will get reloaded on request.
     */
    clearCache(): Promise<void>;
    private calcKey;
}
export declare function pnpLoader(pnpFiles?: string[]): PnpLoader;
export declare class UnsupportedSchema extends Error {
    constructor(msg: string);
}
export declare class UnsupportedPnpFile extends Error {
    constructor(msg: string);
}
export declare function clearPnPGlobalCache(): Promise<undefined>;
//# sourceMappingURL=pnpLoader.d.ts.map