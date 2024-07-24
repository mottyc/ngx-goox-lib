import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Campaign } from '.';
import * as i0 from "@angular/core";
export declare class CampaignsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new campaign
     */
    create(body?: Campaign): import("rxjs").Observable<EntityResponse<Campaign>>;
    /**
     * Update existing campaign
     */
    update(body?: Campaign): import("rxjs").Observable<EntityResponse<Campaign>>;
    /**
     * Delete campaign and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single campaign by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Campaign>>;
    /**
     * Find campaigns by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Campaign>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CampaignsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CampaignsEndPoint>;
}
