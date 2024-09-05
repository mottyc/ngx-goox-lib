import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import { User } from '.';
import * as i0 from "@angular/core";
export declare class UsersEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Create new user
     */
    create(body?: User): import("rxjs").Observable<EntityResponse<User>>;
    /**
     * Update existing user
     */
    update(body?: User): import("rxjs").Observable<EntityResponse<User>>;
    /**
     * Delete user and all its content
     */
    delete(id?: string): import("rxjs").Observable<ActionResponse>;
    /**
     * Get a single user by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<User>>;
    /**
     * Find users by query
     */
    find(search?: string, type?: [], status?: [], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<User>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersEndPoint>;
}
