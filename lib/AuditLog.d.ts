import { UserTypeCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
export declare class AuditLog extends BaseEntityEx {
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
