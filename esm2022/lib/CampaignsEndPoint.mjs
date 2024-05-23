import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../utils";
import * as i2 from "../config";
// CampaignsEndPoint Services for campaigns actions 
// @Path: /v1/campaigns 
export class CampaignsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new campaign
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/campaigns`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing campaign
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/campaigns`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete campaign and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/campaigns`);
    }
    /**
     * Get a single campaign by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/campaigns`);
    }
    /**
     * Find campaigns by query
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
        return this.rest.get(`${this.baseUrl}/v1/campaigns`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: CampaignsEndPoint, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: CampaignsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: CampaignsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FtcGFpZ25zRW5kUG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9DYW1wYWlnbnNFbmRQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVFuRCxvREFBb0Q7QUFDcEQsd0JBQXdCO0FBRXhCLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsb0JBQW9CO0lBQ3BCLFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUpoRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSW5CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7O09BRUc7SUFDSCxNQUFNLENBQUMsSUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUEyQixHQUFHLElBQUksQ0FBQyxPQUFPLGVBQWUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFJLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTJCLEdBQUcsSUFBSSxDQUFDLE9BQU8sZUFBZSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekksQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxlQUFlLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxHQUFHLENBQUMsRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTJCLEdBQUcsSUFBSSxDQUFDLE9BQU8sZUFBZSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLE1BQWUsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLElBQWE7UUFDL0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNkIsR0FBRyxJQUFJLENBQUMsT0FBTyxlQUFlLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1RixDQUFDOytHQWxEVSxpQkFBaUIsa0JBTVIsUUFBUTttSEFOakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzswQkFPSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwsIEVudGl0eVJlc3BvbnNlLCBFbnRpdGllc1Jlc3BvbnNlLCBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEdvb3hDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQgeyBDYW1wYWlnbiB9IGZyb20gJy4nO1xuXG5cblxuLy8gQ2FtcGFpZ25zRW5kUG9pbnQgU2VydmljZXMgZm9yIGNhbXBhaWducyBhY3Rpb25zIFxuLy8gQFBhdGg6IC92MS9jYW1wYWlnbnMgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtcGFpZ25zRW5kUG9pbnQge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcnO1xuXG4gIC8vIENsYXNzIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBHb294Q29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBjYW1wYWlnblxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBDYW1wYWlnbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxDYW1wYWlnbj4+KGAke3RoaXMuYmFzZVVybH0vdjEvY2FtcGFpZ25zYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZXhpc3RpbmcgY2FtcGFpZ25cbiAgICovXG4gIHVwZGF0ZShib2R5PzogQ2FtcGFpZ24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dDxFbnRpdHlSZXNwb25zZTxDYW1wYWlnbj4+KGAke3RoaXMuYmFzZVVybH0vdjEvY2FtcGFpZ25zYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgY2FtcGFpZ24gYW5kIGFsbCBpdHMgY29udGVudFxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGU8QWN0aW9uUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVybH0vdjEvY2FtcGFpZ25zYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc2luZ2xlIGNhbXBhaWduIGJ5IGlkXG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxDYW1wYWlnbj4+KGAke3RoaXMuYmFzZVVybH0vdjEvY2FtcGFpZ25zYCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBjYW1wYWlnbnMgYnkgcXVlcnlcbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPENhbXBhaWduPj4oYCR7dGhpcy5iYXNlVXJsfS92MS9jYW1wYWlnbnNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==