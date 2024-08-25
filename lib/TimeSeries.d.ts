import { TimeDataPoint } from '.';
import { TimeFrame } from '.';
export declare class TimeSeries<T> {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint<T>[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint<T>[]);
}
