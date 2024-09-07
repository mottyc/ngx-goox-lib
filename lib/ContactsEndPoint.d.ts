import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Certificate } from '.';
import { Contact } from '.';
import * as i0 from "@angular/core";
export declare class ContactsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new contact
     */
    create(body?: Contact): import("rxjs").Observable<EntityResponse<Contact>>;
    /**
     * Update existing contact
     */
    update(body?: Contact): import("rxjs").Observable<EntityResponse<Contact>>;
    /**
     * Delete contact and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single contact by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Contact>>;
    /**
     * Find contacts by query
     */
    find(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Contact>>;
    /**
     * Find contact certificates by query
     */
    findCertificates(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Certificate>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContactsEndPoint>;
}
