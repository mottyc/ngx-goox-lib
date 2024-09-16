import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../utils";
import * as i2 from "../config";
// FlightsEndPoint Services for flights actions 
export class FlightsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/flights';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new flight
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing flight
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete flight and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single flight by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find flights by query
     */
    find(search, type, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find list of contacts (pilot / first officer) on this flight
     */
    findContacts(id, search, sort, page, size) {
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
        return this.rest.get(`${this.baseUrl}/${id}/contacts`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightsEndPoint, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i2.GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxpZ2h0c0VuZFBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvRmxpZ2h0c0VuZFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBU25ELGdEQUFnRDtBQUVoRCxNQUFNLE9BQU8sZUFBZTtJQUsxQixvQkFBb0I7SUFDcEIsWUFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBSmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxVQUFVLENBQUM7UUFJM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLElBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxHQUFHLENBQUMsRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksQ0FBQyxNQUFlLEVBQUUsSUFBUyxFQUFFLE1BQVcsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLElBQWE7UUFDdkYsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7UUFBQyxDQUFDO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTJCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFDLEVBQVcsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxJQUFhO1FBQ3BGLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUVwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3RixDQUFDOzhHQWpFVSxlQUFlLGtCQU1OLFFBQVE7a0hBTmpCLGVBQWU7OzJGQUFmLGVBQWU7a0JBRDNCLFVBQVU7OzBCQU9JLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCwgRW50aXR5UmVzcG9uc2UsIEVudGl0aWVzUmVzcG9uc2UsIEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgR29veENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuJztcbmltcG9ydCB7IEZsaWdodCB9IGZyb20gJy4nO1xuXG5cblxuLy8gRmxpZ2h0c0VuZFBvaW50IFNlcnZpY2VzIGZvciBmbGlnaHRzIGFjdGlvbnMgXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmxpZ2h0c0VuZFBvaW50IHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2ZsaWdodHMnO1xuXG4gIC8vIENsYXNzIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBHb294Q29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBmbGlnaHRcbiAgICovXG4gIGNyZWF0ZShib2R5PzogRmxpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0PEVudGl0eVJlc3BvbnNlPEZsaWdodD4+KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBleGlzdGluZyBmbGlnaHRcbiAgICovXG4gIHVwZGF0ZShib2R5PzogRmxpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQ8RW50aXR5UmVzcG9uc2U8RmxpZ2h0Pj4oYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGZsaWdodCBhbmQgYWxsIGl0cyBjb250ZW50XG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZTxBY3Rpb25SZXNwb25zZT4oYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZSBmbGlnaHQgYnkgaWRcbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPEZsaWdodD4+KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGZsaWdodHMgYnkgcXVlcnlcbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogW10sIHN0YXR1cz86IFtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAoc2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzaXplPSR7c2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxGbGlnaHQ+PihgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgY29udGFjdHMgKHBpbG90IC8gZmlyc3Qgb2ZmaWNlcikgb24gdGhpcyBmbGlnaHRcbiAgICovXG4gIGZpbmRDb250YWN0cyhpZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gW107XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChzaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNpemU9JHtzaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdGllc1Jlc3BvbnNlPENvbnRhY3Q+PihgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2NvbnRhY3RzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=