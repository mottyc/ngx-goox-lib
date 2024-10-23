import { Tuple } from '.';
export declare enum MessageTypeCode {
    UNDEFINED = 0,
    INFO = 1,
    MEMO = 2,
    EXTERNAL_PROCEDURE = 3,
    INTERNAL_PROCEDURE = 4,
    INCIDENT = 5,
    POLICY = 6,
    REPAIR = 7
}
export declare function GetMessageTypeCodes(): Tuple<MessageTypeCode, string>[];
export declare function MapMessageTypeCodes(): Map<MessageTypeCode, string>;
