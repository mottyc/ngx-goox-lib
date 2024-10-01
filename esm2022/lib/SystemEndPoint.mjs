import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../utils";
import * as i2 from "../config";
// SystemEndPoint Services for general system queries 
export class SystemEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/system';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Lookup returns entity name for entity id
     */
    lookup(entity, id) {
        return this.rest.get(`${this.baseUrl}/lookup/${entity}/${id}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SystemEndPoint, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SystemEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SystemEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzdGVtRW5kUG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9TeXN0ZW1FbmRQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU9uRCxzREFBc0Q7QUFFdEQsTUFBTSxPQUFPLGNBQWM7SUFLekIsb0JBQW9CO0lBQ3BCLFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUpoRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBSTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7O09BRUc7SUFDSCxNQUFNLENBQUMsTUFBZSxFQUFFLEVBQVc7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxXQUFXLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7OEdBaEJVLGNBQWMsa0JBTUwsUUFBUTtrSEFOakIsY0FBYzs7MkZBQWQsY0FBYztrQkFEMUIsVUFBVTs7MEJBT0ksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBHb294Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuXG5cblxuLy8gU3lzdGVtRW5kUG9pbnQgU2VydmljZXMgZm9yIGdlbmVyYWwgc3lzdGVtIHF1ZXJpZXMgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzdGVtRW5kUG9pbnQge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzdGVtJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogR29veENvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvb2t1cCByZXR1cm5zIGVudGl0eSBuYW1lIGZvciBlbnRpdHkgaWRcbiAgICovXG4gIGxvb2t1cChlbnRpdHk/OiBzdHJpbmcsIGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8QWN0aW9uUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVybH0vbG9va3VwLyR7ZW50aXR5fS8ke2lkfWApO1xuICB9XG5cbn1cbiJdfQ==