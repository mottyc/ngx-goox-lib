import { RestUtil, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import * as i0 from "@angular/core";
export declare class UserEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Authorize user, verify user against account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body?: string): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserEndPoint>;
}
