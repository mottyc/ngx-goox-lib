import { BaseEntity } from '.';
import { CampaignTypeCode } from '.';
import { CampaignStatusCode } from '.';
import { CurrencyCode } from '.';
export declare class Campaign extends BaseEntity {
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
}
