import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Airplane } from '.';
import * as i0 from "@angular/core";
export declare class AirplanesEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new airplane
     */
    create(body?: Airplane): import("rxjs").Observable<EntityResponse<Airplane>>;
    /**
     * Update existing airplane
     */
    update(body?: Airplane): import("rxjs").Observable<EntityResponse<Airplane>>;
    /**
     * Delete airplane and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single airplane by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Airplane>>;
    /**
     * Find airplanes by query
     */
    find(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Airplane>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AirplanesEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AirplanesEndPoint>;
}
