import { Tuple } from '.';
export declare enum FlightStatusCode {
    UNDEFINED = 0
}
export declare function GetFlightStatusCodes(): Tuple<FlightStatusCode, string>[];
export declare function MapFlightStatusCodes(): Map<FlightStatusCode, string>;
