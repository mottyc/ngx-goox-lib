import { BaseRestResponse } from './BaseRestResponse';
// EntitiesResponse message is returned for any action returning multiple entities
export class EntitiesResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Current page (Bulk) number
        this.page = 0;
        // Size of page (items in bulk)
        this.size = 0;
        // Total number of pages
        this.pages = 0;
        // Total number of items in the query
        this.total = 0;
        // List of entities
        this.list = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXRpZXNSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nb294LWxpYi9zcmMvdXRpbHMvRW50aXRpZXNSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUVyRCxrRkFBa0Y7QUFDbEYsTUFBTSxPQUFPLGdCQUFvQixTQUFRLGdCQUFnQjtJQUF6RDs7UUFFSSw2QkFBNkI7UUFDdEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUV4QiwrQkFBK0I7UUFDeEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUV4Qix3QkFBd0I7UUFDakIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUV6QixxQ0FBcUM7UUFDOUIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUV6QixtQkFBbUI7UUFDWixTQUFJLEdBQVEsRUFBRSxDQUFDO0lBRTFCLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXN0UmVzcG9uc2UgfSBmcm9tICcuL0Jhc2VSZXN0UmVzcG9uc2UnXG5cbi8vIEVudGl0aWVzUmVzcG9uc2UgbWVzc2FnZSBpcyByZXR1cm5lZCBmb3IgYW55IGFjdGlvbiByZXR1cm5pbmcgbXVsdGlwbGUgZW50aXRpZXNcbmV4cG9ydCBjbGFzcyBFbnRpdGllc1Jlc3BvbnNlPFQ+IGV4dGVuZHMgQmFzZVJlc3RSZXNwb25zZSB7XG5cbiAgICAvLyBDdXJyZW50IHBhZ2UgKEJ1bGspIG51bWJlclxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gU2l6ZSBvZiBwYWdlIChpdGVtcyBpbiBidWxrKVxuICAgIHB1YmxpYyBzaXplOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgcHVibGljIHBhZ2VzOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWVyeVxuICAgIHB1YmxpYyB0b3RhbDogbnVtYmVyID0gMDtcblxuICAgIC8vIExpc3Qgb2YgZW50aXRpZXNcbiAgICBwdWJsaWMgbGlzdDogVFtdID0gW107XG5cbn0iXX0=