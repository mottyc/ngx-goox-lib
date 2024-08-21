import { BaseEntity } from '.';
export declare class Booking extends BaseEntity {
    accountId: string;
    contactId: string;
    airplaneId: string;
    placementOn: number;
    placementTo: number;
}
