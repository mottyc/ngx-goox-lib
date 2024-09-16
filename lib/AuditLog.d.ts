import { ColumnDef } from '.';
import { UserTypeCode } from '.';
import { BaseEntity } from '.';
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
export declare function GetAuditLogColumnsDef(): ColumnDef[];
