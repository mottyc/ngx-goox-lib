import { BaseEntityEx } from '.';
import { ColumnDef } from '.';
import { StatusCode } from '.';
import { MaintenanceActionCode } from '.';
export declare class Maintenance extends BaseEntityEx {
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
    get(field: string): any;
}
export declare function GetMaintenanceColumnsDef(): ColumnDef[];
