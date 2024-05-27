import { AccountStatusCode } from '.';
import { Address } from '.';
import { BaseEntity } from '.';
export declare class Contact extends BaseEntity {
    firstName: string;
    lastName: string;
    description: string;
    title: string;
    birthDay: number;
    status: AccountStatusCode;
    phone: string;
    fax: string;
    mobile: string;
    primaryAddress: Address;
    singleEngineHours: number;
    dualEngineHours: number;
    totalFlightHours: number;
    enableCredit: boolean;
    currentCredit: number;
    percentageDiscount: number;
    groups: string[];
    idNumber: string;
    startToFlyDate: number;
    pilotLicense: string;
    licenseTypes: string[];
    licenseGroup: string;
    medicalCertClass: string;
}
