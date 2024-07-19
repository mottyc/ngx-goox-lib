/// <reference path="AccountsEndPoint.ngtypecheck.d.ts" />
import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { Account } from '.';
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountsEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccountsEndPoint>;
}
