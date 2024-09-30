import { DocumentRevision } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class Document extends BaseEntityEx {
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
