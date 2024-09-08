import { BaseEntity } from '.';
import { ColumnDef } from '.';
export declare class SystemConfig extends BaseEntity {
    strVal: string;
    intVal: number;
}
export declare function GetSystemConfigColumnsDef(): ColumnDef[];
