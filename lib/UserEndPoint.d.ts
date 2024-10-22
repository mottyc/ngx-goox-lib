import { RestUtil, EntityResponse } from '../utils';
import { GooxConfig } from '../config';
import { User } from '.';
import { LoginParams } from '.';
import * as i0 from "@angular/core";
export declare class UserEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Authorize user, verify user exists in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body?: LoginParams): import("rxjs").Observable<EntityResponse<User>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserEndPoint>;
}
