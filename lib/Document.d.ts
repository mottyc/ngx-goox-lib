import { ColumnDef } from '.';
import { DocumentRevision } from '.';
import { BaseEntityEx } from '.';
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
    prop(field: string): any;
}
export declare function GetDocumentColumnsDef(): ColumnDef[];
