import { Tuple } from '.';
export declare enum UserStatusCode {
    UNDEFINED = 0,
    PENDING = 1,
    ACTIVE = 2,
    BLOCKED = 3,
    SUSPENDED = 4
}
export declare function GetUserStatusCodes(): Tuple<UserStatusCode, string>[];
export declare function MapUserStatusCodes(): Map<UserStatusCode, string>;
