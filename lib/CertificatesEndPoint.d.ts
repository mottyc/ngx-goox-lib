import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Certificate } from '.';
import * as i0 from "@angular/core";
export declare class CertificatesEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new certificate
     */
    create(body?: Certificate): import("rxjs").Observable<EntityResponse<Certificate>>;
    /**
     * Update existing certificate
     */
    update(body?: Certificate): import("rxjs").Observable<EntityResponse<Certificate>>;
    /**
     * Delete certificate and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single certificate by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Certificate>>;
    /**
     * Find certificates by query
     */
    find(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Certificate>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CertificatesEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CertificatesEndPoint>;
}
