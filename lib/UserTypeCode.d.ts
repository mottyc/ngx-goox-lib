import { Tuple } from '.';
export declare enum UserTypeCode {
    UNDEFINED = 0,
    SYSADMIN = 1,
    SUPPORT = 2,
    USER = 3,
    SERVICE = 4
}
export declare function GetUserTypeCodes(): Tuple<UserTypeCode, string>[];
export declare function MapUserTypeCodes(): Map<UserTypeCode, string>;
