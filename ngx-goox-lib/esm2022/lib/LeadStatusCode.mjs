// LeadStatusCode represents the lead status: NEW | INPROCESS | ASSIGNED ...
export var LeadStatusCode;
(function (LeadStatusCode) {
    // Undefined [0] 
    LeadStatusCode[LeadStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // New Lead [1] 
    LeadStatusCode[LeadStatusCode["NEW"] = 1] = "NEW";
    // Lead in process [2] 
    LeadStatusCode[LeadStatusCode["INPROCESS"] = 2] = "INPROCESS";
    // Lead assigned [3] 
    LeadStatusCode[LeadStatusCode["ASSIGNED"] = 3] = "ASSIGNED";
    // Lead converted [4] 
    LeadStatusCode[LeadStatusCode["CONVERTED"] = 4] = "CONVERTED";
    // Lead irrelevant [5] 
    LeadStatusCode[LeadStatusCode["IRRELEVANT"] = 5] = "IRRELEVANT";
    // Lead redirected [6] 
    LeadStatusCode[LeadStatusCode["REDIRECTED"] = 6] = "REDIRECTED";
    // Lead recycled [7] 
    LeadStatusCode[LeadStatusCode["RECYCLED"] = 7] = "RECYCLED";
    // Lead is no longer exists [8] 
    LeadStatusCode[LeadStatusCode["DEAD"] = 8] = "DEAD";
})(LeadStatusCode || (LeadStatusCode = {}));
// Return list of LeadStatusCode values and their display names
export function GetLeadStatusCodes() {
    let result = new Map();
    result.set(LeadStatusCode.UNDEFINED, 'Undefined');
    result.set(LeadStatusCode.NEW, 'New');
    result.set(LeadStatusCode.INPROCESS, 'Inprocess');
    result.set(LeadStatusCode.ASSIGNED, 'Assigned');
    result.set(LeadStatusCode.CONVERTED, 'Converted');
    result.set(LeadStatusCode.IRRELEVANT, 'Irrelevant');
    result.set(LeadStatusCode.REDIRECTED, 'Redirected');
    result.set(LeadStatusCode.RECYCLED, 'Recycled');
    result.set(LeadStatusCode.DEAD, 'Dead');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVhZFN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9MZWFkU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSw0RUFBNEU7QUFDNUUsTUFBTSxDQUFOLElBQVksY0E2Qlg7QUE3QkQsV0FBWSxjQUFjO0lBRXRCLGlCQUFpQjtJQUNqQiw2REFBYSxDQUFBO0lBRWIsZ0JBQWdCO0lBQ2hCLGlEQUFPLENBQUE7SUFFUCx1QkFBdUI7SUFDdkIsNkRBQWEsQ0FBQTtJQUViLHFCQUFxQjtJQUNyQiwyREFBWSxDQUFBO0lBRVosc0JBQXNCO0lBQ3RCLDZEQUFhLENBQUE7SUFFYix1QkFBdUI7SUFDdkIsK0RBQWMsQ0FBQTtJQUVkLHVCQUF1QjtJQUN2QiwrREFBYyxDQUFBO0lBRWQscUJBQXFCO0lBQ3JCLDJEQUFZLENBQUE7SUFFWixnQ0FBZ0M7SUFDaEMsbURBQVEsQ0FBQTtBQUVaLENBQUMsRUE3QlcsY0FBYyxLQUFkLGNBQWMsUUE2QnpCO0FBRUQsK0RBQStEO0FBQy9ELE1BQU0sVUFBVSxrQkFBa0I7SUFFOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7SUFHL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWxELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV0QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRWhELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRXBELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFHeEMsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBMZWFkU3RhdHVzQ29kZSByZXByZXNlbnRzIHRoZSBsZWFkIHN0YXR1czogTkVXIHwgSU5QUk9DRVNTIHwgQVNTSUdORUQgLi4uXG5leHBvcnQgZW51bSBMZWFkU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIE5ldyBMZWFkIFsxXSBcbiAgICBORVcgPSAxLFxuIFxuICAgIC8vIExlYWQgaW4gcHJvY2VzcyBbMl0gXG4gICAgSU5QUk9DRVNTID0gMixcbiBcbiAgICAvLyBMZWFkIGFzc2lnbmVkIFszXSBcbiAgICBBU1NJR05FRCA9IDMsXG4gXG4gICAgLy8gTGVhZCBjb252ZXJ0ZWQgWzRdIFxuICAgIENPTlZFUlRFRCA9IDQsXG4gXG4gICAgLy8gTGVhZCBpcnJlbGV2YW50IFs1XSBcbiAgICBJUlJFTEVWQU5UID0gNSxcbiBcbiAgICAvLyBMZWFkIHJlZGlyZWN0ZWQgWzZdIFxuICAgIFJFRElSRUNURUQgPSA2LFxuIFxuICAgIC8vIExlYWQgcmVjeWNsZWQgWzddIFxuICAgIFJFQ1lDTEVEID0gNyxcbiBcbiAgICAvLyBMZWFkIGlzIG5vIGxvbmdlciBleGlzdHMgWzhdIFxuICAgIERFQUQgPSA4LFxuIFxufVxuXG4vLyBSZXR1cm4gbGlzdCBvZiBMZWFkU3RhdHVzQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBHZXRMZWFkU3RhdHVzQ29kZXMoKSA6IE1hcDxMZWFkU3RhdHVzQ29kZSwgc3RyaW5nPiB7XG5cbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1hcDxMZWFkU3RhdHVzQ29kZSwgc3RyaW5nPigpO1xuXG4gICAgXG4gICAgcmVzdWx0LnNldChMZWFkU3RhdHVzQ29kZS5VTkRFRklORUQsICdVbmRlZmluZWQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KExlYWRTdGF0dXNDb2RlLk5FVywgJ05ldycpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoTGVhZFN0YXR1c0NvZGUuSU5QUk9DRVNTLCAnSW5wcm9jZXNzJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChMZWFkU3RhdHVzQ29kZS5BU1NJR05FRCwgJ0Fzc2lnbmVkJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChMZWFkU3RhdHVzQ29kZS5DT05WRVJURUQsICdDb252ZXJ0ZWQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KExlYWRTdGF0dXNDb2RlLklSUkVMRVZBTlQsICdJcnJlbGV2YW50Jyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChMZWFkU3RhdHVzQ29kZS5SRURJUkVDVEVELCAnUmVkaXJlY3RlZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoTGVhZFN0YXR1c0NvZGUuUkVDWUNMRUQsICdSZWN5Y2xlZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoTGVhZFN0YXR1c0NvZGUuREVBRCwgJ0RlYWQnKTtcbiAgICBcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iXX0=