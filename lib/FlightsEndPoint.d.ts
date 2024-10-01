import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Contact } from '.';
import { Flight } from '.';
import * as i0 from "@angular/core";
export declare class FlightsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new flight
     */
    create(body?: Flight): import("rxjs").Observable<EntityResponse<Flight>>;
    /**
     * Update existing flight
     */
    update(body?: Flight): import("rxjs").Observable<EntityResponse<Flight>>;
    /**
     * Delete flight and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single flight by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Flight>>;
    /**
     * Find flights by query
     */
    find(search?: string, type?: [], status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Flight>>;
    /**
     * Find list of contacts (pilot / first officer) on this flight
     */
    findContacts(id?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Contact>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlightsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FlightsEndPoint>;
}
