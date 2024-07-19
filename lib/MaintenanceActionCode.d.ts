/// <reference path="MaintenanceActionCode.ngtypecheck.d.ts" />
import { Tuple } from '.';
export declare enum MaintenanceActionCode {
    UNDEFINED = 0,
    NONE = 1,
    INSPECTION = 2,
    OVERHAUL = 3,
    REISSUE = 4,
    REPLACEMENT = 5,
    WEIGHT = 6
}
export declare function GetMaintenanceActionCodes(): Tuple<MaintenanceActionCode, string>[];
export declare function MapMaintenanceActionCodes(): Map<MaintenanceActionCode, string>;
