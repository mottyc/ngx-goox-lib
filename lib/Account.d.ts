import { AccountStatusCode } from '.';
import { Address } from '.';
import { Document } from '.';
import { BaseEntity } from '.';
import { ColumnDef } from '.';
export declare class Account extends BaseEntity {
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
}
export declare function GetAccountColumnsDef(): ColumnDef[];
