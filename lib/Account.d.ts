import { AccountStatusCode } from '.';
import { Address } from '.';
import { BaseEntity } from '.';
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
    percentageDiscount: number;
}
