// Fuel model represents fuel metrics
export class Fuel {
    constructor(tankSize, consumption, cost, estimatedFuelInTank, estimatedEndurance, lastUpdatedOn, lastUpdatedByFlight) {
        if (tankSize !== undefined) {
            this.totalTime = tankSize;
        }
        if (consumption !== undefined) {
            this.consumption = consumption;
        }
        if (cost !== undefined) {
            this.cost = cost;
        }
        if (estimatedFuelInTank !== undefined) {
            this.estimatedFuelInTank = estimatedFuelInTank;
        }
        if (estimatedEndurance !== undefined) {
            this.estimatedEndurance = estimatedEndurance;
        }
        if (lastUpdatedOn !== undefined) {
            this.lastUpdatedOn = lastUpdatedOn;
        }
        if (lastUpdatedByFlight !== undefined) {
            this.lastUpdatedByFlight = lastUpdatedByFlight;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nb294LWxpYi9zcmMvbGliL0Z1ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEscUNBQXFDO0FBQ3JDLE1BQU0sT0FBTyxJQUFJO0lBdUJaLFlBQVksUUFBaUIsRUFBRSxXQUFvQixFQUFFLElBQWEsRUFBRSxtQkFBNEIsRUFBRSxrQkFBMkIsRUFBRSxhQUFzQixFQUFFLG1CQUE0QjtRQUNoTCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUFFO1FBQzFELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQUU7UUFDbEUsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QyxJQUFJLG1CQUFtQixLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztTQUFFO1FBQzFGLElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1NBQUU7UUFDdkYsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FBRTtRQUN4RSxJQUFJLG1CQUFtQixLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztTQUFFO0lBQzlGLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuLy8gRnVlbCBtb2RlbCByZXByZXNlbnRzIGZ1ZWwgbWV0cmljc1xuZXhwb3J0IGNsYXNzIEZ1ZWwge1xuIFxuICAgIC8vIEZ1ZWwgdGFuayBzaXplIFtMaXRlcnNdIFxuICAgIHB1YmxpYyB0b3RhbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBGdWVsIGNvbnN1bXB0aW9uIFxuICAgIHB1YmxpYyBjb25zdW1wdGlvbjogbnVtYmVyO1xuIFxuICAgIC8vIEZ1ZWwgY29zdCBcbiAgICBwdWJsaWMgY29zdDogbnVtYmVyO1xuIFxuICAgIC8vIEVzdGltYXRlZCBmdWVsIGluIHRhbmsgXG4gICAgcHVibGljIGVzdGltYXRlZEZ1ZWxJblRhbms6IG51bWJlcjtcbiBcbiAgICAvLyBFc3RpbWF0ZWQgZW5kdXJhbmNlIFxuICAgIHB1YmxpYyBlc3RpbWF0ZWRFbmR1cmFuY2U6IG51bWJlcjtcbiBcbiAgICAvLyBMYXN0IHVwZGF0ZWQgb24gXG4gICAgcHVibGljIGxhc3RVcGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMYXN0IHVwZGF0ZWQgYnkgZmxpZ2h0IFxuICAgIHB1YmxpYyBsYXN0VXBkYXRlZEJ5RmxpZ2h0OiBudW1iZXI7XG4gXG4gICAgIGNvbnN0cnVjdG9yKHRhbmtTaXplPzogbnVtYmVyLCBjb25zdW1wdGlvbj86IG51bWJlciwgY29zdD86IG51bWJlciwgZXN0aW1hdGVkRnVlbEluVGFuaz86IG51bWJlciwgZXN0aW1hdGVkRW5kdXJhbmNlPzogbnVtYmVyLCBsYXN0VXBkYXRlZE9uPzogbnVtYmVyLCBsYXN0VXBkYXRlZEJ5RmxpZ2h0PzogbnVtYmVyKSB7IFxuICAgICAgICBpZiAodGFua1NpemUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnRvdGFsVGltZSA9IHRhbmtTaXplOyB9XG4gICAgICAgIGlmIChjb25zdW1wdGlvbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29uc3VtcHRpb24gPSBjb25zdW1wdGlvbjsgfVxuICAgICAgICBpZiAoY29zdCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29zdCA9IGNvc3Q7IH1cbiAgICAgICAgaWYgKGVzdGltYXRlZEZ1ZWxJblRhbmsgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmVzdGltYXRlZEZ1ZWxJblRhbmsgPSBlc3RpbWF0ZWRGdWVsSW5UYW5rOyB9XG4gICAgICAgIGlmIChlc3RpbWF0ZWRFbmR1cmFuY2UgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmVzdGltYXRlZEVuZHVyYW5jZSA9IGVzdGltYXRlZEVuZHVyYW5jZTsgfVxuICAgICAgICBpZiAobGFzdFVwZGF0ZWRPbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubGFzdFVwZGF0ZWRPbiA9IGxhc3RVcGRhdGVkT247IH1cbiAgICAgICAgaWYgKGxhc3RVcGRhdGVkQnlGbGlnaHQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmxhc3RVcGRhdGVkQnlGbGlnaHQgPSBsYXN0VXBkYXRlZEJ5RmxpZ2h0OyB9XG4gICAgfVxuXG59XG5cblxuXG4iXX0=