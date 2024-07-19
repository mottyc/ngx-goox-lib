/// <reference path="PriorityCode.ngtypecheck.d.ts" />
import { Tuple } from '.';
export declare enum PriorityCode {
    UNDEFINED = 0,
    NONE = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4
}
export declare function GetPriorityCodes(): Tuple<PriorityCode, string>[];
export declare function MapPriorityCodes(): Map<PriorityCode, string>;
