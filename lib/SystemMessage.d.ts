/// <reference path="SystemMessage.ngtypecheck.d.ts" />
import { MessageTypeCode } from '.';
import { PriorityCode } from '.';
import { BaseEntity } from '.';
export declare class SystemMessage extends BaseEntity {
    subject: string;
    description: string;
    type: MessageTypeCode;
    priority: PriorityCode;
    groups: string[];
}
