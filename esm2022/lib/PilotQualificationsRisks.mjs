// PilotQualificationsRisks group of pilot qualifications risk values
export class PilotQualificationsRisks {
    constructor(captLess200Hr, captLess100Hr90d, firstOfLess200Hr, firstOfLess100Hr90d) {
        if (captLess200Hr !== undefined) {
            this.captLess200Hr = captLess200Hr;
        }
        if (captLess100Hr90d !== undefined) {
            this.captLess100Hr90d = captLess100Hr90d;
        }
        if (firstOfLess200Hr !== undefined) {
            this.firstOfLess200Hr = firstOfLess200Hr;
        }
        if (firstOfLess100Hr90d !== undefined) {
            this.firstOfLess100Hr90d = firstOfLess100Hr90d;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlsb3RRdWFsaWZpY2F0aW9uc1Jpc2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvUGlsb3RRdWFsaWZpY2F0aW9uc1Jpc2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLHFFQUFxRTtBQUNyRSxNQUFNLE9BQU8sd0JBQXdCO0lBY2hDLFlBQVksYUFBc0IsRUFBRSxnQkFBeUIsRUFBRSxnQkFBeUIsRUFBRSxtQkFBNEI7UUFDbkgsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUFDLENBQUM7UUFDeEUsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUFDLENBQUM7UUFDakYsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUFDLENBQUM7UUFDakYsSUFBSSxtQkFBbUIsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUFDLENBQUM7SUFDOUYsQ0FBQztDQUtKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4vLyBQaWxvdFF1YWxpZmljYXRpb25zUmlza3MgZ3JvdXAgb2YgcGlsb3QgcXVhbGlmaWNhdGlvbnMgcmlzayB2YWx1ZXNcbmV4cG9ydCBjbGFzcyBQaWxvdFF1YWxpZmljYXRpb25zUmlza3Mge1xuIFxuICAgIC8vIENhcHRhaW4gd2l0aCBsZXNzIHRoYW4gMjAwIGhvdXJzIGluIGFpcmNyYWZ0IHR5cGUgXG4gICAgcHVibGljIGNhcHRMZXNzMjAwSHI6IG51bWJlcjtcbiBcbiAgICAvLyBDYXB0YWluIHdpdGggbGVzcyB0aGFuIDEwMCBob3VycyBpbiB0aGUgbGFzdCA5MCBkYXlzIFxuICAgIHB1YmxpYyBjYXB0TGVzczEwMEhyOTBkOiBudW1iZXI7XG4gXG4gICAgLy8gRmlyc3QgT2ZmaWNlciB3aXRoIGxlc3MgdGhhbiAyMDAgaG91cnMgaW4gYWlyY3JhZnQgdHlwZSBcbiAgICBwdWJsaWMgZmlyc3RPZkxlc3MyMDBIcjogbnVtYmVyO1xuIFxuICAgIC8vIEZpcnN0IE9mZmljZXIgd2l0aCBsZXNzIHRoYW4gMTAwIGhvdXJzIGluIHRoZSBsYXN0IDkwIGRheXMgXG4gICAgcHVibGljIGZpcnN0T2ZMZXNzMTAwSHI5MGQ6IG51bWJlcjtcbiBcbiAgICAgY29uc3RydWN0b3IoY2FwdExlc3MyMDBIcj86IG51bWJlciwgY2FwdExlc3MxMDBIcjkwZD86IG51bWJlciwgZmlyc3RPZkxlc3MyMDBIcj86IG51bWJlciwgZmlyc3RPZkxlc3MxMDBIcjkwZD86IG51bWJlcikgeyBcbiAgICAgICAgaWYgKGNhcHRMZXNzMjAwSHIgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNhcHRMZXNzMjAwSHIgPSBjYXB0TGVzczIwMEhyOyB9XG4gICAgICAgIGlmIChjYXB0TGVzczEwMEhyOTBkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5jYXB0TGVzczEwMEhyOTBkID0gY2FwdExlc3MxMDBIcjkwZDsgfVxuICAgICAgICBpZiAoZmlyc3RPZkxlc3MyMDBIciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZmlyc3RPZkxlc3MyMDBIciA9IGZpcnN0T2ZMZXNzMjAwSHI7IH1cbiAgICAgICAgaWYgKGZpcnN0T2ZMZXNzMTAwSHI5MGQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmZpcnN0T2ZMZXNzMTAwSHI5MGQgPSBmaXJzdE9mTGVzczEwMEhyOTBkOyB9XG4gICAgfVxuXG5cbiBcblxufVxuXG5cblxuXG5cblxuXG4iXX0=