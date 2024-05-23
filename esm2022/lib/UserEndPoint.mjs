import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../utils";
import * as i2 from "../config";
// UserEndPoint Services for user registration and login 
// @Path: /v1/user 
export class UserEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Authorize user, verify user against account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body) {
        return this.rest.post(`${this.baseUrl}/user/authorize`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: UserEndPoint, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: UserEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: UserEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckVuZFBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvVXNlckVuZFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT25ELHlEQUF5RDtBQUN6RCxtQkFBbUI7QUFFbkIsTUFBTSxPQUFPLFlBQVk7SUFLdkIsb0JBQW9CO0lBQ3BCLFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUpoRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSW5CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLElBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxpQkFBaUIsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xJLENBQUM7K0dBakJVLFlBQVksa0JBTUgsUUFBUTttSEFOakIsWUFBWTs7NEZBQVosWUFBWTtrQkFEeEIsVUFBVTs7MEJBT0ksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsLCBFbnRpdHlSZXNwb25zZSwgRW50aXRpZXNSZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBHb294Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuXG5cblxuLy8gVXNlckVuZFBvaW50IFNlcnZpY2VzIGZvciB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgbG9naW4gXG4vLyBAUGF0aDogL3YxL3VzZXIgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckVuZFBvaW50IHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogR29veENvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZSB1c2VyLCB2ZXJpZnkgdXNlciBhZ2FpbnN0IGFjY291bnRcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICovXG4gIGF1dGhvcml6ZShib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L3VzZXIvYXV0aG9yaXplYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG59XG4iXX0=