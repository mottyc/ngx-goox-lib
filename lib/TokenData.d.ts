import { UserStatusCode } from '.';
import { UserTypeCode } from '.';
export declare class TokenData {
    subjectId: string;
    subjectType: UserTypeCode;
    status: UserStatusCode;
    expiresIn: number;
    constructor(subjectId?: string, subjectType?: UserTypeCode, status?: UserStatusCode, expiresIn?: number);
}
