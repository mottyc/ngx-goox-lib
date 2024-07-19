/// <reference path="User.ngtypecheck.d.ts" />
import { UserTypeCode } from '.';
import { UserStatusCode } from '.';
import { BaseEntity } from '.';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
}
