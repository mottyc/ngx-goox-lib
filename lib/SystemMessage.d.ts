import { MessageTypeCode } from '.';
import { PriorityCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class SystemMessage extends BaseEntityEx {
    subject: string;
    description: string;
    type: MessageTypeCode;
    priority: PriorityCode;
    groups: string[];
    get(field: string): any;
}
export declare function GetSystemMessageColumnsDef(): ColumnDef[];
