import { BaseRestResponse } from './BaseRestResponse';
// ActionResponse message is returned for any action on entity with no return data (e.d. delete)
export class ActionResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Entity key
        this.key = '';
        // Additional data
        this.data = '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL3V0aWxzL0FjdGlvblJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBRXJELGdHQUFnRztBQUNoRyxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjtJQUFwRDs7UUFFSSxhQUFhO1FBQ04sUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUV4QixrQkFBa0I7UUFDWCxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXN0UmVzcG9uc2UgfSBmcm9tICcuL0Jhc2VSZXN0UmVzcG9uc2UnXG5cbi8vIEFjdGlvblJlc3BvbnNlIG1lc3NhZ2UgaXMgcmV0dXJuZWQgZm9yIGFueSBhY3Rpb24gb24gZW50aXR5IHdpdGggbm8gcmV0dXJuIGRhdGEgKGUuZC4gZGVsZXRlKVxuZXhwb3J0IGNsYXNzIEFjdGlvblJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3RSZXNwb25zZSB7XG5cbiAgICAvLyBFbnRpdHkga2V5XG4gICAgcHVibGljIGtleTogc3RyaW5nID0gJyc7XG5cbiAgICAvLyBBZGRpdGlvbmFsIGRhdGFcbiAgICBwdWJsaWMgZGF0YTogc3RyaW5nID0gJyc7XG59XG5cblxuIl19