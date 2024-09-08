export declare class ColumnDef {
    name: string;
    type: string;
    format: string;
    sort: number;
    filterOp: number;
    filter: number | number[] | string | string[];
    constructor(name?: string, type?: string, format?: string, sort?: number, filterOp?: number, filter?: number | number[] | string | string[]);
}
