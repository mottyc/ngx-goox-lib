import { ColumnDef } from '.';
import { BaseEntityEx } from '.';
export declare class Booking extends BaseEntityEx {
    accountId: string;
    contactId: string;
    airplaneId: string;
    placementOn: number;
    placementTo: number;
    get(field: string): any;
}
export declare function GetBookingColumnsDef(): ColumnDef[];
