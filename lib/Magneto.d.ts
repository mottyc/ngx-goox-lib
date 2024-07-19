/// <reference path="Magneto.ngtypecheck.d.ts" />
export declare class Magneto {
    inspectionFrequency: number;
    lastInspectionHours: number;
    nextInspectionHours: number;
    remainingHours: number;
    constructor(inspectionFrequency?: number, lastInspectionHours?: number, nextInspectionHours?: number, remainingHours?: number);
}
