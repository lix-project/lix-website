import type { CSpellReporter, FileSettings } from '@cspell/cspell-types';
/**
 * Mergers several cspell reporters into a single one
 */
export declare function mergeReporters(...reporters: ReadonlyArray<CSpellReporter>): CSpellReporter;
/**
 * Loads reporter modules configured in cspell config file
 */
export declare function loadReporters({ reporters }: Pick<FileSettings, 'reporters'>): ReadonlyArray<CSpellReporter>;
//# sourceMappingURL=reporters.d.ts.map