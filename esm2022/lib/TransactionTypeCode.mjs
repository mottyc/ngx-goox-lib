import { Tuple } from '.';
// TransactionTypeCode represents the credit transaction type
export var TransactionTypeCode;
(function (TransactionTypeCode) {
    // Undefined [0] 
    TransactionTypeCode[TransactionTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Payment for Flight auto charged by the system (Debit) - Auto calculated from flight diary [1] 
    TransactionTypeCode[TransactionTypeCode["FLIGHT"] = 1] = "FLIGHT";
    // Payment for Instruction (Debit) [2] 
    TransactionTypeCode[TransactionTypeCode["INSTRUCTION"] = 2] = "INSTRUCTION";
    // Payment for Purchasing a Product / Service (Debit) [3] 
    TransactionTypeCode[TransactionTypeCode["PURCHASE"] = 3] = "PURCHASE";
    // Credit from client (Credit) [4] 
    TransactionTypeCode[TransactionTypeCode["PAYMENT"] = 4] = "PAYMENT";
    // Bonus added to client (Credit) [5] 
    TransactionTypeCode[TransactionTypeCode["BONUS"] = 5] = "BONUS";
    // Refund for client (Credit) [6] 
    TransactionTypeCode[TransactionTypeCode["REFUND"] = 6] = "REFUND";
})(TransactionTypeCode || (TransactionTypeCode = {}));
// Return list of TransactionTypeCode values and their display names
export function GetTransactionTypeCodes() {
    let result = [];
    result.push(new Tuple(TransactionTypeCode.FLIGHT, 'TransactionTypeCode.FLIGHT'));
    result.push(new Tuple(TransactionTypeCode.INSTRUCTION, 'TransactionTypeCode.INSTRUCTION'));
    result.push(new Tuple(TransactionTypeCode.PURCHASE, 'TransactionTypeCode.PURCHASE'));
    result.push(new Tuple(TransactionTypeCode.PAYMENT, 'TransactionTypeCode.PAYMENT'));
    result.push(new Tuple(TransactionTypeCode.BONUS, 'TransactionTypeCode.BONUS'));
    result.push(new Tuple(TransactionTypeCode.REFUND, 'TransactionTypeCode.REFUND'));
    return result;
}
// Return map of TransactionTypeCode values and their display names
export function MapTransactionTypeCodes() {
    let result = new Map();
    result.set(TransactionTypeCode.UNDEFINED, 'Undefined');
    result.set(TransactionTypeCode.FLIGHT, 'Flight');
    result.set(TransactionTypeCode.INSTRUCTION, 'Instruction');
    result.set(TransactionTypeCode.PURCHASE, 'Purchase');
    result.set(TransactionTypeCode.PAYMENT, 'Payment');
    result.set(TransactionTypeCode.BONUS, 'Bonus');
    result.set(TransactionTypeCode.REFUND, 'Refund');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nb294LWxpYi9zcmMvbGliL1RyYW5zYWN0aW9uVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUcxQiw2REFBNkQ7QUFDN0QsTUFBTSxDQUFOLElBQVksbUJBdUJYO0FBdkJELFdBQVksbUJBQW1CO0lBRTNCLGlCQUFpQjtJQUNqQix1RUFBYSxDQUFBO0lBRWIsaUdBQWlHO0lBQ2pHLGlFQUFVLENBQUE7SUFFVix1Q0FBdUM7SUFDdkMsMkVBQWUsQ0FBQTtJQUVmLDBEQUEwRDtJQUMxRCxxRUFBWSxDQUFBO0lBRVosbUNBQW1DO0lBQ25DLG1FQUFXLENBQUE7SUFFWCxzQ0FBc0M7SUFDdEMsK0RBQVMsQ0FBQTtJQUVULGtDQUFrQztJQUNsQyxpRUFBVSxDQUFBO0FBRWQsQ0FBQyxFQXZCVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBdUI5QjtBQUVELG9FQUFvRTtBQUNwRSxNQUFNLFVBQVUsdUJBQXVCO0lBQ3RDLElBQUksTUFBTSxHQUEwQyxFQUFFLENBQUM7SUFHdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBOEIsbUJBQW1CLENBQUMsTUFBTSxFQUFFLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtJQUU3RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE4QixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO0lBRXZILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQThCLG1CQUFtQixDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7SUFFakgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBOEIsbUJBQW1CLENBQUMsT0FBTyxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQTtJQUUvRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE4QixtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxDQUFBO0lBRTNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQThCLG1CQUFtQixDQUFDLE1BQU0sRUFBRSw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7SUFHMUcsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELG1FQUFtRTtBQUNuRSxNQUFNLFVBQVUsdUJBQXVCO0lBQ25DLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO0lBR3ZELE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXZELE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWpELE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTNELE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXJELE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRW5ELE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRS9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRzlDLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFR1cGxlIH0gZnJvbSAnLic7XG5cblxuLy8gVHJhbnNhY3Rpb25UeXBlQ29kZSByZXByZXNlbnRzIHRoZSBjcmVkaXQgdHJhbnNhY3Rpb24gdHlwZVxuZXhwb3J0IGVudW0gVHJhbnNhY3Rpb25UeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFBheW1lbnQgZm9yIEZsaWdodCBhdXRvIGNoYXJnZWQgYnkgdGhlIHN5c3RlbSAoRGViaXQpIC0gQXV0byBjYWxjdWxhdGVkIGZyb20gZmxpZ2h0IGRpYXJ5IFsxXSBcbiAgICBGTElHSFQgPSAxLFxuIFxuICAgIC8vIFBheW1lbnQgZm9yIEluc3RydWN0aW9uIChEZWJpdCkgWzJdIFxuICAgIElOU1RSVUNUSU9OID0gMixcbiBcbiAgICAvLyBQYXltZW50IGZvciBQdXJjaGFzaW5nIGEgUHJvZHVjdCAvIFNlcnZpY2UgKERlYml0KSBbM10gXG4gICAgUFVSQ0hBU0UgPSAzLFxuIFxuICAgIC8vIENyZWRpdCBmcm9tIGNsaWVudCAoQ3JlZGl0KSBbNF0gXG4gICAgUEFZTUVOVCA9IDQsXG4gXG4gICAgLy8gQm9udXMgYWRkZWQgdG8gY2xpZW50IChDcmVkaXQpIFs1XSBcbiAgICBCT05VUyA9IDUsXG4gXG4gICAgLy8gUmVmdW5kIGZvciBjbGllbnQgKENyZWRpdCkgWzZdIFxuICAgIFJFRlVORCA9IDYsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIFRyYW5zYWN0aW9uVHlwZUNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gR2V0VHJhbnNhY3Rpb25UeXBlQ29kZXMoKSA6IFR1cGxlPFRyYW5zYWN0aW9uVHlwZUNvZGUsIHN0cmluZz5bXSB7XG5cdGxldCByZXN1bHQgOiBUdXBsZTxUcmFuc2FjdGlvblR5cGVDb2RlLCBzdHJpbmc+W10gPSBbXTtcblxuICAgIFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8VHJhbnNhY3Rpb25UeXBlQ29kZSwgc3RyaW5nPihUcmFuc2FjdGlvblR5cGVDb2RlLkZMSUdIVCwgJ1RyYW5zYWN0aW9uVHlwZUNvZGUuRkxJR0hUJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8VHJhbnNhY3Rpb25UeXBlQ29kZSwgc3RyaW5nPihUcmFuc2FjdGlvblR5cGVDb2RlLklOU1RSVUNUSU9OLCAnVHJhbnNhY3Rpb25UeXBlQ29kZS5JTlNUUlVDVElPTicpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPFRyYW5zYWN0aW9uVHlwZUNvZGUsIHN0cmluZz4oVHJhbnNhY3Rpb25UeXBlQ29kZS5QVVJDSEFTRSwgJ1RyYW5zYWN0aW9uVHlwZUNvZGUuUFVSQ0hBU0UnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxUcmFuc2FjdGlvblR5cGVDb2RlLCBzdHJpbmc+KFRyYW5zYWN0aW9uVHlwZUNvZGUuUEFZTUVOVCwgJ1RyYW5zYWN0aW9uVHlwZUNvZGUuUEFZTUVOVCcpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPFRyYW5zYWN0aW9uVHlwZUNvZGUsIHN0cmluZz4oVHJhbnNhY3Rpb25UeXBlQ29kZS5CT05VUywgJ1RyYW5zYWN0aW9uVHlwZUNvZGUuQk9OVVMnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxUcmFuc2FjdGlvblR5cGVDb2RlLCBzdHJpbmc+KFRyYW5zYWN0aW9uVHlwZUNvZGUuUkVGVU5ELCAnVHJhbnNhY3Rpb25UeXBlQ29kZS5SRUZVTkQnKSlcblx0XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBSZXR1cm4gbWFwIG9mIFRyYW5zYWN0aW9uVHlwZUNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gTWFwVHJhbnNhY3Rpb25UeXBlQ29kZXMoKSA6IE1hcDxUcmFuc2FjdGlvblR5cGVDb2RlLCBzdHJpbmc+IHtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1hcDxUcmFuc2FjdGlvblR5cGVDb2RlLCBzdHJpbmc+KCk7XG5cbiAgICBcblx0cmVzdWx0LnNldChUcmFuc2FjdGlvblR5cGVDb2RlLlVOREVGSU5FRCwgJ1VuZGVmaW5lZCcpO1xuXHRcblx0cmVzdWx0LnNldChUcmFuc2FjdGlvblR5cGVDb2RlLkZMSUdIVCwgJ0ZsaWdodCcpO1xuXHRcblx0cmVzdWx0LnNldChUcmFuc2FjdGlvblR5cGVDb2RlLklOU1RSVUNUSU9OLCAnSW5zdHJ1Y3Rpb24nKTtcblx0XG5cdHJlc3VsdC5zZXQoVHJhbnNhY3Rpb25UeXBlQ29kZS5QVVJDSEFTRSwgJ1B1cmNoYXNlJyk7XG5cdFxuXHRyZXN1bHQuc2V0KFRyYW5zYWN0aW9uVHlwZUNvZGUuUEFZTUVOVCwgJ1BheW1lbnQnKTtcblx0XG5cdHJlc3VsdC5zZXQoVHJhbnNhY3Rpb25UeXBlQ29kZS5CT05VUywgJ0JvbnVzJyk7XG5cdFxuXHRyZXN1bHQuc2V0KFRyYW5zYWN0aW9uVHlwZUNvZGUuUkVGVU5ELCAnUmVmdW5kJyk7XG5cdFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==