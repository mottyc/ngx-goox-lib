import { CurrencyCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { CampaignTypeCode } from '.';
import { CampaignStatusCode } from '.';
export declare class Campaign extends BaseEntityEx {
    name: string;
    type: CampaignTypeCode;
    status: CampaignStatusCode;
    content: string;
    startDate: number;
    endDate: number;
    budget: number;
    baseRate: number;
    referUrl: string;
    expectedCost: number;
    actualCost: number;
    currency: CurrencyCode;
    get(field: string): any;
}
export declare function GetCampaignColumnsDef(): ColumnDef[];
