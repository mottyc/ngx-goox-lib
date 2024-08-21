import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { FlightTicket } from '.';
import * as i0 from "@angular/core";
export declare class FlightTicketsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new flightTicket
     */
    create(body?: FlightTicket): import("rxjs").Observable<EntityResponse<FlightTicket>>;
    /**
     * Update existing flightTicket
     */
    update(body?: FlightTicket): import("rxjs").Observable<EntityResponse<FlightTicket>>;
    /**
     * Delete flightTicket and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single flightTicket by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<FlightTicket>>;
    /**
     * Find flightTickets by query
     */
    find(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<FlightTicket>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightTicketsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FlightTicketsEndPoint>;
}
