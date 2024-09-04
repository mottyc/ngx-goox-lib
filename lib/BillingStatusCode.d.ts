import { Tuple } from '.';
export declare enum BillingStatusCode {
    UNDEFINED = 0,
    UNAPPROVED = 1,
    APPROVED = 2,
    CREATED_INVOICE = 3,
    PENDING_INVOICE = 4,
    MANUAL_INVOICE = 5,
    CLOSED = 6,
    CREDIT = 7,
    CANCELLED = 8,
    CANCELLED_BY_CLIENT = 9,
    IRRELEVANT = 10
}
export declare function GetBillingStatusCodes(): Tuple<BillingStatusCode, string>[];
export declare function MapBillingStatusCodes(): Map<BillingStatusCode, string>;
