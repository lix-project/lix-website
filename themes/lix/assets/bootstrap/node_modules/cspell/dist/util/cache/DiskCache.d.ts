import type { FileDescriptor } from 'file-entry-cache';
import type { FileResult } from '../../util/fileHelper';
import type { CSpellLintResultCache } from './CSpellLintResultCache';
export declare type CachedFileResult = Omit<FileResult, 'fileInfo' | 'elapsedTimeMs' | 'cached'>;
/**
 * This is the data cached.
 * Property names are short to help keep the cache file size small.
 */
interface CachedData {
    /** meta version + suffix */
    v?: string;
    /** results */
    r?: CachedFileResult;
    /** dependencies */
    d?: Dependency[];
}
interface Dependency {
    /** filename */
    f: string;
    /** hash of file contents */
    h?: string | undefined;
}
interface CSpellCachedMetaData {
    data?: CachedData;
}
declare type Meta = FileDescriptor['meta'];
export declare type CSpellCacheMeta = (Meta & CSpellCachedMetaData) | undefined;
/**
 * Caches cspell results on disk
 */
export declare class DiskCache implements CSpellLintResultCache {
    readonly useCheckSum: boolean;
    readonly cspellVersion: string;
    private fileEntryCache;
    private dependencyCache;
    private dependencyCacheTree;
    private objectCollection;
    private ocCacheFileResult;
    readonly version: string;
    constructor(cacheFileLocation: string, useCheckSum: boolean, cspellVersion: string);
    getCachedLintResults(filename: string): Promise<FileResult | undefined>;
    setCachedLintResults({ fileInfo, elapsedTimeMs: _, cached: __, ...result }: FileResult, dependsUponFiles: string[]): void;
    reconcile(): void;
    reset(): void;
    private normalizeResult;
    private calcDependencyHashes;
    private checkDependency;
    private getDependency;
    private getFileDep;
    private checkDependencies;
    private getHash;
}
declare function calcVersion(version: string): string;
export declare const __testing__: {
    calcVersion: typeof calcVersion;
};
export {};
//# sourceMappingURL=DiskCache.d.ts.map