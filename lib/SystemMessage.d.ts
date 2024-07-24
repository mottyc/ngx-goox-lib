import { PriorityCode } from '.';
import { BaseEntity } from '.';
import { MessageTypeCode } from '.';
export declare class SystemMessage extends BaseEntity {
    subject: string;
    description: string;
    type: MessageTypeCode;
    priority: PriorityCode;
    groups: string[];
}
