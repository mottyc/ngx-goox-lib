import { TicketStatusCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class FlightTicket extends BaseEntityEx {
    name: string;
    description: string;
    ticketNumber: number;
    flightNumber: number;
    flightId: string;
    status: TicketStatusCode;
    customerName: string;
    customerEmail: string;
    prop(field: string): any;
}
export declare function GetFlightTicketColumnsDef(): ColumnDef[];
