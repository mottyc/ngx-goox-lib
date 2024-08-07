import { Tuple } from '.';
// BillingStatusCode represents a flight billing status:  ...
export var BillingStatusCode;
(function (BillingStatusCode) {
    // Undefined [0] 
    BillingStatusCode[BillingStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Unapproved [1] 
    BillingStatusCode[BillingStatusCode["UNAPPROVED"] = 1] = "UNAPPROVED";
    // Approved [2] 
    BillingStatusCode[BillingStatusCode["APPROVED"] = 2] = "APPROVED";
    // Auto invoice created [3] 
    BillingStatusCode[BillingStatusCode["CREATED_INVOICE"] = 3] = "CREATED_INVOICE";
    // Auto invoice pending [4] 
    BillingStatusCode[BillingStatusCode["PENDING_INVOICE"] = 4] = "PENDING_INVOICE";
    // Manual invoice [5] 
    BillingStatusCode[BillingStatusCode["MANUAL_INVOICE"] = 5] = "MANUAL_INVOICE";
    // Closed [6] 
    BillingStatusCode[BillingStatusCode["CLOSED"] = 6] = "CLOSED";
    // Credit Client [7] 
    BillingStatusCode[BillingStatusCode["CREDIT"] = 7] = "CREDIT";
    // Cancelled invoice [8] 
    BillingStatusCode[BillingStatusCode["CANCELLED"] = 8] = "CANCELLED";
    // Irrelevant status [9] 
    BillingStatusCode[BillingStatusCode["CANCELLED_BY_CLIENT"] = 9] = "CANCELLED_BY_CLIENT";
    // Irrelevant status [10] 
    BillingStatusCode[BillingStatusCode["IRRELEVANT"] = 10] = "IRRELEVANT";
})(BillingStatusCode || (BillingStatusCode = {}));
// Return list of BillingStatusCode values and their display names
export function GetBillingStatusCodes() {
    let result = [];
    result.push(new Tuple(BillingStatusCode.UNAPPROVED, 'BillingStatusCode.UNAPPROVED'));
    result.push(new Tuple(BillingStatusCode.APPROVED, 'BillingStatusCode.APPROVED'));
    result.push(new Tuple(BillingStatusCode.CREATED_INVOICE, 'BillingStatusCode.CREATED_INVOICE'));
    result.push(new Tuple(BillingStatusCode.PENDING_INVOICE, 'BillingStatusCode.PENDING_INVOICE'));
    result.push(new Tuple(BillingStatusCode.MANUAL_INVOICE, 'BillingStatusCode.MANUAL_INVOICE'));
    result.push(new Tuple(BillingStatusCode.CLOSED, 'BillingStatusCode.CLOSED'));
    result.push(new Tuple(BillingStatusCode.CREDIT, 'BillingStatusCode.CREDIT'));
    result.push(new Tuple(BillingStatusCode.CANCELLED, 'BillingStatusCode.CANCELLED'));
    result.push(new Tuple(BillingStatusCode.CANCELLED_BY_CLIENT, 'BillingStatusCode.CANCELLED_BY_CLIENT'));
    result.push(new Tuple(BillingStatusCode.IRRELEVANT, 'BillingStatusCode.IRRELEVANT'));
    return result;
}
// Return map of BillingStatusCode values and their display names
export function MapBillingStatusCodes() {
    let result = new Map();
    result.set(BillingStatusCode.UNDEFINED, 'Undefined');
    result.set(BillingStatusCode.UNAPPROVED, 'Unapproved');
    result.set(BillingStatusCode.APPROVED, 'Approved');
    result.set(BillingStatusCode.CREATED_INVOICE, 'Created Invoice');
    result.set(BillingStatusCode.PENDING_INVOICE, 'Pending Invoice');
    result.set(BillingStatusCode.MANUAL_INVOICE, 'Manual Invoice');
    result.set(BillingStatusCode.CLOSED, 'Closed');
    result.set(BillingStatusCode.CREDIT, 'Credit');
    result.set(BillingStatusCode.CANCELLED, 'Cancelled');
    result.set(BillingStatusCode.CANCELLED_BY_CLIENT, 'Cancelled By Client');
    result.set(BillingStatusCode.IRRELEVANT, 'Irrelevant');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlsbGluZ1N0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9CaWxsaW5nU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBRzFCLDZEQUE2RDtBQUM3RCxNQUFNLENBQU4sSUFBWSxpQkFtQ1g7QUFuQ0QsV0FBWSxpQkFBaUI7SUFFekIsaUJBQWlCO0lBQ2pCLG1FQUFhLENBQUE7SUFFYixrQkFBa0I7SUFDbEIscUVBQWMsQ0FBQTtJQUVkLGdCQUFnQjtJQUNoQixpRUFBWSxDQUFBO0lBRVosNEJBQTRCO0lBQzVCLCtFQUFtQixDQUFBO0lBRW5CLDRCQUE0QjtJQUM1QiwrRUFBbUIsQ0FBQTtJQUVuQixzQkFBc0I7SUFDdEIsNkVBQWtCLENBQUE7SUFFbEIsY0FBYztJQUNkLDZEQUFVLENBQUE7SUFFVixxQkFBcUI7SUFDckIsNkRBQVUsQ0FBQTtJQUVWLHlCQUF5QjtJQUN6QixtRUFBYSxDQUFBO0lBRWIseUJBQXlCO0lBQ3pCLHVGQUF1QixDQUFBO0lBRXZCLDBCQUEwQjtJQUMxQixzRUFBZSxDQUFBO0FBRW5CLENBQUMsRUFuQ1csaUJBQWlCLEtBQWpCLGlCQUFpQixRQW1DNUI7QUFFRCxrRUFBa0U7QUFDbEUsTUFBTSxVQUFVLHFCQUFxQjtJQUNwQyxJQUFJLE1BQU0sR0FBd0MsRUFBRSxDQUFDO0lBR3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLFVBQVUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7SUFFL0csTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtJQUUzRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE0QixpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsbUNBQW1DLENBQUMsQ0FBQyxDQUFBO0lBRXpILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDLENBQUE7SUFFekgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsY0FBYyxFQUFFLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtJQUV2SCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE0QixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFBO0lBRXZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUE7SUFFdkcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsU0FBUyxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQTtJQUU3RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE0QixpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDLENBQUE7SUFFakksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsVUFBVSxFQUFFLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtJQUc1RyxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsaUVBQWlFO0FBQ2pFLE1BQU0sVUFBVSxxQkFBcUI7SUFDakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7SUFHckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFdkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUVqRSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBRXpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBR3BELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFR1cGxlIH0gZnJvbSAnLic7XG5cblxuLy8gQmlsbGluZ1N0YXR1c0NvZGUgcmVwcmVzZW50cyBhIGZsaWdodCBiaWxsaW5nIHN0YXR1czogIC4uLlxuZXhwb3J0IGVudW0gQmlsbGluZ1N0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBVbmFwcHJvdmVkIFsxXSBcbiAgICBVTkFQUFJPVkVEID0gMSxcbiBcbiAgICAvLyBBcHByb3ZlZCBbMl0gXG4gICAgQVBQUk9WRUQgPSAyLFxuIFxuICAgIC8vIEF1dG8gaW52b2ljZSBjcmVhdGVkIFszXSBcbiAgICBDUkVBVEVEX0lOVk9JQ0UgPSAzLFxuIFxuICAgIC8vIEF1dG8gaW52b2ljZSBwZW5kaW5nIFs0XSBcbiAgICBQRU5ESU5HX0lOVk9JQ0UgPSA0LFxuIFxuICAgIC8vIE1hbnVhbCBpbnZvaWNlIFs1XSBcbiAgICBNQU5VQUxfSU5WT0lDRSA9IDUsXG4gXG4gICAgLy8gQ2xvc2VkIFs2XSBcbiAgICBDTE9TRUQgPSA2LFxuIFxuICAgIC8vIENyZWRpdCBDbGllbnQgWzddIFxuICAgIENSRURJVCA9IDcsXG4gXG4gICAgLy8gQ2FuY2VsbGVkIGludm9pY2UgWzhdIFxuICAgIENBTkNFTExFRCA9IDgsXG4gXG4gICAgLy8gSXJyZWxldmFudCBzdGF0dXMgWzldIFxuICAgIENBTkNFTExFRF9CWV9DTElFTlQgPSA5LFxuIFxuICAgIC8vIElycmVsZXZhbnQgc3RhdHVzIFsxMF0gXG4gICAgSVJSRUxFVkFOVCA9IDEwLFxuIFxufVxuXG4vLyBSZXR1cm4gbGlzdCBvZiBCaWxsaW5nU3RhdHVzQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBHZXRCaWxsaW5nU3RhdHVzQ29kZXMoKSA6IFR1cGxlPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+W10ge1xuXHRsZXQgcmVzdWx0IDogVHVwbGU8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz5bXSA9IFtdO1xuXG4gICAgXG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5VTkFQUFJPVkVELCAnQmlsbGluZ1N0YXR1c0NvZGUuVU5BUFBST1ZFRCcpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+KEJpbGxpbmdTdGF0dXNDb2RlLkFQUFJPVkVELCAnQmlsbGluZ1N0YXR1c0NvZGUuQVBQUk9WRUQnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5DUkVBVEVEX0lOVk9JQ0UsICdCaWxsaW5nU3RhdHVzQ29kZS5DUkVBVEVEX0lOVk9JQ0UnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5QRU5ESU5HX0lOVk9JQ0UsICdCaWxsaW5nU3RhdHVzQ29kZS5QRU5ESU5HX0lOVk9JQ0UnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5NQU5VQUxfSU5WT0lDRSwgJ0JpbGxpbmdTdGF0dXNDb2RlLk1BTlVBTF9JTlZPSUNFJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz4oQmlsbGluZ1N0YXR1c0NvZGUuQ0xPU0VELCAnQmlsbGluZ1N0YXR1c0NvZGUuQ0xPU0VEJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz4oQmlsbGluZ1N0YXR1c0NvZGUuQ1JFRElULCAnQmlsbGluZ1N0YXR1c0NvZGUuQ1JFRElUJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz4oQmlsbGluZ1N0YXR1c0NvZGUuQ0FOQ0VMTEVELCAnQmlsbGluZ1N0YXR1c0NvZGUuQ0FOQ0VMTEVEJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz4oQmlsbGluZ1N0YXR1c0NvZGUuQ0FOQ0VMTEVEX0JZX0NMSUVOVCwgJ0JpbGxpbmdTdGF0dXNDb2RlLkNBTkNFTExFRF9CWV9DTElFTlQnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5JUlJFTEVWQU5ULCAnQmlsbGluZ1N0YXR1c0NvZGUuSVJSRUxFVkFOVCcpKVxuXHRcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFJldHVybiBtYXAgb2YgQmlsbGluZ1N0YXR1c0NvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gTWFwQmlsbGluZ1N0YXR1c0NvZGVzKCkgOiBNYXA8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz4ge1xuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+KCk7XG5cbiAgICBcblx0cmVzdWx0LnNldChCaWxsaW5nU3RhdHVzQ29kZS5VTkRFRklORUQsICdVbmRlZmluZWQnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuVU5BUFBST1ZFRCwgJ1VuYXBwcm92ZWQnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuQVBQUk9WRUQsICdBcHByb3ZlZCcpO1xuXHRcblx0cmVzdWx0LnNldChCaWxsaW5nU3RhdHVzQ29kZS5DUkVBVEVEX0lOVk9JQ0UsICdDcmVhdGVkIEludm9pY2UnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuUEVORElOR19JTlZPSUNFLCAnUGVuZGluZyBJbnZvaWNlJyk7XG5cdFxuXHRyZXN1bHQuc2V0KEJpbGxpbmdTdGF0dXNDb2RlLk1BTlVBTF9JTlZPSUNFLCAnTWFudWFsIEludm9pY2UnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuQ0xPU0VELCAnQ2xvc2VkJyk7XG5cdFxuXHRyZXN1bHQuc2V0KEJpbGxpbmdTdGF0dXNDb2RlLkNSRURJVCwgJ0NyZWRpdCcpO1xuXHRcblx0cmVzdWx0LnNldChCaWxsaW5nU3RhdHVzQ29kZS5DQU5DRUxMRUQsICdDYW5jZWxsZWQnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuQ0FOQ0VMTEVEX0JZX0NMSUVOVCwgJ0NhbmNlbGxlZCBCeSBDbGllbnQnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuSVJSRUxFVkFOVCwgJ0lycmVsZXZhbnQnKTtcblx0XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIl19