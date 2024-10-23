import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class Lookup extends BaseEntityEx {
    domain: string;
    key: string;
    group: string;
    value: string;
    get(field: string): any;
}
export declare function GetLookupColumnsDef(): ColumnDef[];
