import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { SystemMessage } from '.';
import * as i0 from "@angular/core";
export declare class SystemMessagesEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new systemMessage
     */
    create(body?: SystemMessage): import("rxjs").Observable<EntityResponse<SystemMessage>>;
    /**
     * Update existing systemMessage
     */
    update(body?: SystemMessage): import("rxjs").Observable<EntityResponse<SystemMessage>>;
    /**
     * Delete systemMessage and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single systemMessage by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<SystemMessage>>;
    /**
     * Find systemMessages by query
     */
    find(search?: string, type?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<SystemMessage>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemMessagesEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemMessagesEndPoint>;
}
