import { BaseEntity } from '.';
import { StatusCode } from '.';
export declare class Certificate extends BaseEntity {
    name: string;
    description: string;
    contactId: string;
    documentId: string;
    validUntil: number;
    status: StatusCode;
    notifyAt: number;
    subject: string;
    message: string;
}
