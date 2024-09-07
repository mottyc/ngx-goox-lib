import { BillingStatusCode } from '.';
import { BillingRecord } from '.';
export declare class Billing {
    status: BillingStatusCode;
    invoiceRecords: BillingRecord[];
    invoiceDate: number;
    discountPercentage: number;
    totalBeforeVat: number;
    totalAfterVat: number;
    totalAfterDiscount: number;
    pilotPayment: number;
    pilotPaymentStatus: string;
    firstOfficerPayment: number;
    firstOfficerPaymentStatus: string;
    constructor(status?: BillingStatusCode, invoiceRecords?: BillingRecord[], invoiceDate?: number, discountPercentage?: number, totalBeforeVAT?: number, totalAfterVAT?: number, totalAfterDiscount?: number, pilotPayment?: number, pilotPaymentStatus?: string, firstOfficerPayment?: number, firstOfficerPaymentStatus?: string);
}
