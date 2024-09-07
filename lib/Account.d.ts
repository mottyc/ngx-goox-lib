import { BaseEntity } from '.';
import { ColumnDef } from '.';
import { AccountStatusCode } from '.';
import { Address } from '.';
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
}
export declare function GetAccountColumnsDef(): ColumnDef[];
