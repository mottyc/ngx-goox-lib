import { UserStatusCode } from '.';
import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { UserTypeCode } from '.';
export declare class User extends BaseEntityEx {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    get(field: string): any;
}
export declare function GetUserColumnsDef(): ColumnDef[];
