import { ColumnDef } from '.';
import { BaseEntity } from '.';
export declare class SystemConfig extends BaseEntity {
    strVal: string;
    intVal: number;
}
export declare function GetSystemConfigColumnsDef(): ColumnDef[];
