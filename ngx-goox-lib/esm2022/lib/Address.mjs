// Address model represents an address
export class Address {
    constructor(street, city, state, zipCode, country) {
        if (street !== undefined) {
            this.street = street;
        }
        if (city !== undefined) {
            this.city = city;
        }
        if (state !== undefined) {
            this.state = state;
        }
        if (zipCode !== undefined) {
            this.zipCode = zipCode;
        }
        if (country !== undefined) {
            this.country = country;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nb294LWxpYi9zcmMvbGliL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsc0NBQXNDO0FBQ3RDLE1BQU0sT0FBTyxPQUFPO0lBaUJmLFlBQVksTUFBZSxFQUFFLElBQWEsRUFBRSxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUFnQjtRQUMzRixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUFFO1FBQ25ELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDN0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FBRTtRQUNoRCxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUFFO1FBQ3RELElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQUU7SUFDMUQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4vLyBBZGRyZXNzIG1vZGVsIHJlcHJlc2VudHMgYW4gYWRkcmVzc1xuZXhwb3J0IGNsYXNzIEFkZHJlc3Mge1xuIFxuICAgIC8vIFN0cmVldCBhZGRyZXNzIFxuICAgIHB1YmxpYyBzdHJlZXQ6IHN0cmluZztcbiBcbiAgICAvLyBDaXR5IFxuICAgIHB1YmxpYyBjaXR5OiBzdHJpbmc7XG4gXG4gICAgLy8gU3RhdGUgKGlmIGFwcGxpY2FibGUpIFxuICAgIHB1YmxpYyBzdGF0ZTogc3RyaW5nO1xuIFxuICAgIC8vIExvY2FsIHppcCBjb2RlIChwb3N0YWwgY29kKSBcbiAgICBwdWJsaWMgemlwQ29kZTogc3RyaW5nO1xuIFxuICAgIC8vIENvdW50cnkgbmFtZSBcbiAgICBwdWJsaWMgY291bnRyeTogc3RyaW5nO1xuIFxuICAgICBjb25zdHJ1Y3RvcihzdHJlZXQ/OiBzdHJpbmcsIGNpdHk/OiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nLCB6aXBDb2RlPzogc3RyaW5nLCBjb3VudHJ5Pzogc3RyaW5nKSB7IFxuICAgICAgICBpZiAoc3RyZWV0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zdHJlZXQgPSBzdHJlZXQ7IH1cbiAgICAgICAgaWYgKGNpdHkgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNpdHkgPSBjaXR5OyB9XG4gICAgICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3RhdGUgPSBzdGF0ZTsgfVxuICAgICAgICBpZiAoemlwQ29kZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuemlwQ29kZSA9IHppcENvZGU7IH1cbiAgICAgICAgaWYgKGNvdW50cnkgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvdW50cnkgPSBjb3VudHJ5OyB9XG4gICAgfVxuXG59XG5cblxuIl19