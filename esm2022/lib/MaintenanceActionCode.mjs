import { Tuple } from '.';
// MaintenanceActionCode represents a maintenance action
export var MaintenanceActionCode;
(function (MaintenanceActionCode) {
    // Undefined [0] 
    MaintenanceActionCode[MaintenanceActionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // No action required [1] 
    MaintenanceActionCode[MaintenanceActionCode["NONE"] = 1] = "NONE";
    // Inspection action [2] 
    MaintenanceActionCode[MaintenanceActionCode["INSPECTION"] = 2] = "INSPECTION";
    // Overhaul action [3] 
    MaintenanceActionCode[MaintenanceActionCode["OVERHAUL"] = 3] = "OVERHAUL";
    // Reissue certificate [4] 
    MaintenanceActionCode[MaintenanceActionCode["REISSUE"] = 4] = "REISSUE";
    // Replace component [5] 
    MaintenanceActionCode[MaintenanceActionCode["REPLACEMENT"] = 5] = "REPLACEMENT";
    // Weight action [6] 
    MaintenanceActionCode[MaintenanceActionCode["WEIGHT"] = 6] = "WEIGHT";
})(MaintenanceActionCode || (MaintenanceActionCode = {}));
// Return list of MaintenanceActionCode values and their display names
export function GetMaintenanceActionCodes() {
    let result = [];
    result.push(new Tuple(MaintenanceActionCode.NONE, 'MaintenanceActionCode.NONE'));
    result.push(new Tuple(MaintenanceActionCode.INSPECTION, 'MaintenanceActionCode.INSPECTION'));
    result.push(new Tuple(MaintenanceActionCode.OVERHAUL, 'MaintenanceActionCode.OVERHAUL'));
    result.push(new Tuple(MaintenanceActionCode.REISSUE, 'MaintenanceActionCode.REISSUE'));
    result.push(new Tuple(MaintenanceActionCode.REPLACEMENT, 'MaintenanceActionCode.REPLACEMENT'));
    result.push(new Tuple(MaintenanceActionCode.WEIGHT, 'MaintenanceActionCode.WEIGHT'));
    return result;
}
// Return map of MaintenanceActionCode values and their display names
export function MapMaintenanceActionCodes() {
    let result = new Map();
    result.set(MaintenanceActionCode.UNDEFINED, 'Undefined');
    result.set(MaintenanceActionCode.NONE, 'None');
    result.set(MaintenanceActionCode.INSPECTION, 'Inspection');
    result.set(MaintenanceActionCode.OVERHAUL, 'Overhaul');
    result.set(MaintenanceActionCode.REISSUE, 'Reissue');
    result.set(MaintenanceActionCode.REPLACEMENT, 'Replacement');
    result.set(MaintenanceActionCode.WEIGHT, 'Weight');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbnRlbmFuY2VBY3Rpb25Db2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvTWFpbnRlbmFuY2VBY3Rpb25Db2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFHMUIsd0RBQXdEO0FBQ3hELE1BQU0sQ0FBTixJQUFZLHFCQXVCWDtBQXZCRCxXQUFZLHFCQUFxQjtJQUU3QixpQkFBaUI7SUFDakIsMkVBQWEsQ0FBQTtJQUViLDBCQUEwQjtJQUMxQixpRUFBUSxDQUFBO0lBRVIseUJBQXlCO0lBQ3pCLDZFQUFjLENBQUE7SUFFZCx1QkFBdUI7SUFDdkIseUVBQVksQ0FBQTtJQUVaLDJCQUEyQjtJQUMzQix1RUFBVyxDQUFBO0lBRVgseUJBQXlCO0lBQ3pCLCtFQUFlLENBQUE7SUFFZixxQkFBcUI7SUFDckIscUVBQVUsQ0FBQTtBQUVkLENBQUMsRUF2QlcscUJBQXFCLEtBQXJCLHFCQUFxQixRQXVCaEM7QUFFRCxzRUFBc0U7QUFDdEUsTUFBTSxVQUFVLHlCQUF5QjtJQUN4QyxJQUFJLE1BQU0sR0FBNEMsRUFBRSxDQUFDO0lBR3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQWdDLHFCQUFxQixDQUFDLElBQUksRUFBRSw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7SUFFL0csTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBZ0MscUJBQXFCLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtJQUUzSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFnQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQyxDQUFBO0lBRXZILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQWdDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSwrQkFBK0IsQ0FBQyxDQUFDLENBQUE7SUFFckgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBZ0MscUJBQXFCLENBQUMsV0FBVyxFQUFFLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtJQUU3SCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFnQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFBO0lBR2hILE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxxRUFBcUU7QUFDckUsTUFBTSxVQUFVLHlCQUF5QjtJQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztJQUd6RCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUV6RCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUvQyxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUUzRCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV2RCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU3RCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUdoRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUdXBsZSB9IGZyb20gJy4nO1xuXG5cbi8vIE1haW50ZW5hbmNlQWN0aW9uQ29kZSByZXByZXNlbnRzIGEgbWFpbnRlbmFuY2UgYWN0aW9uXG5leHBvcnQgZW51bSBNYWludGVuYW5jZUFjdGlvbkNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBObyBhY3Rpb24gcmVxdWlyZWQgWzFdIFxuICAgIE5PTkUgPSAxLFxuIFxuICAgIC8vIEluc3BlY3Rpb24gYWN0aW9uIFsyXSBcbiAgICBJTlNQRUNUSU9OID0gMixcbiBcbiAgICAvLyBPdmVyaGF1bCBhY3Rpb24gWzNdIFxuICAgIE9WRVJIQVVMID0gMyxcbiBcbiAgICAvLyBSZWlzc3VlIGNlcnRpZmljYXRlIFs0XSBcbiAgICBSRUlTU1VFID0gNCxcbiBcbiAgICAvLyBSZXBsYWNlIGNvbXBvbmVudCBbNV0gXG4gICAgUkVQTEFDRU1FTlQgPSA1LFxuIFxuICAgIC8vIFdlaWdodCBhY3Rpb24gWzZdIFxuICAgIFdFSUdIVCA9IDYsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIE1haW50ZW5hbmNlQWN0aW9uQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBHZXRNYWludGVuYW5jZUFjdGlvbkNvZGVzKCkgOiBUdXBsZTxNYWludGVuYW5jZUFjdGlvbkNvZGUsIHN0cmluZz5bXSB7XG5cdGxldCByZXN1bHQgOiBUdXBsZTxNYWludGVuYW5jZUFjdGlvbkNvZGUsIHN0cmluZz5bXSA9IFtdO1xuXG4gICAgXG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxNYWludGVuYW5jZUFjdGlvbkNvZGUsIHN0cmluZz4oTWFpbnRlbmFuY2VBY3Rpb25Db2RlLk5PTkUsICdNYWludGVuYW5jZUFjdGlvbkNvZGUuTk9ORScpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPE1haW50ZW5hbmNlQWN0aW9uQ29kZSwgc3RyaW5nPihNYWludGVuYW5jZUFjdGlvbkNvZGUuSU5TUEVDVElPTiwgJ01haW50ZW5hbmNlQWN0aW9uQ29kZS5JTlNQRUNUSU9OJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8TWFpbnRlbmFuY2VBY3Rpb25Db2RlLCBzdHJpbmc+KE1haW50ZW5hbmNlQWN0aW9uQ29kZS5PVkVSSEFVTCwgJ01haW50ZW5hbmNlQWN0aW9uQ29kZS5PVkVSSEFVTCcpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPE1haW50ZW5hbmNlQWN0aW9uQ29kZSwgc3RyaW5nPihNYWludGVuYW5jZUFjdGlvbkNvZGUuUkVJU1NVRSwgJ01haW50ZW5hbmNlQWN0aW9uQ29kZS5SRUlTU1VFJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8TWFpbnRlbmFuY2VBY3Rpb25Db2RlLCBzdHJpbmc+KE1haW50ZW5hbmNlQWN0aW9uQ29kZS5SRVBMQUNFTUVOVCwgJ01haW50ZW5hbmNlQWN0aW9uQ29kZS5SRVBMQUNFTUVOVCcpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPE1haW50ZW5hbmNlQWN0aW9uQ29kZSwgc3RyaW5nPihNYWludGVuYW5jZUFjdGlvbkNvZGUuV0VJR0hULCAnTWFpbnRlbmFuY2VBY3Rpb25Db2RlLldFSUdIVCcpKVxuXHRcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFJldHVybiBtYXAgb2YgTWFpbnRlbmFuY2VBY3Rpb25Db2RlIHZhbHVlcyBhbmQgdGhlaXIgZGlzcGxheSBuYW1lc1xuZXhwb3J0IGZ1bmN0aW9uIE1hcE1haW50ZW5hbmNlQWN0aW9uQ29kZXMoKSA6IE1hcDxNYWludGVuYW5jZUFjdGlvbkNvZGUsIHN0cmluZz4ge1xuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPE1haW50ZW5hbmNlQWN0aW9uQ29kZSwgc3RyaW5nPigpO1xuXG4gICAgXG5cdHJlc3VsdC5zZXQoTWFpbnRlbmFuY2VBY3Rpb25Db2RlLlVOREVGSU5FRCwgJ1VuZGVmaW5lZCcpO1xuXHRcblx0cmVzdWx0LnNldChNYWludGVuYW5jZUFjdGlvbkNvZGUuTk9ORSwgJ05vbmUnKTtcblx0XG5cdHJlc3VsdC5zZXQoTWFpbnRlbmFuY2VBY3Rpb25Db2RlLklOU1BFQ1RJT04sICdJbnNwZWN0aW9uJyk7XG5cdFxuXHRyZXN1bHQuc2V0KE1haW50ZW5hbmNlQWN0aW9uQ29kZS5PVkVSSEFVTCwgJ092ZXJoYXVsJyk7XG5cdFxuXHRyZXN1bHQuc2V0KE1haW50ZW5hbmNlQWN0aW9uQ29kZS5SRUlTU1VFLCAnUmVpc3N1ZScpO1xuXHRcblx0cmVzdWx0LnNldChNYWludGVuYW5jZUFjdGlvbkNvZGUuUkVQTEFDRU1FTlQsICdSZXBsYWNlbWVudCcpO1xuXHRcblx0cmVzdWx0LnNldChNYWludGVuYW5jZUFjdGlvbkNvZGUuV0VJR0hULCAnV2VpZ2h0Jyk7XG5cdFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==