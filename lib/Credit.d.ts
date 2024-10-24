import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { TransactionTypeCode } from '.';
import { CurrencyCode } from '.';
export declare class Credit extends BaseEntityEx {
    name: string;
    description: string;
    type: TransactionTypeCode;
    amount: number;
    currency: CurrencyCode;
    accountId: string;
    flightId: string;
    updatedBy: string;
    get(field: string): any;
}
export declare function GetCreditColumnsDef(): ColumnDef[];
