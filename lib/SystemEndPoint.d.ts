import { RestUtil, ActionResponse } from '../utils';
import { GooxConfig } from '../config';
import * as i0 from "@angular/core";
export declare class SystemEndPoint {
    private config;
    private rest;
    private baseUrl;
    constructor(config: GooxConfig, rest: RestUtil);
    /**
     * Lookup returns entity name for entity id
     */
    lookup(entity?: string, id?: string): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemEndPoint, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemEndPoint>;
}
