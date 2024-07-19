/// <reference path="AirplaneStatusCode.ngtypecheck.d.ts" />
import { Tuple } from '.';
export declare enum AirplaneStatusCode {
    UNDEFINED = 0,
    ACTIVE = 1,
    INACTIVE = 2
}
export declare function GetAirplaneStatusCodes(): Tuple<AirplaneStatusCode, string>[];
export declare function MapAirplaneStatusCodes(): Map<AirplaneStatusCode, string>;
