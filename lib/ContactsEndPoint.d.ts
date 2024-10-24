import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Contact } from '.';
import { Flight } from '.';
import { StringKeyValue } from '.';
import { Certificate } from '.';
import { MessageConfirm } from '.';
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
     * Lookup contacts ID->Name by filter
     */
    lookup(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<StringKeyValue>>;
    /**
     * Find contact certificates by query
     */
    findCertificates(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Certificate>>;
    /**
     * Find contact related flights by query
     */
    findFlights(search?: string, type?: [], status?: [], state?: [], purpose?: [], from?: number, to?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Flight>>;
    /**
     * Find message confirmations
     */
    findConfirms(id?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<MessageConfirm>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContactsEndPoint>;
}
