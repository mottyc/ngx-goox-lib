import { Address } from '.';
import { Document } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { AccountStatusCode } from '.';
export declare class Account extends BaseEntityEx {
    name: string;
    description: string;
    status: AccountStatusCode;
    phone: string;
    fax: string;
    mobile: string;
    billingAddress: Address;
    shippingAddress: Address;
    campaignId: string;
    enableCredit: boolean;
    currentCredit: number;
    baseRate: number;
    percentageDiscount: number;
    invoiceId: string;
    documents: Document[];
    get(field: string): any;
}
export declare function GetAccountColumnsDef(): ColumnDef[];
