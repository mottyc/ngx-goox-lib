import { Tuple } from '.';
export declare enum FlightStateCode {
    UNDEFINED = 0,
    PENDING = 1,
    ACTIVE = 2,
    COMPLETED = 3
}
export declare function GetFlightStateCodes(): Tuple<FlightStateCode, string>[];
export declare function MapFlightStateCodes(): Map<FlightStateCode, string>;
