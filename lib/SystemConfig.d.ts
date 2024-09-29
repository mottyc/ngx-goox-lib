import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class SystemConfig extends BaseEntityEx {
    strVal: string;
    intVal: number;
}
export declare function GetSystemConfigColumnsDef(): ColumnDef[];
