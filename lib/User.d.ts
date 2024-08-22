import { BaseEntity } from '.';
import { UserTypeCode } from '.';
import { UserStatusCode } from '.';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
}
