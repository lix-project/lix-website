import type { CSpellReporter, Issue } from '@cspell/cspell-types';
import { LinterCliOptions } from './options';
export interface ReporterIssue extends Issue {
    filename: string;
}
export interface ReporterOptions extends Pick<LinterCliOptions, 'debug' | 'issues' | 'legacy' | 'progress' | 'relative' | 'root' | 'showContext' | 'showSuggestions' | 'silent' | 'summary' | 'verbose' | 'wordsOnly'> {
    fileGlobs: string[];
}
export declare function getReporter(options: ReporterOptions): CSpellReporter;
declare function formatIssue(templateStr: string, issue: ReporterIssue, maxIssueTextWidth: number): string;
export declare const __testing__: {
    formatIssue: typeof formatIssue;
};
export {};
//# sourceMappingURL=cli-reporter.d.ts.map