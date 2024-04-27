import { CacheSettings, CSpellSettings } from '@cspell/cspell-types';
import { CacheOptions } from '.';
import { CSpellLintResultCache } from './CSpellLintResultCache';
export declare const DEFAULT_CACHE_LOCATION = ".cspellcache";
export interface CreateCacheSettings extends Required<CacheSettings> {
    /**
     * cspell version used to validate cache entries.
     */
    version: string;
}
/**
 * Creates CSpellLintResultCache (disk cache if caching is enabled in config or dummy otherwise)
 */
export declare function createCache(options: CreateCacheSettings): CSpellLintResultCache;
export declare function calcCacheSettings(config: CSpellSettings, cacheOptions: CacheOptions, root: string): Promise<CreateCacheSettings>;
/**
 * Normalizes the version and return only `major.minor + versionSuffix`
 * @param version The cspell semantic version.
 */
declare function normalizeVersion(version: string): string;
export declare const __testing__: {
    normalizeVersion: typeof normalizeVersion;
    versionSuffix: string;
};
export {};
//# sourceMappingURL=createCache.d.ts.map