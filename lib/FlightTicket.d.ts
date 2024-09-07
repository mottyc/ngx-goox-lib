import { TicketStatusCode } from '.';
import { BaseEntity } from '.';
import { ColumnDef } from '.';
export declare class FlightTicket extends BaseEntity {
    name: string;
    description: string;
    ticketNumber: number;
    flightNumber: number;
    flightId: string;
    status: TicketStatusCode;
    customerName: string;
    customerEmail: string;
}
export declare function GetFlightTicketColumnsDef(): ColumnDef[];
