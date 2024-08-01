import { BillingStatusCode } from '.';
export declare class Billing {
    status: BillingStatusCode;
    units: number;
    unitPrice: number;
    description: string;
    totalCharge: number;
    totalChargeWithVat: number;
    constructor(status?: BillingStatusCode, units?: number, unitPrice?: number, description?: string, totalCharge?: number, totalChargeWithVAT?: number);
}
