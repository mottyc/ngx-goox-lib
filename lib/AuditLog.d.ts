import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { UserTypeCode } from '.';
export declare class AuditLog extends BaseEntityEx {
    userId: string;
    userType: UserTypeCode;
    action: string;
    itemType: string;
    itemId: string;
    itemName: string;
    beforeChange: string;
    afterChange: string;
    get(field: string): any;
}
export declare function GetAuditLogColumnsDef(): ColumnDef[];
