import { TimeFrame } from '.';
import { TimeDataPoint } from '.';
export declare class TimeSeries<T> {
    name: string;
    range: TimeFrame;
    values: TimeDataPoint<T>[];
    constructor(name?: string, range?: TimeFrame, values?: TimeDataPoint<T>[]);
}
