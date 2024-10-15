import { Tuple } from '.';
export declare enum CampaignStatusCode {
    UNDEFINED = 0,
    PLANNING = 1,
    ACTIVE = 2,
    COMPLETED = 3,
    SUSPENDED = 4
}
export declare function GetCampaignStatusCodes(): Tuple<CampaignStatusCode, string>[];
export declare function MapCampaignStatusCodes(): Map<CampaignStatusCode, string>;
