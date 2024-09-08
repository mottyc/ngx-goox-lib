import { BaseRestResponse } from './BaseRestResponse';
// EntitiesResponse message is returned for any action returning multiple entities
export class EntityResponse extends BaseRestResponse {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL3V0aWxzL0VudGl0eVJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBRXJELGtGQUFrRjtBQUNsRixNQUFNLE9BQU8sY0FBa0IsU0FBUSxnQkFBZ0I7SUFBdkQ7O1FBRUksNkJBQTZCO1FBQ3RCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFeEIsK0JBQStCO1FBQ3hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFeEIsd0JBQXdCO1FBQ2pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFekIscUNBQXFDO1FBQzlCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFJN0IsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVJlc3RSZXNwb25zZSB9IGZyb20gJy4vQmFzZVJlc3RSZXNwb25zZSdcblxuLy8gRW50aXRpZXNSZXNwb25zZSBtZXNzYWdlIGlzIHJldHVybmVkIGZvciBhbnkgYWN0aW9uIHJldHVybmluZyBtdWx0aXBsZSBlbnRpdGllc1xuZXhwb3J0IGNsYXNzIEVudGl0eVJlc3BvbnNlPFQ+IGV4dGVuZHMgQmFzZVJlc3RSZXNwb25zZSB7XG5cbiAgICAvLyBDdXJyZW50IHBhZ2UgKEJ1bGspIG51bWJlclxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gU2l6ZSBvZiBwYWdlIChpdGVtcyBpbiBidWxrKVxuICAgIHB1YmxpYyBzaXplOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgcHVibGljIHBhZ2VzOiBudW1iZXIgPSAwO1xuXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWVyeVxuICAgIHB1YmxpYyB0b3RhbDogbnVtYmVyID0gMDtcblxuICAgIC8vIExpc3Qgb2YgZW50aXRpZXNcbiAgICBwdWJsaWMgZW50aXR5OiBUO1xufVxuIl19