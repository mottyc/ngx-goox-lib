import { Tuple } from '.';
export declare enum FlightStatusCode {
    UNDEFINED = 0,
    REGISTERED = 1,
    DELETE = 2,
    CANCELLED = 3,
    ABORTED = 4
}
export declare function GetFlightStatusCodes(): Tuple<FlightStatusCode, string>[];
export declare function MapFlightStatusCodes(): Map<FlightStatusCode, string>;
