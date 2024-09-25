import { Address } from '.';
import { LeadStatusCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class Lead extends BaseEntityEx {
    firstName: string;
    lastName: string;
    description: string;
    phone: string;
    fax: string;
    mobile: string;
    email: string;
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
export declare function GetLeadColumnsDef(): ColumnDef[];
