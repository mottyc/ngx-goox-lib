import { MessageTypeCode } from '.';
import { PriorityCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { ConfirmStatusCode } from '.';
export declare class MessageConfirm extends BaseEntityEx {
    messageId: string;
    contactId: string;
    replyStatus: ConfirmStatusCode;
    replyOn: number;
    replyUrl: string;
    subject: string;
    description: string;
    type: MessageTypeCode;
    priority: PriorityCode;
    prop(field: string): any;
}
export declare function GetMessageConfirmColumnsDef(): ColumnDef[];
