import { Tuple } from '.';
// PaymentMethodCode represents a payment method:  CASH | CHECK | BANK TRANSFER | CREDIT ...
export var PaymentMethodCode;
(function (PaymentMethodCode) {
    // Undefined [0] 
    PaymentMethodCode[PaymentMethodCode["UNDEFINED"] = 0] = "UNDEFINED";
    // None paid [1] 
    PaymentMethodCode[PaymentMethodCode["NONE"] = 1] = "NONE";
    // Credit client balance [2] 
    PaymentMethodCode[PaymentMethodCode["CREDIT_CLIENT"] = 2] = "CREDIT_CLIENT";
    // Paid with credit card [3] 
    PaymentMethodCode[PaymentMethodCode["CARD"] = 3] = "CARD";
    // Paid with check [4] 
    PaymentMethodCode[PaymentMethodCode["CHECK"] = 4] = "CHECK";
    // Paid with cash [5] 
    PaymentMethodCode[PaymentMethodCode["CASH"] = 5] = "CASH";
    // Paid with bank transfer [6] 
    PaymentMethodCode[PaymentMethodCode["BANK"] = 6] = "BANK";
})(PaymentMethodCode || (PaymentMethodCode = {}));
// Return list of PaymentMethodCode values and their display names
export function GetPaymentMethodCodes() {
    let result = [];
    result.push(new Tuple(PaymentMethodCode.NONE, 'PaymentMethodCode.NONE'));
    result.push(new Tuple(PaymentMethodCode.CREDIT_CLIENT, 'PaymentMethodCode.CREDIT_CLIENT'));
    result.push(new Tuple(PaymentMethodCode.CARD, 'PaymentMethodCode.CARD'));
    result.push(new Tuple(PaymentMethodCode.CHECK, 'PaymentMethodCode.CHECK'));
    result.push(new Tuple(PaymentMethodCode.CASH, 'PaymentMethodCode.CASH'));
    result.push(new Tuple(PaymentMethodCode.BANK, 'PaymentMethodCode.BANK'));
    return result;
}
// Return map of PaymentMethodCode values and their display names
export function MapPaymentMethodCodes() {
    let result = new Map();
    result.set(PaymentMethodCode.UNDEFINED, 'Undefined');
    result.set(PaymentMethodCode.NONE, 'None');
    result.set(PaymentMethodCode.CREDIT_CLIENT, 'Credit Client');
    result.set(PaymentMethodCode.CARD, 'Card');
    result.set(PaymentMethodCode.CHECK, 'Check');
    result.set(PaymentMethodCode.CASH, 'Cash');
    result.set(PaymentMethodCode.BANK, 'Bank');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudE1ldGhvZENvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ29veC1saWIvc3JjL2xpYi9QYXltZW50TWV0aG9kQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBRzFCLDRGQUE0RjtBQUM1RixNQUFNLENBQU4sSUFBWSxpQkF1Qlg7QUF2QkQsV0FBWSxpQkFBaUI7SUFFekIsaUJBQWlCO0lBQ2pCLG1FQUFhLENBQUE7SUFFYixpQkFBaUI7SUFDakIseURBQVEsQ0FBQTtJQUVSLDZCQUE2QjtJQUM3QiwyRUFBaUIsQ0FBQTtJQUVqQiw2QkFBNkI7SUFDN0IseURBQVEsQ0FBQTtJQUVSLHVCQUF1QjtJQUN2QiwyREFBUyxDQUFBO0lBRVQsc0JBQXNCO0lBQ3RCLHlEQUFRLENBQUE7SUFFUiwrQkFBK0I7SUFDL0IseURBQVEsQ0FBQTtBQUVaLENBQUMsRUF2QlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQXVCNUI7QUFFRCxrRUFBa0U7QUFDbEUsTUFBTSxVQUFVLHFCQUFxQjtJQUNwQyxJQUFJLE1BQU0sR0FBd0MsRUFBRSxDQUFDO0lBR3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLElBQUksRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7SUFFbkcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsYUFBYSxFQUFFLGlDQUFpQyxDQUFDLENBQUMsQ0FBQTtJQUVySCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE0QixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO0lBRW5HLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQTRCLGlCQUFpQixDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDLENBQUE7SUFFckcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBNEIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtJQUVuRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUE0QixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO0lBR2hHLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxpRUFBaUU7QUFDakUsTUFBTSxVQUFVLHFCQUFxQjtJQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztJQUdyRCxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUzQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUU3RCxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUzQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUzQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUd4QyxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUdXBsZSB9IGZyb20gJy4nO1xuXG5cbi8vIFBheW1lbnRNZXRob2RDb2RlIHJlcHJlc2VudHMgYSBwYXltZW50IG1ldGhvZDogIENBU0ggfCBDSEVDSyB8IEJBTksgVFJBTlNGRVIgfCBDUkVESVQgLi4uXG5leHBvcnQgZW51bSBQYXltZW50TWV0aG9kQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIE5vbmUgcGFpZCBbMV0gXG4gICAgTk9ORSA9IDEsXG4gXG4gICAgLy8gQ3JlZGl0IGNsaWVudCBiYWxhbmNlIFsyXSBcbiAgICBDUkVESVRfQ0xJRU5UID0gMixcbiBcbiAgICAvLyBQYWlkIHdpdGggY3JlZGl0IGNhcmQgWzNdIFxuICAgIENBUkQgPSAzLFxuIFxuICAgIC8vIFBhaWQgd2l0aCBjaGVjayBbNF0gXG4gICAgQ0hFQ0sgPSA0LFxuIFxuICAgIC8vIFBhaWQgd2l0aCBjYXNoIFs1XSBcbiAgICBDQVNIID0gNSxcbiBcbiAgICAvLyBQYWlkIHdpdGggYmFuayB0cmFuc2ZlciBbNl0gXG4gICAgQkFOSyA9IDYsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIFBheW1lbnRNZXRob2RDb2RlIHZhbHVlcyBhbmQgdGhlaXIgZGlzcGxheSBuYW1lc1xuZXhwb3J0IGZ1bmN0aW9uIEdldFBheW1lbnRNZXRob2RDb2RlcygpIDogVHVwbGU8UGF5bWVudE1ldGhvZENvZGUsIHN0cmluZz5bXSB7XG5cdGxldCByZXN1bHQgOiBUdXBsZTxQYXltZW50TWV0aG9kQ29kZSwgc3RyaW5nPltdID0gW107XG5cbiAgICBcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPFBheW1lbnRNZXRob2RDb2RlLCBzdHJpbmc+KFBheW1lbnRNZXRob2RDb2RlLk5PTkUsICdQYXltZW50TWV0aG9kQ29kZS5OT05FJykpXG5cdFxuXHRyZXN1bHQucHVzaChuZXcgVHVwbGU8UGF5bWVudE1ldGhvZENvZGUsIHN0cmluZz4oUGF5bWVudE1ldGhvZENvZGUuQ1JFRElUX0NMSUVOVCwgJ1BheW1lbnRNZXRob2RDb2RlLkNSRURJVF9DTElFTlQnKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxQYXltZW50TWV0aG9kQ29kZSwgc3RyaW5nPihQYXltZW50TWV0aG9kQ29kZS5DQVJELCAnUGF5bWVudE1ldGhvZENvZGUuQ0FSRCcpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPFBheW1lbnRNZXRob2RDb2RlLCBzdHJpbmc+KFBheW1lbnRNZXRob2RDb2RlLkNIRUNLLCAnUGF5bWVudE1ldGhvZENvZGUuQ0hFQ0snKSlcblx0XG5cdHJlc3VsdC5wdXNoKG5ldyBUdXBsZTxQYXltZW50TWV0aG9kQ29kZSwgc3RyaW5nPihQYXltZW50TWV0aG9kQ29kZS5DQVNILCAnUGF5bWVudE1ldGhvZENvZGUuQ0FTSCcpKVxuXHRcblx0cmVzdWx0LnB1c2gobmV3IFR1cGxlPFBheW1lbnRNZXRob2RDb2RlLCBzdHJpbmc+KFBheW1lbnRNZXRob2RDb2RlLkJBTkssICdQYXltZW50TWV0aG9kQ29kZS5CQU5LJykpXG5cdFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUmV0dXJuIG1hcCBvZiBQYXltZW50TWV0aG9kQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBNYXBQYXltZW50TWV0aG9kQ29kZXMoKSA6IE1hcDxQYXltZW50TWV0aG9kQ29kZSwgc3RyaW5nPiB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXA8UGF5bWVudE1ldGhvZENvZGUsIHN0cmluZz4oKTtcblxuICAgIFxuXHRyZXN1bHQuc2V0KFBheW1lbnRNZXRob2RDb2RlLlVOREVGSU5FRCwgJ1VuZGVmaW5lZCcpO1xuXHRcblx0cmVzdWx0LnNldChQYXltZW50TWV0aG9kQ29kZS5OT05FLCAnTm9uZScpO1xuXHRcblx0cmVzdWx0LnNldChQYXltZW50TWV0aG9kQ29kZS5DUkVESVRfQ0xJRU5ULCAnQ3JlZGl0IENsaWVudCcpO1xuXHRcblx0cmVzdWx0LnNldChQYXltZW50TWV0aG9kQ29kZS5DQVJELCAnQ2FyZCcpO1xuXHRcblx0cmVzdWx0LnNldChQYXltZW50TWV0aG9kQ29kZS5DSEVDSywgJ0NoZWNrJyk7XG5cdFxuXHRyZXN1bHQuc2V0KFBheW1lbnRNZXRob2RDb2RlLkNBU0gsICdDYXNoJyk7XG5cdFxuXHRyZXN1bHQuc2V0KFBheW1lbnRNZXRob2RDb2RlLkJBTkssICdCYW5rJyk7XG5cdFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==