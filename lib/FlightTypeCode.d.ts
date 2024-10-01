import { Tuple } from '.';
export declare enum FlightTypeCode {
    UNDEFINED = 0,
    GENERAL = 1,
    OTHER = 2,
    PRIVATE = 3,
    PRIVATE_IFR = 4,
    COMMERCIAL = 5,
    COMMERCIAL_IFR = 6,
    INSTRUCTION = 7,
    INSTRUCTION_CVFR = 8,
    INSTRUCTION_IFR = 9,
    INSTRUCTION_NAV = 10,
    INSTRUCTION_NIGHT = 11
}
export declare function GetFlightTypeCodes(): Tuple<FlightTypeCode, string>[];
export declare function MapFlightTypeCodes(): Map<FlightTypeCode, string>;
