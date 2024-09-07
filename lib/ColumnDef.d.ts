export declare class ColumnDef {
    name: string;
    type: string;
    sort: number;
    filterOp: number;
    filter: number | number[] | string | string[];
    constructor(name?: string, type?: string, sort?: number, filterOp?: number, filter?: number | number[] | string | string[]);
}
