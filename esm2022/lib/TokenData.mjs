// TokenData model represents user in account which is encrypted with the JWT token
export class TokenData {
    constructor(subjectId, subjectType, status, expiresIn) {
        if (subjectId !== undefined) {
            this.subjectId = subjectId;
        }
        if (subjectType !== undefined) {
            this.subjectType = subjectType;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (expiresIn !== undefined) {
            this.expiresIn = expiresIn;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5EYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvVG9rZW5EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLG1GQUFtRjtBQUNuRixNQUFNLE9BQU8sU0FBUztJQWNqQixZQUFZLFNBQWtCLEVBQUUsV0FBMEIsRUFBRSxNQUF1QixFQUFFLFNBQWtCO1FBQ3BHLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFBQyxDQUFDO1FBQzVELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFBQyxDQUFDO1FBQ2xFLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFBQyxDQUFDO1FBQ25ELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFBQyxDQUFDO0lBQ2hFLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVXNlclR5cGVDb2RlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4nO1xuXG5cblxuLy8gVG9rZW5EYXRhIG1vZGVsIHJlcHJlc2VudHMgdXNlciBpbiBhY2NvdW50IHdoaWNoIGlzIGVuY3J5cHRlZCB3aXRoIHRoZSBKV1QgdG9rZW5cbmV4cG9ydCBjbGFzcyBUb2tlbkRhdGEge1xuIFxuICAgIC8vIEF1dGhlbnRpY2F0ZWQgc3ViamVjdCBJRCAoY2FuIGJlIHVzZXIsIG9yIHNlcnZpY2UgYWNjb3VudCkgXG4gICAgcHVibGljIHN1YmplY3RJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN1YmplY3QgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBVU0VSIHwgU0VSVklDRV9BQ0NPVU5UIFxuICAgIHB1YmxpYyBzdWJqZWN0VHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzOiBVTkRFRklORUQgfCBQRU5ESU5HIHwgQUNUSVZFIHwgQkxPQ0tFRCB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBUb2tlbiBleHBpcmF0aW9uIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXhwaXJlc0luOiBudW1iZXI7XG4gXG4gICAgIGNvbnN0cnVjdG9yKHN1YmplY3RJZD86IHN0cmluZywgc3ViamVjdFR5cGU/OiBVc2VyVHlwZUNvZGUsIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlLCBleHBpcmVzSW4/OiBudW1iZXIpIHsgXG4gICAgICAgIGlmIChzdWJqZWN0SWQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN1YmplY3RJZCA9IHN1YmplY3RJZDsgfVxuICAgICAgICBpZiAoc3ViamVjdFR5cGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN1YmplY3RUeXBlID0gc3ViamVjdFR5cGU7IH1cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3RhdHVzID0gc3RhdHVzOyB9XG4gICAgICAgIGlmIChleHBpcmVzSW4gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV4cGlyZXNJbiA9IGV4cGlyZXNJbjsgfVxuICAgIH1cblxufVxuXG5cblxuIl19