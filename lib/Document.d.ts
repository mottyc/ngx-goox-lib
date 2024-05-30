import { BaseEntity } from '.';
export declare class Document extends BaseEntity {
    name: string;
    url: string;
    createdBy: string;
    activeFrom: number;
    activeUntil: number;
    category: string;
}
