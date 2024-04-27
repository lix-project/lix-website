import { DictionaryDefinitionInternal } from '../Models/CSpellSettingsInternalDef';
import { SpellingDictionary } from './SpellingDictionary';
export declare type LoadOptions = DictionaryDefinitionInternal;
declare enum LoadingState {
    Loaded = 0,
    Loading = 1
}
interface CacheEntry {
    uri: string;
    options: LoadOptions;
    ts: number;
    stat: Stats | Error | undefined;
    dictionary: SpellingDictionary | undefined;
    pending: Promise<readonly [SpellingDictionary, Stats | Error]>;
    loadingState: LoadingState;
    sig: number;
}
export declare type LoaderType = keyof Loaders;
export declare type Loader = (filename: string, options: LoadOptions) => Promise<SpellingDictionary>;
export declare type LoaderSync = (filename: string, options: LoadOptions) => SpellingDictionary;
export interface Loaders {
    S: Loader;
    C: Loader;
    T: Loader;
    W: Loader;
    default: Loader;
}
export interface SyncLoaders {
    S: LoaderSync;
    C: LoaderSync;
    T: LoaderSync;
    W: LoaderSync;
    default: LoaderSync;
}
export declare function loadDictionary(def: DictionaryDefinitionInternal): Promise<SpellingDictionary>;
export declare function loadDictionarySync(def: DictionaryDefinitionInternal): SpellingDictionary;
/**
 * Check to see if any of the cached dictionaries have changed. If one has changed, reload it.
 * @param maxAge - Only check the dictionary if it has been at least `maxAge` ms since the last check.
 * @param now - optional timestamp representing now. (Mostly used in testing)
 */
export declare function refreshCacheEntries(maxAge?: number, now?: number): Promise<void>;
declare function refreshEntry(entry: CacheEntry, maxAge: number, now: number): Promise<void>;
declare function loadEntry(uri: string, options: LoadOptions, now?: number): CacheEntry;
declare function load(uri: string, options: LoadOptions): Promise<SpellingDictionary>;
export declare const testing: {
    dictionaryCache: Map<string, CacheEntry>;
    refreshEntry: typeof refreshEntry;
    loadEntry: typeof loadEntry;
    load: typeof load;
};
/**
 * Copied from the Node definition to avoid a dependency upon a specific version of Node
 */
interface StatsBase<T> {
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
    dev: T;
    ino: T;
    mode: T;
    nlink: T;
    uid: T;
    gid: T;
    rdev: T;
    size: T;
    blksize: T;
    blocks: T;
    atimeMs: T;
    mtimeMs: T;
    ctimeMs: T;
    birthtimeMs: T;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;
}
export declare type Stats = StatsBase<number>;
export declare const __testing__: {
    debugLog: string[];
};
export {};
//# sourceMappingURL=DictionaryLoader.d.ts.map