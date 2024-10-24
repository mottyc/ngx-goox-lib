import { Tuple } from '.';
export declare enum TicketStatusCode {
    UNDEFINED = 0,
    PENDING = 1,
    SENT = 2
}
export declare function GetTicketStatusCodes(): Tuple<TicketStatusCode, string>[];
export declare function MapTicketStatusCodes(): Map<TicketStatusCode, string>;
