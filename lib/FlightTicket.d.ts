import { ColumnDef } from '.';
import { TicketStatusCode } from '.';
import { BaseEntity } from '.';
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
