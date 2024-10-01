import { Tuple } from '.';
export declare enum AirplaneValidationFlag {
    UNDEFINED = 0,
    AIRWORTHINESS = 1,
    INSURANCE = 2,
    FLIGHT_MANUAL = 4,
    RADIO_STATION = 8,
    REGISTRATION_CERT = 16,
    FIRST_AID_KIT = 32,
    FIRE_EXTINGUISHER = 64,
    OPERATION_SPEC = 128,
    VALID_337_CAMERA = 256,
    VALID_337_EXHAUST = 512,
    VALID_STC_CAMERA = 1024,
    VALID_STC_EXHAUST = 2048,
    FLIGHT_LOGBOOK = 4096,
    AIR_OPERATOR = 8192,
    AIRCRAFT_WEIGHT = 16384,
    PROPELLER_OVERHAUL = 32768,
    SINGLE_ENGINE_OVERHAUL = 65536,
    LEFT_ENGINE_OVERHAUL = 131072,
    RIGHT_ENGINE_OVERHAUL = 262144,
    LEFT_PROPELLER_OVERHAUL = 524288,
    RIGHT_PROPELLER_OVERHAUL = 1048576,
    CVFR_ATS = 2097152,
    WEIGHT_BALANCE_FORM = 4194304,
    CHECK_LIST = 8388608,
    NOISE_CERT = 16777216
}
export declare function GetAirplaneValidationFlags(): Tuple<AirplaneValidationFlag, string>[];
export declare function MapAirplaneValidationFlags(): Map<AirplaneValidationFlag, string>;
