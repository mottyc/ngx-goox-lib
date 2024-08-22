import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Booking } from '.';
import * as i0 from "@angular/core";
export declare class BookingsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new booking
     */
    create(body?: Booking): import("rxjs").Observable<EntityResponse<Booking>>;
    /**
     * Update existing booking
     */
    update(body?: Booking): import("rxjs").Observable<EntityResponse<Booking>>;
    /**
     * Delete booking and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single booking by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Booking>>;
    /**
     * Find bookings by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Booking>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BookingsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BookingsEndPoint>;
}
