import { AssessmentCode } from '.';
export declare class Lesson {
    number: number;
    subject: string;
    assessment: AssessmentCode;
    comments: string;
    flightCounter: number;
    instructedFlightTime: number;
    instrumentsFlightTime: number;
    soloFlightTime: number;
    constructor(number?: number, subject?: string, assessment?: AssessmentCode, comments?: string, flightCounter?: number, instructedFlightTime?: number, instrumentsFlightTime?: number, soloFlightTime?: number);
}
