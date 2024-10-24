import { ColumnDef } from '.';
import { BaseEntityEx } from '.';
export declare class SystemConfig extends BaseEntityEx {
    strVal: string;
    intVal: number;
    get(field: string): any;
}
export declare function GetSystemConfigColumnsDef(): ColumnDef[];
