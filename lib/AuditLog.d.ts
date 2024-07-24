import { BaseEntity } from '.';
import { UserTypeCode } from '.';
export declare class AuditLog extends BaseEntity {
    userId: string;
    userType: UserTypeCode;
    action: string;
    itemType: string;
    itemId: string;
    itemName: string;
    beforeChange: string;
    afterChange: string;
}
