import { Tuple } from '.';
export declare enum TransactionTypeCode {
    UNDEFINED = 0,
    FLIGHT = 1,
    INSTRUCTION = 2,
    PURCHASE = 3,
    PAYMENT = 4,
    BONUS = 5,
    REFUND = 6
}
export declare function GetTransactionTypeCodes(): Tuple<TransactionTypeCode, string>[];
export declare function MapTransactionTypeCodes(): Map<TransactionTypeCode, string>;
