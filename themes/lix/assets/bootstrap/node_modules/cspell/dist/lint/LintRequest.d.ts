import type { CSpellReporter, Issue } from '@cspell/cspell-types';
import { LinterOptions } from '../options';
import { GlobSrcInfo } from '../util/glob';
export declare class LintRequest {
    readonly fileGlobs: string[];
    readonly options: LinterOptions;
    readonly reporter: CSpellReporter;
    readonly uniqueFilter: (issue: Issue) => boolean;
    readonly locale: string;
    readonly configFile: string | undefined;
    readonly excludes: GlobSrcInfo[];
    readonly root: string;
    readonly showContext: number;
    readonly enableGlobDot: boolean | undefined;
    readonly fileLists: string[];
    constructor(fileGlobs: string[], options: LinterOptions, reporter: CSpellReporter);
}
//# sourceMappingURL=LintRequest.d.ts.map