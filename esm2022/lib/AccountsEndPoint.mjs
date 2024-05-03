import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../utils";
import * as i2 from "../config";
// AccountsEndPoint Services for user registration and login 
// @Path: /v1/accounts 
export class AccountsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new account
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/accounts`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/sys/accounts`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/sys/accounts`);
    }
    /**
     * Get a single account by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/sys/accounts`);
    }
    /**
     * Find accounts by query
     */
    find(search, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/v1/sys/accounts`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AccountsEndPoint, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AccountsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AccountsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudHNFbmRQb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nb294LWxpYi9zcmMvbGliL0FjY291bnRzRW5kUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRbkQsNkRBQTZEO0FBQzdELHVCQUF1QjtBQUV2QixNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLG9CQUFvQjtJQUNwQixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFKaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUluQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLElBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBMEIsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsSUFBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEwQixHQUFHLElBQUksQ0FBQyxPQUFPLGtCQUFrQixFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0ksQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7T0FFRztJQUNILEdBQUcsQ0FBQyxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMEIsR0FBRyxJQUFJLENBQUMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksQ0FBQyxNQUFlLEVBQUUsTUFBVyxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUM1RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM5RixDQUFDOzhHQW5EVSxnQkFBZ0Isa0JBTVAsUUFBUTtrSEFOakIsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwsIEVudGl0eVJlc3BvbnNlLCBFbnRpdGllc1Jlc3BvbnNlLCBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEdvb3hDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLic7XG5cblxuXG4vLyBBY2NvdW50c0VuZFBvaW50IFNlcnZpY2VzIGZvciB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgbG9naW4gXG4vLyBAUGF0aDogL3YxL2FjY291bnRzIFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjY291bnRzRW5kUG9pbnQge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcnO1xuXG4gIC8vIENsYXNzIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBHb294Q29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBhY2NvdW50XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEFjY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3Q8RW50aXR5UmVzcG9uc2U8QWNjb3VudD4+KGAke3RoaXMuYmFzZVVybH0vdjEvYWNjb3VudHNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBleGlzdGluZyBhY2NvdW50XG4gICAqL1xuICB1cGRhdGUoYm9keT86IEFjY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dDxFbnRpdHlSZXNwb25zZTxBY2NvdW50Pj4oYCR7dGhpcy5iYXNlVXJsfS92MS9zeXMvYWNjb3VudHNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhY2NvdW50IGFuZCBhbGwgaXRzIGNvbnRlbnRcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlPEFjdGlvblJlc3BvbnNlPihgJHt0aGlzLmJhc2VVcmx9L3YxL3N5cy9hY2NvdW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZSBhY2NvdW50IGJ5IGlkXG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxBY2NvdW50Pj4oYCR7dGhpcy5iYXNlVXJsfS92MS9zeXMvYWNjb3VudHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFjY291bnRzIGJ5IHF1ZXJ5XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxBY2NvdW50Pj4oYCR7dGhpcy5iYXNlVXJsfS92MS9zeXMvYWNjb3VudHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==