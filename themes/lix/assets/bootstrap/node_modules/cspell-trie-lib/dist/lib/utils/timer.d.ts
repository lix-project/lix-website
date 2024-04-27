export interface Timer {
    /** Start / restart the timer. */
    start(): void;
    /**
     * Calculate the amount of time in ms since the
     * timer was created / started.
     */
    elapsed(): number;
}
export declare function createTimer(hrTimeFn?: HRTimeFn): Timer;
export declare type HRTimeFn = (time?: HRTime) => HRTime;
export declare type HRTime = [number, number];
export declare function toMilliseconds(t: HRTime): number;
export declare function polyHrTime(time?: HRTime): HRTime;
//# sourceMappingURL=timer.d.ts.map