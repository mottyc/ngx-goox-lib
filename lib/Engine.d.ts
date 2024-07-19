/// <reference path="Engine.ngtypecheck.d.ts" />
export declare class Engine {
    totalTime: number;
    overhaulFrequency: number;
    overhaulNextDue: number;
    hoursToOverhaul: number;
    lastAirframeOverhaul: number;
    constructor(totalTime?: number, overhaulFrequency?: number, overhaulNextDue?: number, hoursToOverhaul?: number, lastAirframeOverhaul?: number);
}
