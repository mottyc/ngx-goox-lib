import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Document } from '.';
import * as i0 from "@angular/core";
export declare class DocumentsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new document
     */
    create(body?: Document): import("rxjs").Observable<EntityResponse<Document>>;
    /**
     * Update existing document
     */
    update(body?: Document): import("rxjs").Observable<EntityResponse<Document>>;
    /**
     * Delete document and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single document by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Document>>;
    /**
     * Find documents by query
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Document>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DocumentsEndPoint>;
}
