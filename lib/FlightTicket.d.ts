import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { TicketStatusCode } from '.';
export declare class FlightTicket extends BaseEntityEx {
    name: string;
    description: string;
    ticketNumber: number;
    flightNumber: number;
    flightId: string;
    status: TicketStatusCode;
    customerName: string;
    customerEmail: string;
    get(field: string): any;
}
export declare function GetFlightTicketColumnsDef(): ColumnDef[];
