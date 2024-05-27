export declare enum CampaignStatusCode {
    UNDEFINED = 0,
    PLANNING = 1,
    ACTIVE = 2,
    COMPLETED = 3,
    SUSPENDED = 4
}
export declare function GetCampaignStatusCodes(): Map<CampaignStatusCode, string>;
