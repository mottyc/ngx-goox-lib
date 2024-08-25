import { Tuple } from '.';
export declare enum FlightPurposeCode {
    UNDEFINED = 0,
    INTRODUCTORY = 1,
    FLIGHT_LESSON = 2,
    RENTAL = 3,
    PRIVATE = 4,
    VERTICAL_PHOTO = 5,
    DIAGONAL_PHOTO = 6,
    ROUND = 7,
    CAA_TEST = 8,
    TRANSFER = 9,
    AIR_TAXI = 10,
    ENGINE_RUNNING = 11,
    OTHER = 12
}
export declare function GetFlightPurposeCodes(): Tuple<FlightPurposeCode, string>[];
export declare function MapFlightPurposeCodes(): Map<FlightPurposeCode, string>;
