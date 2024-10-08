// DepartureRisks group of departure risk values
export class DepartureRisks {
    constructor(mountainousAirport, towerNotOperationalAtEtd, nonToweredAirport, wetRunway, contaminatedRunway) {
        if (mountainousAirport !== undefined) {
            this.mountainousAirport = mountainousAirport;
        }
        if (towerNotOperationalAtEtd !== undefined) {
            this.towerNotOperationalAtEtd = towerNotOperationalAtEtd;
        }
        if (nonToweredAirport !== undefined) {
            this.nonToweredAirport = nonToweredAirport;
        }
        if (wetRunway !== undefined) {
            this.wetRunway = wetRunway;
        }
        if (contaminatedRunway !== undefined) {
            this.contaminatedRunway = contaminatedRunway;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwYXJ0dXJlUmlza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9EZXBhcnR1cmVSaXNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxnREFBZ0Q7QUFDaEQsTUFBTSxPQUFPLGNBQWM7SUFpQnRCLFlBQVksa0JBQTJCLEVBQUUsd0JBQWlDLEVBQUUsaUJBQTBCLEVBQUUsU0FBa0IsRUFBRSxrQkFBMkI7UUFDcEosSUFBSSxrQkFBa0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUFDLENBQUM7UUFDdkYsSUFBSSx3QkFBd0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztRQUFDLENBQUM7UUFDekcsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUFDLENBQUM7UUFDcEYsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUFDLENBQUM7UUFDNUQsSUFBSSxrQkFBa0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUFDLENBQUM7SUFDM0YsQ0FBQztDQUtKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4vLyBEZXBhcnR1cmVSaXNrcyBncm91cCBvZiBkZXBhcnR1cmUgcmlzayB2YWx1ZXNcbmV4cG9ydCBjbGFzcyBEZXBhcnR1cmVSaXNrcyB7XG4gXG4gICAgLy8gTW91bnRhaW5vdXMgYWlycG9ydCBcbiAgICBwdWJsaWMgbW91bnRhaW5vdXNBaXJwb3J0OiBudW1iZXI7XG4gXG4gICAgLy8gQ29udHJvbCB0b3dlciBub3Qgb3BlcmF0aW9uYWwgYXQgRVREIFxuICAgIHB1YmxpYyB0b3dlck5vdE9wZXJhdGlvbmFsQXRFdGQ6IG51bWJlcjtcbiBcbiAgICAvLyBEZXBhcnR1cmUgLSBOb24tdG93ZXJlZCBhaXJwb3J0IFxuICAgIHB1YmxpYyBub25Ub3dlcmVkQWlycG9ydDogbnVtYmVyO1xuIFxuICAgIC8vIERlcGFydHVyZSAtIFdldCBSdW53YXkgXG4gICAgcHVibGljIHdldFJ1bndheTogbnVtYmVyO1xuIFxuICAgIC8vIERlcGFydHVyZSAtIENvbnRhbWluYXRlZCBSdW53YXkgXG4gICAgcHVibGljIGNvbnRhbWluYXRlZFJ1bndheTogbnVtYmVyO1xuIFxuICAgICBjb25zdHJ1Y3Rvcihtb3VudGFpbm91c0FpcnBvcnQ/OiBudW1iZXIsIHRvd2VyTm90T3BlcmF0aW9uYWxBdEV0ZD86IG51bWJlciwgbm9uVG93ZXJlZEFpcnBvcnQ/OiBudW1iZXIsIHdldFJ1bndheT86IG51bWJlciwgY29udGFtaW5hdGVkUnVud2F5PzogbnVtYmVyKSB7IFxuICAgICAgICBpZiAobW91bnRhaW5vdXNBaXJwb3J0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5tb3VudGFpbm91c0FpcnBvcnQgPSBtb3VudGFpbm91c0FpcnBvcnQ7IH1cbiAgICAgICAgaWYgKHRvd2VyTm90T3BlcmF0aW9uYWxBdEV0ZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudG93ZXJOb3RPcGVyYXRpb25hbEF0RXRkID0gdG93ZXJOb3RPcGVyYXRpb25hbEF0RXRkOyB9XG4gICAgICAgIGlmIChub25Ub3dlcmVkQWlycG9ydCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubm9uVG93ZXJlZEFpcnBvcnQgPSBub25Ub3dlcmVkQWlycG9ydDsgfVxuICAgICAgICBpZiAod2V0UnVud2F5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy53ZXRSdW53YXkgPSB3ZXRSdW53YXk7IH1cbiAgICAgICAgaWYgKGNvbnRhbWluYXRlZFJ1bndheSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29udGFtaW5hdGVkUnVud2F5ID0gY29udGFtaW5hdGVkUnVud2F5OyB9XG4gICAgfVxuXG5cbiBcblxufVxuXG5cblxuXG5cblxuXG4iXX0=