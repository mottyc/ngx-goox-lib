import { StatusCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class Certificate extends BaseEntityEx {
    name: string;
    description: string;
    contactId: string;
    documentId: string;
    validUntil: number;
    status: StatusCode;
    notifyAt: number;
    subject: string;
    message: string;
    prop(field: string): any;
}
export declare function GetCertificateColumnsDef(): ColumnDef[];
