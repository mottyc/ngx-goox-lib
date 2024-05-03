export declare enum LeadStatusCode {
    UNDEFINED = 0,
    NEW = 1,
    INPROCESS = 2,
    ASSIGNED = 3,
    CONVERTED = 4,
    IRRELEVANT = 5,
    REDIRECTED = 6,
    RECYCLED = 7,
    DEAD = 8
}
export declare function GetLeadStatusCodes(): Map<LeadStatusCode, string>;
