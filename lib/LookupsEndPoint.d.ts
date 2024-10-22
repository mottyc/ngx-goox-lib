import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Lookup } from '.';
import * as i0 from "@angular/core";
export declare class LookupsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new lookup
     */
    create(body?: Lookup): import("rxjs").Observable<EntityResponse<Lookup>>;
    /**
     * Update existing lookup
     */
    update(body?: Lookup): import("rxjs").Observable<EntityResponse<Lookup>>;
    /**
     * Delete lookup and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single lookup by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Lookup>>;
    /**
     * Find lookups by query
     */
    find(search?: string, domain?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Lookup>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LookupsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LookupsEndPoint>;
}
