import { Fuel } from '.';
import { BaseEntity } from '.';
import { AirplaneStatusCode } from '.';
import { AirplaneValidationFlag } from '.';
import { Engine } from '.';
import { Magneto } from '.';
import { Propeller } from '.';
export declare class Airplane extends BaseEntity {
    name: string;
    description: string;
    model: string;
    serialNo: string;
    status: AirplaneStatusCode;
    hobs: number;
    tach: number;
    nextTach: number;
    airTime: number;
    customerNo: string;
    airworthiness: AirplaneValidationFlag;
    fixedValueToFirstFlight: number;
    acTotalTime: number;
    engine: Engine;
    leftMagneto: Magneto;
    rightMagneto: Magneto;
    propeller: Propeller;
    fuel: Fuel;
    documents: string[];
}
