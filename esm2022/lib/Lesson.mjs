// Lesson includes flight instruction lesson details
export class Lesson {
    constructor(number, subject, assessment, comments, flightCounter, instructedFlightTime, instrumentsFlightTime, soloFlightTime) {
        if (number !== undefined) {
            this.number = number;
        }
        if (subject !== undefined) {
            this.subject = subject;
        }
        if (assessment !== undefined) {
            this.assessment = assessment;
        }
        if (comments !== undefined) {
            this.comments = comments;
        }
        if (flightCounter !== undefined) {
            this.flightCounter = flightCounter;
        }
        if (instructedFlightTime !== undefined) {
            this.instructedFlightTime = instructedFlightTime;
        }
        if (instrumentsFlightTime !== undefined) {
            this.instrumentsFlightTime = instrumentsFlightTime;
        }
        if (soloFlightTime !== undefined) {
            this.soloFlightTime = soloFlightTime;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVzc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvTGVzc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLG9EQUFvRDtBQUNwRCxNQUFNLE9BQU8sTUFBTTtJQTBCZCxZQUFZLE1BQWUsRUFBRSxPQUFnQixFQUFFLFVBQTJCLEVBQUUsUUFBaUIsRUFBRSxhQUFzQixFQUFFLG9CQUE2QixFQUFFLHFCQUE4QixFQUFFLGNBQXVCO1FBQzFNLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFBQyxDQUFDO1FBQ25ELElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFBQyxDQUFDO1FBQ3RELElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFBQyxDQUFDO1FBQy9ELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFBQyxDQUFDO1FBQ3pELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFBQyxDQUFDO1FBQ3hFLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFBQyxDQUFDO1FBQzdGLElBQUkscUJBQXFCLEtBQUssU0FBUyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFBQyxDQUFDO1FBQ2hHLElBQUksY0FBYyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFBQyxDQUFDO0lBQy9FLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQXNzZXNzbWVudENvZGUgfSBmcm9tICcuJztcblxuXG5cbi8vIExlc3NvbiBpbmNsdWRlcyBmbGlnaHQgaW5zdHJ1Y3Rpb24gbGVzc29uIGRldGFpbHNcbmV4cG9ydCBjbGFzcyBMZXNzb24ge1xuIFxuICAgIC8vIExlc3NvbiBudW1iZXIgLSBsZXNzb25fbnVtYmVyIFxuICAgIHB1YmxpYyBudW1iZXI6IG51bWJlcjtcbiBcbiAgICAvLyBMZXNzb24gc3ViamVjdCBieSB0aGUgc3lsbGFidXMgLSBsZXNzb25fc3ViamVjdCBcbiAgICBwdWJsaWMgc3ViamVjdDogc3RyaW5nO1xuIFxuICAgIC8vIEluc3RydWN0b3IgYXNzZXNzbWVudCAoc2NvcmUpIGVudW0gLSBsZXNzb25fc2NvcmUgXG4gICAgcHVibGljIGFzc2Vzc21lbnQ6IEFzc2Vzc21lbnRDb2RlO1xuIFxuICAgIC8vIFBpbG90IC8gSW5zdHJ1Y3RvciBjb21tZW50cyBhZnRlciBmbGlnaHQgXG4gICAgcHVibGljIGNvbW1lbnRzOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlyc3QgT2ZmaWNlciAvIFN0dWRlbnQgZmxpZ2h0IGNvdW50ZXIgLSBzdHVkZW50X2ZsaWdodHNfY291bnQgXG4gICAgcHVibGljIGZsaWdodENvdW50ZXI6IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBpbnN0cnVjdGVkIGZsaWdodCB0aW1lIC0gaW5zdHJ1Y3RlZF9mbGlnaHRfdGltZV9jIFxuICAgIHB1YmxpYyBpbnN0cnVjdGVkRmxpZ2h0VGltZTogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIEluc3RydW1lbnQgZmxpZ2h0IHRpbWUgLSBuZXRfaW5zdHJ1bWVudHNfZmxpZ2h0X3RpbWVfYyBcbiAgICBwdWJsaWMgaW5zdHJ1bWVudHNGbGlnaHRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gVG90YWwgc3R1ZGVudCBTb2xvIGZsaWdodCB0aW1lIC0gc3R1ZGVudF9zb2xvX2ZsaWdodF90aW1lIFxuICAgIHB1YmxpYyBzb2xvRmxpZ2h0VGltZTogbnVtYmVyO1xuIFxuICAgICBjb25zdHJ1Y3RvcihudW1iZXI/OiBudW1iZXIsIHN1YmplY3Q/OiBzdHJpbmcsIGFzc2Vzc21lbnQ/OiBBc3Nlc3NtZW50Q29kZSwgY29tbWVudHM/OiBzdHJpbmcsIGZsaWdodENvdW50ZXI/OiBudW1iZXIsIGluc3RydWN0ZWRGbGlnaHRUaW1lPzogbnVtYmVyLCBpbnN0cnVtZW50c0ZsaWdodFRpbWU/OiBudW1iZXIsIHNvbG9GbGlnaHRUaW1lPzogbnVtYmVyKSB7IFxuICAgICAgICBpZiAobnVtYmVyICE9PSB1bmRlZmluZWQpIHsgdGhpcy5udW1iZXIgPSBudW1iZXI7IH1cbiAgICAgICAgaWYgKHN1YmplY3QgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnN1YmplY3QgPSBzdWJqZWN0OyB9XG4gICAgICAgIGlmIChhc3Nlc3NtZW50ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hc3Nlc3NtZW50ID0gYXNzZXNzbWVudDsgfVxuICAgICAgICBpZiAoY29tbWVudHMgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7IH1cbiAgICAgICAgaWYgKGZsaWdodENvdW50ZXIgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmZsaWdodENvdW50ZXIgPSBmbGlnaHRDb3VudGVyOyB9XG4gICAgICAgIGlmIChpbnN0cnVjdGVkRmxpZ2h0VGltZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaW5zdHJ1Y3RlZEZsaWdodFRpbWUgPSBpbnN0cnVjdGVkRmxpZ2h0VGltZTsgfVxuICAgICAgICBpZiAoaW5zdHJ1bWVudHNGbGlnaHRUaW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pbnN0cnVtZW50c0ZsaWdodFRpbWUgPSBpbnN0cnVtZW50c0ZsaWdodFRpbWU7IH1cbiAgICAgICAgaWYgKHNvbG9GbGlnaHRUaW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5zb2xvRmxpZ2h0VGltZSA9IHNvbG9GbGlnaHRUaW1lOyB9XG4gICAgfVxuXG59XG5cblxuXG5cblxuXG4iXX0=