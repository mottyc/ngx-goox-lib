import { PriorityCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { MessageTypeCode } from '.';
export declare class SystemMessage extends BaseEntityEx {
    subject: string;
    description: string;
    type: MessageTypeCode;
    priority: PriorityCode;
    groups: string[];
    prop(field: string): any;
}
export declare function GetSystemMessageColumnsDef(): ColumnDef[];
