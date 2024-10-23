import { Lookup } from '.';
import { BaseEntity } from '.';
import { ColumnDef } from '.';
export declare class LookupGroup extends BaseEntity {
    group: string;
    value: Lookup[];
}
export declare function GetLookupGroupColumnsDef(): ColumnDef[];
