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
    // Irrelevant status [8] 
    BillingStatusCode[BillingStatusCode["IRRELEVANT"] = 8] = "IRRELEVANT";
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
    result.set(BillingStatusCode.IRRELEVANT, 'Irrelevant');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlsbGluZ1N0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9CaWxsaW5nU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBRzFCLDZEQUE2RDtBQUM3RCxNQUFNLENBQU4sSUFBWSxpQkE2Qlg7QUE3QkQsV0FBWSxpQkFBaUI7SUFFekIsaUJBQWlCO0lBQ2pCLG1FQUFhLENBQUE7SUFFYixrQkFBa0I7SUFDbEIscUVBQWMsQ0FBQTtJQUVkLGdCQUFnQjtJQUNoQixpRUFBWSxDQUFBO0lBRVosNEJBQTRCO0lBQzVCLCtFQUFtQixDQUFBO0lBRW5CLDRCQUE0QjtJQUM1QiwrRUFBbUIsQ0FBQTtJQUVuQixzQkFBc0I7SUFDdEIsNkVBQWtCLENBQUE7SUFFbEIsY0FBYztJQUNkLDZEQUFVLENBQUE7SUFFVixxQkFBcUI7SUFDckIsNkRBQVUsQ0FBQTtJQUVWLHlCQUF5QjtJQUN6QixxRUFBYyxDQUFBO0FBRWxCLENBQUMsRUE3QlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQTZCNUI7QUFFRCxrRUFBa0U7QUFDbEUsTUFBTSxVQUFVLHFCQUFxQjtJQUNwQyxJQUFJLE1BQU0sR0FBd0MsRUFBRSxDQUFDO0lBR3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLFVBQVUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7SUFFL0csTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtJQUUzRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE0QixpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsbUNBQW1DLENBQUMsQ0FBQyxDQUFBO0lBRXpILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDLENBQUE7SUFFekgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsY0FBYyxFQUFFLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtJQUV2SCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE0QixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFBO0lBRXZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUE7SUFFdkcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsVUFBVSxFQUFFLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtJQUc1RyxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsaUVBQWlFO0FBQ2pFLE1BQU0sVUFBVSxxQkFBcUI7SUFDakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7SUFHckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFdkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUVqRSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFL0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFHcEQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVHVwbGUgfSBmcm9tICcuJztcblxuXG4vLyBCaWxsaW5nU3RhdHVzQ29kZSByZXByZXNlbnRzIGEgZmxpZ2h0IGJpbGxpbmcgc3RhdHVzOiAgLi4uXG5leHBvcnQgZW51bSBCaWxsaW5nU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFVuYXBwcm92ZWQgWzFdIFxuICAgIFVOQVBQUk9WRUQgPSAxLFxuIFxuICAgIC8vIEFwcHJvdmVkIFsyXSBcbiAgICBBUFBST1ZFRCA9IDIsXG4gXG4gICAgLy8gQXV0byBpbnZvaWNlIGNyZWF0ZWQgWzNdIFxuICAgIENSRUFURURfSU5WT0lDRSA9IDMsXG4gXG4gICAgLy8gQXV0byBpbnZvaWNlIHBlbmRpbmcgWzRdIFxuICAgIFBFTkRJTkdfSU5WT0lDRSA9IDQsXG4gXG4gICAgLy8gTWFudWFsIGludm9pY2UgWzVdIFxuICAgIE1BTlVBTF9JTlZPSUNFID0gNSxcbiBcbiAgICAvLyBDbG9zZWQgWzZdIFxuICAgIENMT1NFRCA9IDYsXG4gXG4gICAgLy8gQ3JlZGl0IENsaWVudCBbN10gXG4gICAgQ1JFRElUID0gNyxcbiBcbiAgICAvLyBJcnJlbGV2YW50IHN0YXR1cyBbOF0gXG4gICAgSVJSRUxFVkFOVCA9IDgsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIEJpbGxpbmdTdGF0dXNDb2RlIHZhbHVlcyBhbmQgdGhlaXIgZGlzcGxheSBuYW1lc1xuZXhwb3J0IGZ1bmN0aW9uIEdldEJpbGxpbmdTdGF0dXNDb2RlcygpIDogVHVwbGU8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz5bXSB7XG5cdGxldCByZXN1bHQgOiBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPltdID0gW107XG5cbiAgICBcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+KEJpbGxpbmdTdGF0dXNDb2RlLlVOQVBQUk9WRUQsICdCaWxsaW5nU3RhdHVzQ29kZS5VTkFQUFJPVkVEJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz4oQmlsbGluZ1N0YXR1c0NvZGUuQVBQUk9WRUQsICdCaWxsaW5nU3RhdHVzQ29kZS5BUFBST1ZFRCcpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+KEJpbGxpbmdTdGF0dXNDb2RlLkNSRUFURURfSU5WT0lDRSwgJ0JpbGxpbmdTdGF0dXNDb2RlLkNSRUFURURfSU5WT0lDRScpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+KEJpbGxpbmdTdGF0dXNDb2RlLlBFTkRJTkdfSU5WT0lDRSwgJ0JpbGxpbmdTdGF0dXNDb2RlLlBFTkRJTkdfSU5WT0lDRScpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+KEJpbGxpbmdTdGF0dXNDb2RlLk1BTlVBTF9JTlZPSUNFLCAnQmlsbGluZ1N0YXR1c0NvZGUuTUFOVUFMX0lOVk9JQ0UnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5DTE9TRUQsICdCaWxsaW5nU3RhdHVzQ29kZS5DTE9TRUQnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5DUkVESVQsICdCaWxsaW5nU3RhdHVzQ29kZS5DUkVESVQnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxCaWxsaW5nU3RhdHVzQ29kZSwgc3RyaW5nPihCaWxsaW5nU3RhdHVzQ29kZS5JUlJFTEVWQU5ULCAnQmlsbGluZ1N0YXR1c0NvZGUuSVJSRUxFVkFOVCcpKVxuXHRcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFJldHVybiBtYXAgb2YgQmlsbGluZ1N0YXR1c0NvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gTWFwQmlsbGluZ1N0YXR1c0NvZGVzKCkgOiBNYXA8QmlsbGluZ1N0YXR1c0NvZGUsIHN0cmluZz4ge1xuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPEJpbGxpbmdTdGF0dXNDb2RlLCBzdHJpbmc+KCk7XG5cbiAgICBcblx0cmVzdWx0LnNldChCaWxsaW5nU3RhdHVzQ29kZS5VTkRFRklORUQsICdVbmRlZmluZWQnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuVU5BUFBST1ZFRCwgJ1VuYXBwcm92ZWQnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuQVBQUk9WRUQsICdBcHByb3ZlZCcpO1xuXHRcblx0cmVzdWx0LnNldChCaWxsaW5nU3RhdHVzQ29kZS5DUkVBVEVEX0lOVk9JQ0UsICdDcmVhdGVkIEludm9pY2UnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuUEVORElOR19JTlZPSUNFLCAnUGVuZGluZyBJbnZvaWNlJyk7XG5cdFxuXHRyZXN1bHQuc2V0KEJpbGxpbmdTdGF0dXNDb2RlLk1BTlVBTF9JTlZPSUNFLCAnTWFudWFsIEludm9pY2UnKTtcblx0XG5cdHJlc3VsdC5zZXQoQmlsbGluZ1N0YXR1c0NvZGUuQ0xPU0VELCAnQ2xvc2VkJyk7XG5cdFxuXHRyZXN1bHQuc2V0KEJpbGxpbmdTdGF0dXNDb2RlLkNSRURJVCwgJ0NyZWRpdCcpO1xuXHRcblx0cmVzdWx0LnNldChCaWxsaW5nU3RhdHVzQ29kZS5JUlJFTEVWQU5ULCAnSXJyZWxldmFudCcpO1xuXHRcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iXX0=