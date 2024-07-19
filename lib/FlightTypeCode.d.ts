/// <reference path="FlightTypeCode.ngtypecheck.d.ts" />
import { Tuple } from '.';
export declare enum FlightTypeCode {
    UNDEFINED = 0
}
export declare function GetFlightTypeCodes(): Tuple<FlightTypeCode, string>[];
export declare function MapFlightTypeCodes(): Map<FlightTypeCode, string>;
