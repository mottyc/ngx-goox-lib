import { Tuple } from '.';
export declare enum PaymentMethodCode {
    UNDEFINED = 0,
    NONE = 1,
    CREDIT_CLIENT = 2,
    CARD = 3,
    CHECK = 4,
    CASH = 5,
    BANK = 6
}
export declare function GetPaymentMethodCodes(): Tuple<PaymentMethodCode, string>[];
export declare function MapPaymentMethodCodes(): Map<PaymentMethodCode, string>;
