import { Tuple } from '.';
export declare enum CampaignTypeCode {
    UNDEFINED = 0,
    WEB = 1,
    EMAIL = 2,
    TELESALES = 3
}
export declare function GetCampaignTypeCodes(): Tuple<CampaignTypeCode, string>[];
export declare function MapCampaignTypeCodes(): Map<CampaignTypeCode, string>;
