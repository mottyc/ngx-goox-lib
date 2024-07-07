import { Tuple } from '.';
export declare enum ValidationFlag {
    UNDEFINED = 0,
    MEDICAL_CERT = 1,
    PILOT_LICENSE = 2,
    SINGLE_ENG_CERT = 4,
    DUAL_ENG_CERT = 8,
    INST_666_CERT = 16,
    INST_REC_CERT = 32,
    DAYTIME_FLY = 64,
    NIGHTTIME_FLY = 128,
    NIGHT_CVFR_CUR = 256,
    ROUTE_EXAM = 512,
    DI_CERT = 1024,
    INTERNATIONAL = 2048,
    ENGLISH_PROF = 4096,
    INSTRUCTOR_LICENSE = 8192,
    COMPANY_CHECK = 16384,
    COMPANY_EXAMIN = 32768,
    COMMERCIAL_172P = 65536,
    COMMERCIAL_172XP = 131072,
    COMMERCIAL_207 = 262144
}
export declare function GetValidationFlags(): Tuple<ValidationFlag, string>[];
export declare function MapValidationFlags(): Map<ValidationFlag, string>;
