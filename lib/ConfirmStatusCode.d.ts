import { Tuple } from '.';
export declare enum ConfirmStatusCode {
    UNDEFINED = 0,
    PENDING = 1,
    APPROVED = 2,
    REJECTED = 3
}
export declare function GetConfirmStatusCodes(): Tuple<ConfirmStatusCode, string>[];
export declare function MapConfirmStatusCodes(): Map<ConfirmStatusCode, string>;
