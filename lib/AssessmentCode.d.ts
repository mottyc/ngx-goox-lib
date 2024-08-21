import { Tuple } from '.';
export declare enum AssessmentCode {
    UNDEFINED = 0,
    EXCELLENT = 1,
    SATISFACTORY = 2,
    BELOW_AVERAGE = 3,
    UNSATISFACTORY = 4,
    INCOMPLETE = 5,
    REPEAT = 6,
    DEMO = 7
}
export declare function GetAssessmentCodes(): Tuple<AssessmentCode, string>[];
export declare function MapAssessmentCodes(): Map<AssessmentCode, string>;
