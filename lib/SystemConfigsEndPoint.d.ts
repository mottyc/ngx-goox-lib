import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { SystemConfig } from '.';
import * as i0 from "@angular/core";
export declare class SystemConfigsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new systemConfig
     */
    create(body?: SystemConfig): import("rxjs").Observable<EntityResponse<SystemConfig>>;
    /**
     * Update existing systemConfig
     */
    update(body?: SystemConfig): import("rxjs").Observable<EntityResponse<SystemConfig>>;
    /**
     * Delete systemConfig and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single systemConfig by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<SystemConfig>>;
    /**
     * Find systemConfigs by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<SystemConfig>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemConfigsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemConfigsEndPoint>;
}
