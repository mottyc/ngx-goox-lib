import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { StringKeyValue } from '.';
import { Flight } from '.';
import { Document } from '.';
import { Account } from '.';
import { Credit } from '.';
import * as i0 from "@angular/core";
export declare class AccountsEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new account
     */
    create(body?: Account): import("rxjs").Observable<EntityResponse<Account>>;
    /**
     * Update existing account
     */
    update(body?: Account): import("rxjs").Observable<EntityResponse<Account>>;
    /**
     * Delete account and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single account by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Account>>;
    /**
     * Find accounts by query
     */
    find(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Account>>;
    /**
     * Lookup account ID->Name by filter
     */
    lookup(search?: string, status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<StringKeyValue>>;
    /**
     * Find account flights
     */
    findFlights(id?: string, search?: string, airplaneId?: string, type?: [], status?: [], state?: [], purpose?: [], from?: number, to?: number, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Flight>>;
    /**
     * Find account credits
     */
    findCredits(id?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Credit>>;
    /**
     * Find related documents
     */
    findDocuments(id?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Document>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccountsEndPoint>;
}
