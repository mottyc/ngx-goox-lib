import { MaintenanceActionCode } from '.';
import { BaseEntity } from '.';
import { ColumnDef } from '.';
import { StatusCode } from '.';
export declare class Maintenance extends BaseEntity {
    name: string;
    description: string;
    airplaneId: string;
    documentId: string;
    hobs: number;
    nextHobs: number;
    tach: number;
    nextTach: number;
    validUntil: number;
    status: StatusCode;
    component: string;
    action: MaintenanceActionCode;
    notifyAt: number;
    subject: string;
    message: string;
}
export declare function GetMaintenanceColumnsDef(): ColumnDef[];
