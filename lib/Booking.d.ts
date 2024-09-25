import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class Booking extends BaseEntityEx {
    accountId: string;
    contactId: string;
    airplaneId: string;
    placementOn: number;
    placementTo: number;
}
export declare function GetBookingColumnsDef(): ColumnDef[];
