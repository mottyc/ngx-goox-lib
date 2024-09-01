import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { MessageConfirm } from '.';
import * as i0 from "@angular/core";
export declare class MessageConfirmsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new messageConfirm
     */
    create(body?: MessageConfirm): import("rxjs").Observable<EntityResponse<MessageConfirm>>;
    /**
     * Update existing messageConfirm
     */
    update(body?: MessageConfirm): import("rxjs").Observable<EntityResponse<MessageConfirm>>;
    /**
     * Delete messageConfirm and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single messageConfirm by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<MessageConfirm>>;
    /**
     * Find messageConfirms by query
     */
    find(search?: string, messageId?: string, contactId?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<MessageConfirm>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageConfirmsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageConfirmsEndPoint>;
}
