/// <reference path="Contact.ngtypecheck.d.ts" />
import { AccountStatusCode } from '.';
import { Address } from '.';
import { ValidationFlag } from '.';
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
    groups: string[];
    idNumber: string;
    startToFlyDate: number;
    authorizedToFlyBy: string;
    authorizedPhotographyBy: string;
    pilotLicense: string;
    licenseTypes: string[];
    licenseGroup: string;
    medicalCertClass: string;
    validations: ValidationFlag;
    isPilot: boolean;
}