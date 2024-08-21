import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Credit } from '.';
import * as i0 from "@angular/core";
export declare class CreditsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new credit
     */
    create(body?: Credit): import("rxjs").Observable<EntityResponse<Credit>>;
    /**
     * Update existing credit
     */
    update(body?: Credit): import("rxjs").Observable<EntityResponse<Credit>>;
    /**
     * Delete credit and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single credit by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Credit>>;
    /**
     * Find credits by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Credit>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreditsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreditsEndPoint>;
}
