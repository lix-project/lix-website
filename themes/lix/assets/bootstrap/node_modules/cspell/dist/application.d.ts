/// <reference types="node" />
import type { CSpellReporter, RunResult } from '@cspell/cspell-types';
import type { CheckTextInfo, TraceResult } from 'cspell-lib';
import { TimedSuggestionsForWordResult } from './emitters/suggestionsEmitter';
import { BaseOptions, LegacyOptions, LinterOptions, SuggestionOptions, TraceOptions } from './options';
export { IncludeExcludeFlag } from 'cspell-lib';
export type { TraceResult } from 'cspell-lib';
export declare type AppError = NodeJS.ErrnoException;
export declare function lint(fileGlobs: string[], options: LinterOptions, emitters: CSpellReporter): Promise<RunResult>;
export declare function trace(words: string[], options: TraceOptions): AsyncIterableIterator<TraceResult[]>;
export declare type CheckTextResult = CheckTextInfo;
export declare function checkText(filename: string, options: BaseOptions & LegacyOptions): Promise<CheckTextResult>;
export declare function suggestions(words: string[], options: SuggestionOptions): AsyncIterable<TimedSuggestionsForWordResult>;
export declare function createInit(): Promise<void>;
//# sourceMappingURL=application.d.ts.map