import { BaseEntity } from '.';
import { ColumnDef } from '.';
import { DocumentRevision } from '.';
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
export declare function GetDocumentColumnsDef(): ColumnDef[];
