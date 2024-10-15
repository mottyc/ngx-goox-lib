import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Lead } from '.';
import * as i0 from "@angular/core";
export declare class LeadsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new lead
     */
    create(body?: Lead): import("rxjs").Observable<EntityResponse<Lead>>;
    /**
     * Update existing lead
     */
    update(body?: Lead): import("rxjs").Observable<EntityResponse<Lead>>;
    /**
     * Delete lead and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single lead by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Lead>>;
    /**
     * Find leads by query
     */
    find(search?: string, type?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Lead>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LeadsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LeadsEndPoint>;
}
