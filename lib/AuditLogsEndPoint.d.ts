import { RestUtil, EntityResponse, EntitiesResponse } from '../utils';
import { GooxConfig } from '../config';
import { AuditLog } from '.';
import { TimeSeries } from '.';
import * as i0 from "@angular/core";
export declare class AuditLogsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new auditLog
     */
    create(body?: AuditLog): import("rxjs").Observable<EntityResponse<AuditLog>>;
    /**
     * Get a single auditLog by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<AuditLog>>;
    /**
     * Find auditLogs by query
     */
    find(from?: number, to?: number, userId?: string, action?: string, itemType?: string, itemId?: string, itemName?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<AuditLog>>;
    /**
     * Find auditLogs count histogram over time
     */
    histogram(from?: number, to?: number, userId?: string, action?: string, itemType?: string, itemId?: string, itemName?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<TimeSeries<number>>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuditLogsEndPoint>;
}
