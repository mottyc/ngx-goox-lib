export declare class Billing {
    status: number;
    units: number;
    unitPrice: number;
    description: string;
    totalCharge: number;
    totalChargeWithVat: number;
    constructor(status?: number, units?: number, unitPrice?: number, description?: string, totalCharge?: number, totalChargeWithVAT?: number);
}
