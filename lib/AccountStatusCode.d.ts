import { Tuple } from '.';
export declare enum AccountStatusCode {
    UNDEFINED = 0,
    ACTIVE = 1,
    INACTIVE = 2,
    BLOCKED = 3,
    SUSPENDED = 4
}
export declare function GetAccountStatusCodes(): Tuple<AccountStatusCode, string>[];
export declare function MapAccountStatusCodes(): Map<AccountStatusCode, string>;
