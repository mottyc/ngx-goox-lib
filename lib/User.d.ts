import { UserTypeCode } from '.';
import { UserStatusCode } from '.';
import { BaseEntity } from '.';
import { ColumnDef } from '.';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
}
export declare function GetUserColumnsDef(): ColumnDef[];
