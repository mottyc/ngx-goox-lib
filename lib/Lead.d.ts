import { Address } from '.';
import { LeadStatusCode } from '.';
import { BaseEntity } from '.';
export declare class Lead extends BaseEntity {
    firstName: string;
    lastName: string;
    description: string;
    phone: string;
    fax: string;
    mobile: string;
    primaryAddress: Address;
    leadSource: string;
    leadSourceDescription: string;
    campaignId: string;
    status: LeadStatusCode;
    referredBy: string;
    notes: string;
    assignedTo: string;
    price: number;
    commission: number;
    totalCost: number;
    commissionPaid: boolean;
}
