export declare class ColumnDef {
    icon: string;
    name: string;
    type: string;
    format: string;
    sort: number;
    filterOp: number;
    filter: number | number[] | string | string[];
    constructor(icon?: string, name?: string, type?: string, format?: string, sort?: number, filterOp?: number, filter?: number | number[] | string | string[]);
}
