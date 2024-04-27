import { TraceResult } from '../application';
export interface EmitTraceOptions {
    /** current working directory */
    cwd: string;
    lineWidth?: number;
}
export declare function emitTraceResults(results: TraceResult[], options: EmitTraceOptions): void;
//# sourceMappingURL=traceEmitter.d.ts.map