import { DocumentRevision } from '.';
import { BaseEntity } from '.';
export declare class Document extends BaseEntity {
    name: string;
    description: string;
    createdBy: string;
    activeFrom: number;
    activeUntil: number;
    category: string;
    revisions: DocumentRevision[];
    activeRevision: string;
    activeUrl: string;
    activeMimeType: string;
}
