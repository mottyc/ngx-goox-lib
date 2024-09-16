import { TransactionTypeCode } from '.';
import { CurrencyCode } from '.';
import { BaseEntity } from '.';
import { ColumnDef } from '.';
export declare class Credit extends BaseEntity {
    name: string;
    description: string;
    type: TransactionTypeCode;
    amount: number;
    currency: CurrencyCode;
    accountId: string;
    flightId: string;
    updatedBy: string;
}
export declare function GetCreditColumnsDef(): ColumnDef[];
