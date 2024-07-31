import { Tuple } from '.';
export declare enum StatusCode {
    UNDEFINED = 0,
    PENDING = 1,
    IN_PROCESS = 2,
    COMPLETED = 3,
    CANCELLED = 4,
    AUTO_CANCELLED = 5
}
export declare function GetStatusCodes(): Tuple<StatusCode, string>[];
export declare function MapStatusCodes(): Map<StatusCode, string>;
