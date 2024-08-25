import { MessageTypeCode } from '.';
import { PriorityCode } from '.';
import { BaseEntity } from '.';
import { ConfirmStatusCode } from '.';
export declare class MessageConfirm extends BaseEntity {
    messageId: string;
    contactId: string;
    replyStatus: ConfirmStatusCode;
    replyOn: number;
    replyUrl: string;
    subject: string;
    description: string;
    type: MessageTypeCode;
    priority: PriorityCode;
}
