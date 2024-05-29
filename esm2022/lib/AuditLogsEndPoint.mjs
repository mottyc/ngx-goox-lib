import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../utils";
import * as i2 from "../config";
// AuditLogsEndPoint Services for auditLogs actions 
export class AuditLogsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/audit_logs';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new auditLog
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get a single auditLog by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find auditLogs by query
     */
    find(search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: AuditLogsEndPoint, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: AuditLogsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: AuditLogsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dzRW5kUG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9BdWRpdExvZ3NFbmRQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVFuRCxvREFBb0Q7QUFFcEQsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QixvQkFBb0I7SUFDcEIsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBSmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxhQUFhLENBQUM7UUFJOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQTJCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsTUFBZSxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUMvRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQy9FLENBQUM7K0dBcENVLGlCQUFpQixrQkFNUixRQUFRO21IQU5qQixpQkFBaUI7OzRGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVU7OzBCQU9JLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCwgRW50aXR5UmVzcG9uc2UsIEVudGl0aWVzUmVzcG9uc2UsIEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgR29veENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEF1ZGl0TG9nIH0gZnJvbSAnLic7XG5cblxuXG4vLyBBdWRpdExvZ3NFbmRQb2ludCBTZXJ2aWNlcyBmb3IgYXVkaXRMb2dzIGFjdGlvbnMgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXVkaXRMb2dzRW5kUG9pbnQge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYXVkaXRfbG9ncyc7XG5cbiAgLy8gQ2xhc3MgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IEdvb3hDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGF1ZGl0TG9nXG4gICAqL1xuICBjcmVhdGUoYm9keT86IEF1ZGl0TG9nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEVudGl0eVJlc3BvbnNlPEF1ZGl0TG9nPj4oYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc2luZ2xlIGF1ZGl0TG9nIGJ5IGlkXG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxBdWRpdExvZz4+KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGF1ZGl0TG9ncyBieSBxdWVyeVxuICAgKi9cbiAgZmluZChzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2l6ZT0ke3NpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0aWVzUmVzcG9uc2U8QXVkaXRMb2c+PihgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=