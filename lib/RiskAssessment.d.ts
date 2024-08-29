import { DepartureRisks } from '.';
import { DestinationRisks } from '.';
import { TripRisks } from '.';
import { WeatherRisks } from '.';
import { SpecialRisks } from '.';
import { Mitigation } from '.';
import { PilotQualificationsRisks } from '.';
import { CrewDutyDayRisks } from '.';
export declare class RiskAssessment {
    timestamp: number;
    pilotQualifications: PilotQualificationsRisks;
    crewDutyDay: CrewDutyDayRisks;
    departure: DepartureRisks;
    destination: DestinationRisks;
    trip: TripRisks;
    weather: WeatherRisks;
    other: SpecialRisks;
    mitigation: Mitigation;
    constructor(timestamp?: number, pilotQualifications?: PilotQualificationsRisks, crewDutyDay?: CrewDutyDayRisks, departure?: DepartureRisks, destination?: DestinationRisks, trip?: TripRisks, weather?: WeatherRisks, other?: SpecialRisks, mitigation?: Mitigation);
}
