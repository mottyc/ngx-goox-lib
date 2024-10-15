import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Maintenance } from '.';
import * as i0 from "@angular/core";
export declare class MaintenancesEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new maintenance
     */
    create(body?: Maintenance): import("rxjs").Observable<EntityResponse<Maintenance>>;
    /**
     * Update existing maintenance
     */
    update(body?: Maintenance): import("rxjs").Observable<EntityResponse<Maintenance>>;
    /**
     * Delete maintenance and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single maintenance by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Maintenance>>;
    /**
     * Find maintenances by query
     */
    find(search?: string, action?: [], status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Maintenance>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaintenancesEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaintenancesEndPoint>;
}
