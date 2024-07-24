import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../utils";
import * as i2 from "../config";
// FlightTicketsEndPoint Services for flightTickets actions 
export class FlightTicketsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/v1/flight_tickets';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new flightTicket
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/flight_tickets`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing flightTicket
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/flight_tickets`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete flightTicket and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/flight_tickets`);
    }
    /**
     * Get a single flightTicket by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/flight_tickets`);
    }
    /**
     * Find flightTickets by query
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
        return this.rest.get(`${this.baseUrl}/v1/flight_tickets`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FlightTicketsEndPoint, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FlightTicketsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: FlightTicketsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxpZ2h0VGlja2V0c0VuZFBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvRmxpZ2h0VGlja2V0c0VuZFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUW5ELDREQUE0RDtBQUU1RCxNQUFNLE9BQU8scUJBQXFCO0lBS2hDLG9CQUFvQjtJQUNwQixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFKaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLG9CQUFvQixDQUFDO1FBSXJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7O09BRUc7SUFDSCxNQUFNLENBQUMsSUFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBK0IsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0IsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25KLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFtQjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxPQUFPLG9CQUFvQixFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEosQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLEVBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRDs7T0FFRztJQUNILEdBQUcsQ0FBQyxFQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBK0IsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksQ0FBQyxNQUFlLEVBQUUsTUFBVyxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUM1RSxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUMsR0FBRyxJQUFJLENBQUMsT0FBTyxvQkFBb0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3JHLENBQUM7OEdBbkRVLHFCQUFxQixrQkFNWixRQUFRO2tIQU5qQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVU7OzBCQU9JLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCwgRW50aXR5UmVzcG9uc2UsIEVudGl0aWVzUmVzcG9uc2UsIEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgR29veENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IEZsaWdodFRpY2tldCB9IGZyb20gJy4nO1xuXG5cblxuLy8gRmxpZ2h0VGlja2V0c0VuZFBvaW50IFNlcnZpY2VzIGZvciBmbGlnaHRUaWNrZXRzIGFjdGlvbnMgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmxpZ2h0VGlja2V0c0VuZFBvaW50IHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3YxL2ZsaWdodF90aWNrZXRzJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogR29veENvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgZmxpZ2h0VGlja2V0XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEZsaWdodFRpY2tldCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxGbGlnaHRUaWNrZXQ+PihgJHt0aGlzLmJhc2VVcmx9L3YxL2ZsaWdodF90aWNrZXRzYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZXhpc3RpbmcgZmxpZ2h0VGlja2V0XG4gICAqL1xuICB1cGRhdGUoYm9keT86IEZsaWdodFRpY2tldCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0PEVudGl0eVJlc3BvbnNlPEZsaWdodFRpY2tldD4+KGAke3RoaXMuYmFzZVVybH0vdjEvZmxpZ2h0X3RpY2tldHNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBmbGlnaHRUaWNrZXQgYW5kIGFsbCBpdHMgY29udGVudFxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGU8QWN0aW9uUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVybH0vdjEvZmxpZ2h0X3RpY2tldHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGUgZmxpZ2h0VGlja2V0IGJ5IGlkXG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxGbGlnaHRUaWNrZXQ+PihgJHt0aGlzLmJhc2VVcmx9L3YxL2ZsaWdodF90aWNrZXRzYCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBmbGlnaHRUaWNrZXRzIGJ5IHF1ZXJ5XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxGbGlnaHRUaWNrZXQ+PihgJHt0aGlzLmJhc2VVcmx9L3YxL2ZsaWdodF90aWNrZXRzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=