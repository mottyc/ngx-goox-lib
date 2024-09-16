import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpRequest, HttpClientModule } from '@angular/common/http';

class TimeFrame {
    constructor(from, to) {
        if (from !== undefined) {
            this.from = from;
        }
        if (to !== undefined) {
            this.to = to;
        }
    }
}

// TimeDataPoint model represents a generic datapoint in time
class TimeDataPoint {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// TimeSeries is a set of data points over time
class TimeSeries {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}

// Base class for all entities
class BaseEntity {
    constructor(id, createdOn, updatedOn) {
        if (id !== undefined) {
            this.id = id;
        }
        if (createdOn !== undefined) {
            this.createdOn = createdOn;
        }
        if (updatedOn !== undefined) {
            this.updatedOn = updatedOn;
        }
    }
}

// Tuple is a generic key-value pair
class Tuple {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

class ColumnDef {
    constructor(name, type, format, sort, filterOp, filter) {
        if (name !== undefined) {
            this.name = name;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (format !== undefined) {
            this.format = format;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (filterOp !== undefined) {
            this.filterOp = filterOp;
        }
        if (filter !== undefined) {
            this.filter = filter;
        }
    }
}

// AccountStatusCode represents the account status: ACTIVE | INACTIVE | BLOCKED ...
var AccountStatusCode;
(function (AccountStatusCode) {
    // Undefined [0] 
    AccountStatusCode[AccountStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Active account in the system [1] 
    AccountStatusCode[AccountStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Inactive account in the system [2] 
    AccountStatusCode[AccountStatusCode["INACTIVE"] = 2] = "INACTIVE";
    // Blocked account [3] 
    AccountStatusCode[AccountStatusCode["BLOCKED"] = 3] = "BLOCKED";
    // Suspended account (about to be deleted) [4] 
    AccountStatusCode[AccountStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(AccountStatusCode || (AccountStatusCode = {}));
// Return list of AccountStatusCode values and their display names
function GetAccountStatusCodes() {
    let result = [];
    result.push(new Tuple(AccountStatusCode.ACTIVE, 'AccountStatusCode.ACTIVE'));
    result.push(new Tuple(AccountStatusCode.INACTIVE, 'AccountStatusCode.INACTIVE'));
    result.push(new Tuple(AccountStatusCode.BLOCKED, 'AccountStatusCode.BLOCKED'));
    result.push(new Tuple(AccountStatusCode.SUSPENDED, 'AccountStatusCode.SUSPENDED'));
    return result;
}
// Return map of AccountStatusCode values and their display names
function MapAccountStatusCodes() {
    let result = new Map();
    result.set(AccountStatusCode.UNDEFINED, 'Undefined');
    result.set(AccountStatusCode.ACTIVE, 'Active');
    result.set(AccountStatusCode.INACTIVE, 'Inactive');
    result.set(AccountStatusCode.BLOCKED, 'Blocked');
    result.set(AccountStatusCode.SUSPENDED, 'Suspended');
    return result;
}

// CampaignTypeCode represents the campaign type: WEB | EMAIL | TELESALES
var CampaignTypeCode;
(function (CampaignTypeCode) {
    // Undefined [0] 
    CampaignTypeCode[CampaignTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Web [1] 
    CampaignTypeCode[CampaignTypeCode["WEB"] = 1] = "WEB";
    // Mail [2] 
    CampaignTypeCode[CampaignTypeCode["EMAIL"] = 2] = "EMAIL";
    // Telephone Sales [3] 
    CampaignTypeCode[CampaignTypeCode["TELESALES"] = 3] = "TELESALES";
})(CampaignTypeCode || (CampaignTypeCode = {}));
// Return list of CampaignTypeCode values and their display names
function GetCampaignTypeCodes() {
    let result = [];
    result.push(new Tuple(CampaignTypeCode.WEB, 'CampaignTypeCode.WEB'));
    result.push(new Tuple(CampaignTypeCode.EMAIL, 'CampaignTypeCode.EMAIL'));
    result.push(new Tuple(CampaignTypeCode.TELESALES, 'CampaignTypeCode.TELESALES'));
    return result;
}
// Return map of CampaignTypeCode values and their display names
function MapCampaignTypeCodes() {
    let result = new Map();
    result.set(CampaignTypeCode.UNDEFINED, 'Undefined');
    result.set(CampaignTypeCode.WEB, 'Web');
    result.set(CampaignTypeCode.EMAIL, 'Email');
    result.set(CampaignTypeCode.TELESALES, 'Telesales');
    return result;
}

// FlightPurposeCode represents a flight purpose:  GENERAL | PRIVATE | COMMERCIAL ...
var FlightPurposeCode;
(function (FlightPurposeCode) {
    // Undefined [0] 
    FlightPurposeCode[FlightPurposeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Introductory Flight [1] 
    FlightPurposeCode[FlightPurposeCode["INTRODUCTORY"] = 1] = "INTRODUCTORY";
    // Flight Lesson [2] 
    FlightPurposeCode[FlightPurposeCode["FLIGHT_LESSON"] = 2] = "FLIGHT_LESSON";
    // Airplane Rental Flight [3] 
    FlightPurposeCode[FlightPurposeCode["RENTAL"] = 3] = "RENTAL";
    // Private Flight [4] 
    FlightPurposeCode[FlightPurposeCode["PRIVATE"] = 4] = "PRIVATE";
    // Vertical Photographic [5] 
    FlightPurposeCode[FlightPurposeCode["VERTICAL_PHOTO"] = 5] = "VERTICAL_PHOTO";
    // Diagonal Photographic [6] 
    FlightPurposeCode[FlightPurposeCode["DIAGONAL_PHOTO"] = 6] = "DIAGONAL_PHOTO";
    // Round Flight [7] 
    FlightPurposeCode[FlightPurposeCode["ROUND"] = 7] = "ROUND";
    // Initial / Recurrent CAA Test [8] 
    FlightPurposeCode[FlightPurposeCode["CAA_TEST"] = 8] = "CAA_TEST";
    // Transfer Flight (to transfer airplane) [9] 
    FlightPurposeCode[FlightPurposeCode["TRANSFER"] = 9] = "TRANSFER";
    // Commercial air taxi to transfer passengers [10] 
    FlightPurposeCode[FlightPurposeCode["AIR_TAXI"] = 10] = "AIR_TAXI";
    // Engine Running [11] 
    FlightPurposeCode[FlightPurposeCode["ENGINE_RUNNING"] = 11] = "ENGINE_RUNNING";
    // Other purpose (elaborate on next field) [12] 
    FlightPurposeCode[FlightPurposeCode["OTHER"] = 12] = "OTHER";
})(FlightPurposeCode || (FlightPurposeCode = {}));
// Return list of FlightPurposeCode values and their display names
function GetFlightPurposeCodes() {
    let result = [];
    result.push(new Tuple(FlightPurposeCode.INTRODUCTORY, 'FlightPurposeCode.INTRODUCTORY'));
    result.push(new Tuple(FlightPurposeCode.FLIGHT_LESSON, 'FlightPurposeCode.FLIGHT_LESSON'));
    result.push(new Tuple(FlightPurposeCode.RENTAL, 'FlightPurposeCode.RENTAL'));
    result.push(new Tuple(FlightPurposeCode.PRIVATE, 'FlightPurposeCode.PRIVATE'));
    result.push(new Tuple(FlightPurposeCode.VERTICAL_PHOTO, 'FlightPurposeCode.VERTICAL_PHOTO'));
    result.push(new Tuple(FlightPurposeCode.DIAGONAL_PHOTO, 'FlightPurposeCode.DIAGONAL_PHOTO'));
    result.push(new Tuple(FlightPurposeCode.ROUND, 'FlightPurposeCode.ROUND'));
    result.push(new Tuple(FlightPurposeCode.CAA_TEST, 'FlightPurposeCode.CAA_TEST'));
    result.push(new Tuple(FlightPurposeCode.TRANSFER, 'FlightPurposeCode.TRANSFER'));
    result.push(new Tuple(FlightPurposeCode.AIR_TAXI, 'FlightPurposeCode.AIR_TAXI'));
    result.push(new Tuple(FlightPurposeCode.ENGINE_RUNNING, 'FlightPurposeCode.ENGINE_RUNNING'));
    result.push(new Tuple(FlightPurposeCode.OTHER, 'FlightPurposeCode.OTHER'));
    return result;
}
// Return map of FlightPurposeCode values and their display names
function MapFlightPurposeCodes() {
    let result = new Map();
    result.set(FlightPurposeCode.UNDEFINED, 'Undefined');
    result.set(FlightPurposeCode.INTRODUCTORY, 'Introductory');
    result.set(FlightPurposeCode.FLIGHT_LESSON, 'Flight Lesson');
    result.set(FlightPurposeCode.RENTAL, 'Rental');
    result.set(FlightPurposeCode.PRIVATE, 'Private');
    result.set(FlightPurposeCode.VERTICAL_PHOTO, 'Vertical Photo');
    result.set(FlightPurposeCode.DIAGONAL_PHOTO, 'Diagonal Photo');
    result.set(FlightPurposeCode.ROUND, 'Round');
    result.set(FlightPurposeCode.CAA_TEST, 'Caa Test');
    result.set(FlightPurposeCode.TRANSFER, 'Transfer');
    result.set(FlightPurposeCode.AIR_TAXI, 'Air Taxi');
    result.set(FlightPurposeCode.ENGINE_RUNNING, 'Engine Running');
    result.set(FlightPurposeCode.OTHER, 'Other');
    return result;
}

// FlightStateCode represents a flight state which can't be modified manually: PENDING | ACTIVE | COMPLETED  ...
var FlightStateCode;
(function (FlightStateCode) {
    // Undefined [0] 
    FlightStateCode[FlightStateCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Pending (Not started) [1] 
    FlightStateCode[FlightStateCode["PENDING"] = 1] = "PENDING";
    // Active (on flight) [2] 
    FlightStateCode[FlightStateCode["ACTIVE"] = 2] = "ACTIVE";
    // Completed [3] 
    FlightStateCode[FlightStateCode["COMPLETED"] = 3] = "COMPLETED";
})(FlightStateCode || (FlightStateCode = {}));
// Return list of FlightStateCode values and their display names
function GetFlightStateCodes() {
    let result = [];
    result.push(new Tuple(FlightStateCode.PENDING, 'FlightStateCode.PENDING'));
    result.push(new Tuple(FlightStateCode.ACTIVE, 'FlightStateCode.ACTIVE'));
    result.push(new Tuple(FlightStateCode.COMPLETED, 'FlightStateCode.COMPLETED'));
    return result;
}
// Return map of FlightStateCode values and their display names
function MapFlightStateCodes() {
    let result = new Map();
    result.set(FlightStateCode.UNDEFINED, 'Undefined');
    result.set(FlightStateCode.PENDING, 'Pending');
    result.set(FlightStateCode.ACTIVE, 'Active');
    result.set(FlightStateCode.COMPLETED, 'Completed');
    return result;
}

// FlightStatusCode represents a flight status can be changed by the operator:  ...
var FlightStatusCode;
(function (FlightStatusCode) {
    // Undefined [0] 
    FlightStatusCode[FlightStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Registered flight [1] 
    FlightStatusCode[FlightStatusCode["REGISTERED"] = 1] = "REGISTERED";
    // Pending deletion [2] 
    FlightStatusCode[FlightStatusCode["DELETE"] = 2] = "DELETE";
    // Cancelled by Aya [3] 
    FlightStatusCode[FlightStatusCode["CANCELLED"] = 3] = "CANCELLED";
    // Aborted - cancelled by client [4] 
    FlightStatusCode[FlightStatusCode["ABORTED"] = 4] = "ABORTED";
})(FlightStatusCode || (FlightStatusCode = {}));
// Return list of FlightStatusCode values and their display names
function GetFlightStatusCodes() {
    let result = [];
    result.push(new Tuple(FlightStatusCode.REGISTERED, 'FlightStatusCode.REGISTERED'));
    result.push(new Tuple(FlightStatusCode.DELETE, 'FlightStatusCode.DELETE'));
    result.push(new Tuple(FlightStatusCode.CANCELLED, 'FlightStatusCode.CANCELLED'));
    result.push(new Tuple(FlightStatusCode.ABORTED, 'FlightStatusCode.ABORTED'));
    return result;
}
// Return map of FlightStatusCode values and their display names
function MapFlightStatusCodes() {
    let result = new Map();
    result.set(FlightStatusCode.UNDEFINED, 'Undefined');
    result.set(FlightStatusCode.REGISTERED, 'Registered');
    result.set(FlightStatusCode.DELETE, 'Delete');
    result.set(FlightStatusCode.CANCELLED, 'Cancelled');
    result.set(FlightStatusCode.ABORTED, 'Aborted');
    return result;
}

// AirplaneValidationFlag represents combination of airplane validations
var AirplaneValidationFlag;
(function (AirplaneValidationFlag) {
    // Undefined [0] 
    AirplaneValidationFlag[AirplaneValidationFlag["UNDEFINED"] = 0] = "UNDEFINED";
    // Valid airworthiness (isairplanevalidairworthiness_c) [1] 
    AirplaneValidationFlag[AirplaneValidationFlag["AIRWORTHINESS"] = 1] = "AIRWORTHINESS";
    // Valid airplane insurance (isairplanevalidinsurance_c)  [2] 
    AirplaneValidationFlag[AirplaneValidationFlag["INSURANCE"] = 2] = "INSURANCE";
    // Valid flight manual (isairplanevalidflightmanual_c) [4] 
    AirplaneValidationFlag[AirplaneValidationFlag["FLIGHT_MANUAL"] = 4] = "FLIGHT_MANUAL";
    // Valid radio station license (isairplanevalidradiostation_c) [8] 
    AirplaneValidationFlag[AirplaneValidationFlag["RADIO_STATION"] = 8] = "RADIO_STATION";
    // Certification Of Registration (isairplanevalidcertofregis_c)[16] 
    AirplaneValidationFlag[AirplaneValidationFlag["REGISTRATION_CERT"] = 16] = "REGISTRATION_CERT";
    // Valid first-aid kit (isairplanevalidfirstaidkit_c) [32] 
    AirplaneValidationFlag[AirplaneValidationFlag["FIRST_AID_KIT"] = 32] = "FIRST_AID_KIT";
    // Valid fire extinguisher (isairplanevalidfireextinguis_c) [64] 
    AirplaneValidationFlag[AirplaneValidationFlag["FIRE_EXTINGUISHER"] = 64] = "FIRE_EXTINGUISHER";
    // Valid operation spec (isairplanevalidoperationspec_c) [128] 
    AirplaneValidationFlag[AirplaneValidationFlag["OPERATION_SPEC"] = 128] = "OPERATION_SPEC";
    // Valid 337 certificate for camera hole (isairplanevalid337cameraho_c) [256] 
    AirplaneValidationFlag[AirplaneValidationFlag["VALID_337_CAMERA"] = 256] = "VALID_337_CAMERA";
    // Valid 337 certificate for exhaust (isairplanevalid337exhaust_c) [512] 
    AirplaneValidationFlag[AirplaneValidationFlag["VALID_337_EXHAUST"] = 512] = "VALID_337_EXHAUST";
    // Valid stc camera hole (isairplanevalidstccameraho_c) [1024] 
    AirplaneValidationFlag[AirplaneValidationFlag["VALID_STC_CAMERA"] = 1024] = "VALID_STC_CAMERA";
    // Valid stc certificate for exhaust (isairplanevalidstcexhaust_c) [2048] 
    AirplaneValidationFlag[AirplaneValidationFlag["VALID_STC_EXHAUST"] = 2048] = "VALID_STC_EXHAUST";
    // Valid flight logbook (isairplanevalidflightlogboo_c) [4096] 
    AirplaneValidationFlag[AirplaneValidationFlag["FLIGHT_LOGBOOK"] = 4096] = "FLIGHT_LOGBOOK";
    // Valid air operator certificate AOC (isairplanevalidairoperatorce_c) [8192] 
    AirplaneValidationFlag[AirplaneValidationFlag["AIR_OPERATOR"] = 8192] = "AIR_OPERATOR";
    // Aircraft weight certificate (isairplanevalidaircraftweigh_c) [16384] 
    AirplaneValidationFlag[AirplaneValidationFlag["AIRCRAFT_WEIGHT"] = 16384] = "AIRCRAFT_WEIGHT";
    // Valid propeller overhaul (isairplanevalidpropellerover_c) [32768] 
    AirplaneValidationFlag[AirplaneValidationFlag["PROPELLER_OVERHAUL"] = 32768] = "PROPELLER_OVERHAUL";
    // Single engine overhaul (isairplanevalidsingleengineo_c) [65536] 
    AirplaneValidationFlag[AirplaneValidationFlag["SINGLE_ENGINE_OVERHAUL"] = 65536] = "SINGLE_ENGINE_OVERHAUL";
    // Left engine overhaul (isairplanevalidleftengineove_c) [131072] 
    AirplaneValidationFlag[AirplaneValidationFlag["LEFT_ENGINE_OVERHAUL"] = 131072] = "LEFT_ENGINE_OVERHAUL";
    // Right engine overhaul (isairplanevalidrightengineov_c) [262144] 
    AirplaneValidationFlag[AirplaneValidationFlag["RIGHT_ENGINE_OVERHAUL"] = 262144] = "RIGHT_ENGINE_OVERHAUL";
    // Left engine propeller overhaul (isairplanevalidleftenginepro_c) [524288] 
    AirplaneValidationFlag[AirplaneValidationFlag["LEFT_PROPELLER_OVERHAUL"] = 524288] = "LEFT_PROPELLER_OVERHAUL";
    // Right engine propeller overhaul (isairplanevalidrightenginepr_c) [1048576] 
    AirplaneValidationFlag[AirplaneValidationFlag["RIGHT_PROPELLER_OVERHAUL"] = 1048576] = "RIGHT_PROPELLER_OVERHAUL";
    // CVFR_ATS aeronautical maps (isairplanevalidcvfr_atsaeron_c) [2097152] 
    AirplaneValidationFlag[AirplaneValidationFlag["CVFR_ATS"] = 2097152] = "CVFR_ATS";
    // Weight and Balance Form (isairplanevalidweightandbaln_c) [4194304] 
    AirplaneValidationFlag[AirplaneValidationFlag["WEIGHT_BALANCE_FORM"] = 4194304] = "WEIGHT_BALANCE_FORM";
    // Airplane checklist (isairplanevalidairplanechec_c) [8388608] 
    AirplaneValidationFlag[AirplaneValidationFlag["CHECK_LIST"] = 8388608] = "CHECK_LIST";
    // Noise Certificate (isairplanevalidnoisecertifi_c) [16777216] 
    AirplaneValidationFlag[AirplaneValidationFlag["NOISE_CERT"] = 16777216] = "NOISE_CERT";
})(AirplaneValidationFlag || (AirplaneValidationFlag = {}));
// Return list of AirplaneValidationFlag values and their display names
function GetAirplaneValidationFlags() {
    let result = [];
    result.push(new Tuple(AirplaneValidationFlag.AIRWORTHINESS, 'AirplaneValidationFlag.AIRWORTHINESS'));
    result.push(new Tuple(AirplaneValidationFlag.INSURANCE, 'AirplaneValidationFlag.INSURANCE'));
    result.push(new Tuple(AirplaneValidationFlag.FLIGHT_MANUAL, 'AirplaneValidationFlag.FLIGHT_MANUAL'));
    result.push(new Tuple(AirplaneValidationFlag.RADIO_STATION, 'AirplaneValidationFlag.RADIO_STATION'));
    result.push(new Tuple(AirplaneValidationFlag.REGISTRATION_CERT, 'AirplaneValidationFlag.REGISTRATION_CERT'));
    result.push(new Tuple(AirplaneValidationFlag.FIRST_AID_KIT, 'AirplaneValidationFlag.FIRST_AID_KIT'));
    result.push(new Tuple(AirplaneValidationFlag.FIRE_EXTINGUISHER, 'AirplaneValidationFlag.FIRE_EXTINGUISHER'));
    result.push(new Tuple(AirplaneValidationFlag.OPERATION_SPEC, 'AirplaneValidationFlag.OPERATION_SPEC'));
    result.push(new Tuple(AirplaneValidationFlag.VALID_337_CAMERA, 'AirplaneValidationFlag.VALID_337_CAMERA'));
    result.push(new Tuple(AirplaneValidationFlag.VALID_337_EXHAUST, 'AirplaneValidationFlag.VALID_337_EXHAUST'));
    result.push(new Tuple(AirplaneValidationFlag.VALID_STC_CAMERA, 'AirplaneValidationFlag.VALID_STC_CAMERA'));
    result.push(new Tuple(AirplaneValidationFlag.VALID_STC_EXHAUST, 'AirplaneValidationFlag.VALID_STC_EXHAUST'));
    result.push(new Tuple(AirplaneValidationFlag.FLIGHT_LOGBOOK, 'AirplaneValidationFlag.FLIGHT_LOGBOOK'));
    result.push(new Tuple(AirplaneValidationFlag.AIR_OPERATOR, 'AirplaneValidationFlag.AIR_OPERATOR'));
    result.push(new Tuple(AirplaneValidationFlag.AIRCRAFT_WEIGHT, 'AirplaneValidationFlag.AIRCRAFT_WEIGHT'));
    result.push(new Tuple(AirplaneValidationFlag.PROPELLER_OVERHAUL, 'AirplaneValidationFlag.PROPELLER_OVERHAUL'));
    result.push(new Tuple(AirplaneValidationFlag.SINGLE_ENGINE_OVERHAUL, 'AirplaneValidationFlag.SINGLE_ENGINE_OVERHAUL'));
    result.push(new Tuple(AirplaneValidationFlag.LEFT_ENGINE_OVERHAUL, 'AirplaneValidationFlag.LEFT_ENGINE_OVERHAUL'));
    result.push(new Tuple(AirplaneValidationFlag.RIGHT_ENGINE_OVERHAUL, 'AirplaneValidationFlag.RIGHT_ENGINE_OVERHAUL'));
    result.push(new Tuple(AirplaneValidationFlag.LEFT_PROPELLER_OVERHAUL, 'AirplaneValidationFlag.LEFT_PROPELLER_OVERHAUL'));
    result.push(new Tuple(AirplaneValidationFlag.RIGHT_PROPELLER_OVERHAUL, 'AirplaneValidationFlag.RIGHT_PROPELLER_OVERHAUL'));
    result.push(new Tuple(AirplaneValidationFlag.CVFR_ATS, 'AirplaneValidationFlag.CVFR_ATS'));
    result.push(new Tuple(AirplaneValidationFlag.WEIGHT_BALANCE_FORM, 'AirplaneValidationFlag.WEIGHT_BALANCE_FORM'));
    result.push(new Tuple(AirplaneValidationFlag.CHECK_LIST, 'AirplaneValidationFlag.CHECK_LIST'));
    result.push(new Tuple(AirplaneValidationFlag.NOISE_CERT, 'AirplaneValidationFlag.NOISE_CERT'));
    return result;
}
// Return map of AirplaneValidationFlag values and their display names
function MapAirplaneValidationFlags() {
    let result = new Map();
    result.set(AirplaneValidationFlag.UNDEFINED, 'Undefined');
    result.set(AirplaneValidationFlag.AIRWORTHINESS, 'Airworthiness');
    result.set(AirplaneValidationFlag.INSURANCE, 'Insurance');
    result.set(AirplaneValidationFlag.FLIGHT_MANUAL, 'Flight Manual');
    result.set(AirplaneValidationFlag.RADIO_STATION, 'Radio Station');
    result.set(AirplaneValidationFlag.REGISTRATION_CERT, 'Registration Cert');
    result.set(AirplaneValidationFlag.FIRST_AID_KIT, 'First Aid Kit');
    result.set(AirplaneValidationFlag.FIRE_EXTINGUISHER, 'Fire Extinguisher');
    result.set(AirplaneValidationFlag.OPERATION_SPEC, 'Operation Spec');
    result.set(AirplaneValidationFlag.VALID_337_CAMERA, 'Valid 337 Camera');
    result.set(AirplaneValidationFlag.VALID_337_EXHAUST, 'Valid 337 Exhaust');
    result.set(AirplaneValidationFlag.VALID_STC_CAMERA, 'Valid Stc Camera');
    result.set(AirplaneValidationFlag.VALID_STC_EXHAUST, 'Valid Stc Exhaust');
    result.set(AirplaneValidationFlag.FLIGHT_LOGBOOK, 'Flight Logbook');
    result.set(AirplaneValidationFlag.AIR_OPERATOR, 'Air Operator');
    result.set(AirplaneValidationFlag.AIRCRAFT_WEIGHT, 'Aircraft Weight');
    result.set(AirplaneValidationFlag.PROPELLER_OVERHAUL, 'Propeller Overhaul');
    result.set(AirplaneValidationFlag.SINGLE_ENGINE_OVERHAUL, 'Single Engine Overhaul');
    result.set(AirplaneValidationFlag.LEFT_ENGINE_OVERHAUL, 'Left Engine Overhaul');
    result.set(AirplaneValidationFlag.RIGHT_ENGINE_OVERHAUL, 'Right Engine Overhaul');
    result.set(AirplaneValidationFlag.LEFT_PROPELLER_OVERHAUL, 'Left Propeller Overhaul');
    result.set(AirplaneValidationFlag.RIGHT_PROPELLER_OVERHAUL, 'Right Propeller Overhaul');
    result.set(AirplaneValidationFlag.CVFR_ATS, 'Cvfr Ats');
    result.set(AirplaneValidationFlag.WEIGHT_BALANCE_FORM, 'Weight Balance Form');
    result.set(AirplaneValidationFlag.CHECK_LIST, 'Check List');
    result.set(AirplaneValidationFlag.NOISE_CERT, 'Noise Cert');
    return result;
}

// MessageTypeCode represents the message type: ALERT | INFO | POLICY
var MessageTypeCode;
(function (MessageTypeCode) {
    // Undefined [0] 
    MessageTypeCode[MessageTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Company information [1] 
    MessageTypeCode[MessageTypeCode["INFO"] = 1] = "INFO";
    // Memorandum [2] 
    MessageTypeCode[MessageTypeCode["MEMO"] = 2] = "MEMO";
    // Distribution and Reissue procedures [3] 
    MessageTypeCode[MessageTypeCode["EXTERNAL_PROCEDURE"] = 3] = "EXTERNAL_PROCEDURE";
    // Internal procedures [4] 
    MessageTypeCode[MessageTypeCode["INTERNAL_PROCEDURE"] = 4] = "INTERNAL_PROCEDURE";
    // Incident_OR_Hazard Report_Low_Human_Mitigation required [5] 
    MessageTypeCode[MessageTypeCode["INCIDENT"] = 5] = "INCIDENT";
    // Policy and Procedural Changes [6] 
    MessageTypeCode[MessageTypeCode["POLICY"] = 6] = "POLICY";
    // Repair Stations Audit_IANR_OPS 344_2 [7] 
    MessageTypeCode[MessageTypeCode["REPAIR"] = 7] = "REPAIR";
})(MessageTypeCode || (MessageTypeCode = {}));
// Return list of MessageTypeCode values and their display names
function GetMessageTypeCodes() {
    let result = [];
    result.push(new Tuple(MessageTypeCode.INFO, 'MessageTypeCode.INFO'));
    result.push(new Tuple(MessageTypeCode.MEMO, 'MessageTypeCode.MEMO'));
    result.push(new Tuple(MessageTypeCode.EXTERNAL_PROCEDURE, 'MessageTypeCode.EXTERNAL_PROCEDURE'));
    result.push(new Tuple(MessageTypeCode.INTERNAL_PROCEDURE, 'MessageTypeCode.INTERNAL_PROCEDURE'));
    result.push(new Tuple(MessageTypeCode.INCIDENT, 'MessageTypeCode.INCIDENT'));
    result.push(new Tuple(MessageTypeCode.POLICY, 'MessageTypeCode.POLICY'));
    result.push(new Tuple(MessageTypeCode.REPAIR, 'MessageTypeCode.REPAIR'));
    return result;
}
// Return map of MessageTypeCode values and their display names
function MapMessageTypeCodes() {
    let result = new Map();
    result.set(MessageTypeCode.UNDEFINED, 'Undefined');
    result.set(MessageTypeCode.INFO, 'Info');
    result.set(MessageTypeCode.MEMO, 'Memo');
    result.set(MessageTypeCode.EXTERNAL_PROCEDURE, 'External Procedure');
    result.set(MessageTypeCode.INTERNAL_PROCEDURE, 'Internal Procedure');
    result.set(MessageTypeCode.INCIDENT, 'Incident');
    result.set(MessageTypeCode.POLICY, 'Policy');
    result.set(MessageTypeCode.REPAIR, 'Repair');
    return result;
}

// OperatorCode represents a math operator
var OperatorCode;
(function (OperatorCode) {
})(OperatorCode || (OperatorCode = {}));
// Return list of OperatorCode values and their display names
function GetOperatorCodes() {
    let result = [];
    return result;
}
// Return map of OperatorCode values and their display names
function MapOperatorCodes() {
    let result = new Map();
    return result;
}

// ValidationFlag represents combination of validations
var ValidationFlag;
(function (ValidationFlag) {
    // Undefined [0] 
    ValidationFlag[ValidationFlag["UNDEFINED"] = 0] = "UNDEFINED";
    // Valid medical certificate  [1] 
    ValidationFlag[ValidationFlag["MEDICAL_CERT"] = 1] = "MEDICAL_CERT";
    // Valid pilot license [2] 
    ValidationFlag[ValidationFlag["PILOT_LICENSE"] = 2] = "PILOT_LICENSE";
    // Single Engine Certificate [4] 
    ValidationFlag[ValidationFlag["SINGLE_ENG_CERT"] = 4] = "SINGLE_ENG_CERT";
    // Dual Engine Certificate [8] 
    ValidationFlag[ValidationFlag["DUAL_ENG_CERT"] = 8] = "DUAL_ENG_CERT";
    // 666 Instruments Certificate [16] 
    ValidationFlag[ValidationFlag["INST_666_CERT"] = 16] = "INST_666_CERT";
    // REC Instruments Certificate [32] 
    ValidationFlag[ValidationFlag["INST_REC_CERT"] = 32] = "INST_REC_CERT";
    // Day time fly [64] 
    ValidationFlag[ValidationFlag["DAYTIME_FLY"] = 64] = "DAYTIME_FLY";
    // Nighttime fly [128] 
    ValidationFlag[ValidationFlag["NIGHTTIME_FLY"] = 128] = "NIGHTTIME_FLY";
    // Night CVFR [256] 
    ValidationFlag[ValidationFlag["NIGHT_CVFR_CUR"] = 256] = "NIGHT_CVFR_CUR";
    // Route exam [512] 
    ValidationFlag[ValidationFlag["ROUTE_EXAM"] = 512] = "ROUTE_EXAM";
    // DI Certificate [1024] 
    ValidationFlag[ValidationFlag["DI_CERT"] = 1024] = "DI_CERT";
    // International [2048] 
    ValidationFlag[ValidationFlag["INTERNATIONAL"] = 2048] = "INTERNATIONAL";
    // English Proficiency [4096] 
    ValidationFlag[ValidationFlag["ENGLISH_PROF"] = 4096] = "ENGLISH_PROF";
    // Instructor license [8192] 
    ValidationFlag[ValidationFlag["INSTRUCTOR_LICENSE"] = 8192] = "INSTRUCTOR_LICENSE";
    // Company check ? [16384] 
    ValidationFlag[ValidationFlag["COMPANY_CHECK"] = 16384] = "COMPANY_CHECK";
    // Company Examiner ? [32768] 
    ValidationFlag[ValidationFlag["COMPANY_EXAMIN"] = 32768] = "COMPANY_EXAMIN";
    // Commercial 172p [65536] 
    ValidationFlag[ValidationFlag["COMMERCIAL_172P"] = 65536] = "COMMERCIAL_172P";
    // Commercial 172xp [131072] 
    ValidationFlag[ValidationFlag["COMMERCIAL_172XP"] = 131072] = "COMMERCIAL_172XP";
    // Commercial 172xp [262144] 
    ValidationFlag[ValidationFlag["COMMERCIAL_207"] = 262144] = "COMMERCIAL_207";
})(ValidationFlag || (ValidationFlag = {}));
// Return list of ValidationFlag values and their display names
function GetValidationFlags() {
    let result = [];
    result.push(new Tuple(ValidationFlag.MEDICAL_CERT, 'ValidationFlag.MEDICAL_CERT'));
    result.push(new Tuple(ValidationFlag.PILOT_LICENSE, 'ValidationFlag.PILOT_LICENSE'));
    result.push(new Tuple(ValidationFlag.SINGLE_ENG_CERT, 'ValidationFlag.SINGLE_ENG_CERT'));
    result.push(new Tuple(ValidationFlag.DUAL_ENG_CERT, 'ValidationFlag.DUAL_ENG_CERT'));
    result.push(new Tuple(ValidationFlag.INST_666_CERT, 'ValidationFlag.INST_666_CERT'));
    result.push(new Tuple(ValidationFlag.INST_REC_CERT, 'ValidationFlag.INST_REC_CERT'));
    result.push(new Tuple(ValidationFlag.DAYTIME_FLY, 'ValidationFlag.DAYTIME_FLY'));
    result.push(new Tuple(ValidationFlag.NIGHTTIME_FLY, 'ValidationFlag.NIGHTTIME_FLY'));
    result.push(new Tuple(ValidationFlag.NIGHT_CVFR_CUR, 'ValidationFlag.NIGHT_CVFR_CUR'));
    result.push(new Tuple(ValidationFlag.ROUTE_EXAM, 'ValidationFlag.ROUTE_EXAM'));
    result.push(new Tuple(ValidationFlag.DI_CERT, 'ValidationFlag.DI_CERT'));
    result.push(new Tuple(ValidationFlag.INTERNATIONAL, 'ValidationFlag.INTERNATIONAL'));
    result.push(new Tuple(ValidationFlag.ENGLISH_PROF, 'ValidationFlag.ENGLISH_PROF'));
    result.push(new Tuple(ValidationFlag.INSTRUCTOR_LICENSE, 'ValidationFlag.INSTRUCTOR_LICENSE'));
    result.push(new Tuple(ValidationFlag.COMPANY_CHECK, 'ValidationFlag.COMPANY_CHECK'));
    result.push(new Tuple(ValidationFlag.COMPANY_EXAMIN, 'ValidationFlag.COMPANY_EXAMIN'));
    result.push(new Tuple(ValidationFlag.COMMERCIAL_172P, 'ValidationFlag.COMMERCIAL_172P'));
    result.push(new Tuple(ValidationFlag.COMMERCIAL_172XP, 'ValidationFlag.COMMERCIAL_172XP'));
    result.push(new Tuple(ValidationFlag.COMMERCIAL_207, 'ValidationFlag.COMMERCIAL_207'));
    return result;
}
// Return map of ValidationFlag values and their display names
function MapValidationFlags() {
    let result = new Map();
    result.set(ValidationFlag.UNDEFINED, 'Undefined');
    result.set(ValidationFlag.MEDICAL_CERT, 'Medical Cert');
    result.set(ValidationFlag.PILOT_LICENSE, 'Pilot License');
    result.set(ValidationFlag.SINGLE_ENG_CERT, 'Single Eng Cert');
    result.set(ValidationFlag.DUAL_ENG_CERT, 'Dual Eng Cert');
    result.set(ValidationFlag.INST_666_CERT, 'Inst 666 Cert');
    result.set(ValidationFlag.INST_REC_CERT, 'Inst Rec Cert');
    result.set(ValidationFlag.DAYTIME_FLY, 'Daytime Fly');
    result.set(ValidationFlag.NIGHTTIME_FLY, 'Nighttime Fly');
    result.set(ValidationFlag.NIGHT_CVFR_CUR, 'Night Cvfr Cur');
    result.set(ValidationFlag.ROUTE_EXAM, 'Route Exam');
    result.set(ValidationFlag.DI_CERT, 'Di Cert');
    result.set(ValidationFlag.INTERNATIONAL, 'International');
    result.set(ValidationFlag.ENGLISH_PROF, 'English Prof');
    result.set(ValidationFlag.INSTRUCTOR_LICENSE, 'Instructor License');
    result.set(ValidationFlag.COMPANY_CHECK, 'Company Check');
    result.set(ValidationFlag.COMPANY_EXAMIN, 'Company Examin');
    result.set(ValidationFlag.COMMERCIAL_172P, 'Commercial 172p');
    result.set(ValidationFlag.COMMERCIAL_172XP, 'Commercial 172xp');
    result.set(ValidationFlag.COMMERCIAL_207, 'Commercial 207');
    return result;
}

// AssessmentCode represents the assessment score: EXCELLENT | SATISFACTORY | INCOMPLETE ...
var AssessmentCode;
(function (AssessmentCode) {
    // Undefined [0] 
    AssessmentCode[AssessmentCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Excellent [1] 
    AssessmentCode[AssessmentCode["EXCELLENT"] = 1] = "EXCELLENT";
    // Satisfactory [2] 
    AssessmentCode[AssessmentCode["SATISFACTORY"] = 2] = "SATISFACTORY";
    // Below Average [3] 
    AssessmentCode[AssessmentCode["BELOW_AVERAGE"] = 3] = "BELOW_AVERAGE";
    // Unsatisfactory [4] 
    AssessmentCode[AssessmentCode["UNSATISFACTORY"] = 4] = "UNSATISFACTORY";
    // Incomplete [5] 
    AssessmentCode[AssessmentCode["INCOMPLETE"] = 5] = "INCOMPLETE";
    // Repeat exercise is required [6] 
    AssessmentCode[AssessmentCode["REPEAT"] = 6] = "REPEAT";
    // Demonstration only [7] 
    AssessmentCode[AssessmentCode["DEMO"] = 7] = "DEMO";
})(AssessmentCode || (AssessmentCode = {}));
// Return list of AssessmentCode values and their display names
function GetAssessmentCodes() {
    let result = [];
    result.push(new Tuple(AssessmentCode.EXCELLENT, 'AssessmentCode.EXCELLENT'));
    result.push(new Tuple(AssessmentCode.SATISFACTORY, 'AssessmentCode.SATISFACTORY'));
    result.push(new Tuple(AssessmentCode.BELOW_AVERAGE, 'AssessmentCode.BELOW_AVERAGE'));
    result.push(new Tuple(AssessmentCode.UNSATISFACTORY, 'AssessmentCode.UNSATISFACTORY'));
    result.push(new Tuple(AssessmentCode.INCOMPLETE, 'AssessmentCode.INCOMPLETE'));
    result.push(new Tuple(AssessmentCode.REPEAT, 'AssessmentCode.REPEAT'));
    result.push(new Tuple(AssessmentCode.DEMO, 'AssessmentCode.DEMO'));
    return result;
}
// Return map of AssessmentCode values and their display names
function MapAssessmentCodes() {
    let result = new Map();
    result.set(AssessmentCode.UNDEFINED, 'Undefined');
    result.set(AssessmentCode.EXCELLENT, 'Excellent');
    result.set(AssessmentCode.SATISFACTORY, 'Satisfactory');
    result.set(AssessmentCode.BELOW_AVERAGE, 'Below Average');
    result.set(AssessmentCode.UNSATISFACTORY, 'Unsatisfactory');
    result.set(AssessmentCode.INCOMPLETE, 'Incomplete');
    result.set(AssessmentCode.REPEAT, 'Repeat');
    result.set(AssessmentCode.DEMO, 'Demo');
    return result;
}

// PaymentMethodCode represents a payment method:  CASH | CHECK | BANK TRANSFER | CREDIT ...
var PaymentMethodCode;
(function (PaymentMethodCode) {
    // Undefined [0] 
    PaymentMethodCode[PaymentMethodCode["UNDEFINED"] = 0] = "UNDEFINED";
    // None paid [1] 
    PaymentMethodCode[PaymentMethodCode["NONE"] = 1] = "NONE";
    // Credit client balance [2] 
    PaymentMethodCode[PaymentMethodCode["CREDIT_CLIENT"] = 2] = "CREDIT_CLIENT";
    // Paid with credit card [3] 
    PaymentMethodCode[PaymentMethodCode["CARD"] = 3] = "CARD";
    // Paid with check [4] 
    PaymentMethodCode[PaymentMethodCode["CHECK"] = 4] = "CHECK";
    // Paid with cash [5] 
    PaymentMethodCode[PaymentMethodCode["CASH"] = 5] = "CASH";
    // Paid with bank transfer [6] 
    PaymentMethodCode[PaymentMethodCode["BANK"] = 6] = "BANK";
})(PaymentMethodCode || (PaymentMethodCode = {}));
// Return list of PaymentMethodCode values and their display names
function GetPaymentMethodCodes() {
    let result = [];
    result.push(new Tuple(PaymentMethodCode.NONE, 'PaymentMethodCode.NONE'));
    result.push(new Tuple(PaymentMethodCode.CREDIT_CLIENT, 'PaymentMethodCode.CREDIT_CLIENT'));
    result.push(new Tuple(PaymentMethodCode.CARD, 'PaymentMethodCode.CARD'));
    result.push(new Tuple(PaymentMethodCode.CHECK, 'PaymentMethodCode.CHECK'));
    result.push(new Tuple(PaymentMethodCode.CASH, 'PaymentMethodCode.CASH'));
    result.push(new Tuple(PaymentMethodCode.BANK, 'PaymentMethodCode.BANK'));
    return result;
}
// Return map of PaymentMethodCode values and their display names
function MapPaymentMethodCodes() {
    let result = new Map();
    result.set(PaymentMethodCode.UNDEFINED, 'Undefined');
    result.set(PaymentMethodCode.NONE, 'None');
    result.set(PaymentMethodCode.CREDIT_CLIENT, 'Credit Client');
    result.set(PaymentMethodCode.CARD, 'Card');
    result.set(PaymentMethodCode.CHECK, 'Check');
    result.set(PaymentMethodCode.CASH, 'Cash');
    result.set(PaymentMethodCode.BANK, 'Bank');
    return result;
}

// PriorityCode represents a priority: LOW | MEDIUM | HIGH
var PriorityCode;
(function (PriorityCode) {
    // Undefined [0] 
    PriorityCode[PriorityCode["UNDEFINED"] = 0] = "UNDEFINED";
    // No priority [1] 
    PriorityCode[PriorityCode["NONE"] = 1] = "NONE";
    // Low priority [2] 
    PriorityCode[PriorityCode["LOW"] = 2] = "LOW";
    // Medium priority [3] 
    PriorityCode[PriorityCode["MEDIUM"] = 3] = "MEDIUM";
    // High priority [4] 
    PriorityCode[PriorityCode["HIGH"] = 4] = "HIGH";
})(PriorityCode || (PriorityCode = {}));
// Return list of PriorityCode values and their display names
function GetPriorityCodes() {
    let result = [];
    result.push(new Tuple(PriorityCode.NONE, 'PriorityCode.NONE'));
    result.push(new Tuple(PriorityCode.LOW, 'PriorityCode.LOW'));
    result.push(new Tuple(PriorityCode.MEDIUM, 'PriorityCode.MEDIUM'));
    result.push(new Tuple(PriorityCode.HIGH, 'PriorityCode.HIGH'));
    return result;
}
// Return map of PriorityCode values and their display names
function MapPriorityCodes() {
    let result = new Map();
    result.set(PriorityCode.UNDEFINED, 'Undefined');
    result.set(PriorityCode.NONE, 'None');
    result.set(PriorityCode.LOW, 'Low');
    result.set(PriorityCode.MEDIUM, 'Medium');
    result.set(PriorityCode.HIGH, 'High');
    return result;
}

// StatusCode represents a general workflow status: PENDING | IN_PROGRESS | DONE ...
var StatusCode;
(function (StatusCode) {
    // Undefined [0] 
    StatusCode[StatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Flow not started yet [1] 
    StatusCode[StatusCode["PENDING"] = 1] = "PENDING";
    // Flow in process [2] 
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    // Flow completed [3] 
    StatusCode[StatusCode["COMPLETED"] = 3] = "COMPLETED";
    // Flow cancelled by user [4] 
    StatusCode[StatusCode["CANCELLED"] = 4] = "CANCELLED";
    // Flow automatically cancelled by the system [5] 
    StatusCode[StatusCode["AUTO_CANCELLED"] = 5] = "AUTO_CANCELLED";
})(StatusCode || (StatusCode = {}));
// Return list of StatusCode values and their display names
function GetStatusCodes() {
    let result = [];
    result.push(new Tuple(StatusCode.PENDING, 'StatusCode.PENDING'));
    result.push(new Tuple(StatusCode.IN_PROCESS, 'StatusCode.IN_PROCESS'));
    result.push(new Tuple(StatusCode.COMPLETED, 'StatusCode.COMPLETED'));
    result.push(new Tuple(StatusCode.CANCELLED, 'StatusCode.CANCELLED'));
    result.push(new Tuple(StatusCode.AUTO_CANCELLED, 'StatusCode.AUTO_CANCELLED'));
    return result;
}
// Return map of StatusCode values and their display names
function MapStatusCodes() {
    let result = new Map();
    result.set(StatusCode.UNDEFINED, 'Undefined');
    result.set(StatusCode.PENDING, 'Pending');
    result.set(StatusCode.IN_PROCESS, 'In Process');
    result.set(StatusCode.COMPLETED, 'Completed');
    result.set(StatusCode.CANCELLED, 'Cancelled');
    result.set(StatusCode.AUTO_CANCELLED, 'Auto Cancelled');
    return result;
}

// TransactionTypeCode represents the credit transaction type
var TransactionTypeCode;
(function (TransactionTypeCode) {
    // Undefined [0] 
    TransactionTypeCode[TransactionTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Payment for Flight auto charged by the system (Debit) - Auto calculated from flight diary [1] 
    TransactionTypeCode[TransactionTypeCode["FLIGHT"] = 1] = "FLIGHT";
    // Payment for Instruction (Debit) [2] 
    TransactionTypeCode[TransactionTypeCode["INSTRUCTION"] = 2] = "INSTRUCTION";
    // Payment for Purchasing a Product / Service (Debit) [3] 
    TransactionTypeCode[TransactionTypeCode["PURCHASE"] = 3] = "PURCHASE";
    // Credit from client (Credit) [4] 
    TransactionTypeCode[TransactionTypeCode["PAYMENT"] = 4] = "PAYMENT";
    // Bonus added to client (Credit) [5] 
    TransactionTypeCode[TransactionTypeCode["BONUS"] = 5] = "BONUS";
    // Refund for client (Credit) [6] 
    TransactionTypeCode[TransactionTypeCode["REFUND"] = 6] = "REFUND";
})(TransactionTypeCode || (TransactionTypeCode = {}));
// Return list of TransactionTypeCode values and their display names
function GetTransactionTypeCodes() {
    let result = [];
    result.push(new Tuple(TransactionTypeCode.FLIGHT, 'TransactionTypeCode.FLIGHT'));
    result.push(new Tuple(TransactionTypeCode.INSTRUCTION, 'TransactionTypeCode.INSTRUCTION'));
    result.push(new Tuple(TransactionTypeCode.PURCHASE, 'TransactionTypeCode.PURCHASE'));
    result.push(new Tuple(TransactionTypeCode.PAYMENT, 'TransactionTypeCode.PAYMENT'));
    result.push(new Tuple(TransactionTypeCode.BONUS, 'TransactionTypeCode.BONUS'));
    result.push(new Tuple(TransactionTypeCode.REFUND, 'TransactionTypeCode.REFUND'));
    return result;
}
// Return map of TransactionTypeCode values and their display names
function MapTransactionTypeCodes() {
    let result = new Map();
    result.set(TransactionTypeCode.UNDEFINED, 'Undefined');
    result.set(TransactionTypeCode.FLIGHT, 'Flight');
    result.set(TransactionTypeCode.INSTRUCTION, 'Instruction');
    result.set(TransactionTypeCode.PURCHASE, 'Purchase');
    result.set(TransactionTypeCode.PAYMENT, 'Payment');
    result.set(TransactionTypeCode.BONUS, 'Bonus');
    result.set(TransactionTypeCode.REFUND, 'Refund');
    return result;
}

// MaintenanceActionCode represents a maintenance action
var MaintenanceActionCode;
(function (MaintenanceActionCode) {
    // Undefined [0] 
    MaintenanceActionCode[MaintenanceActionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // No action required [1] 
    MaintenanceActionCode[MaintenanceActionCode["NONE"] = 1] = "NONE";
    // Inspection action [2] 
    MaintenanceActionCode[MaintenanceActionCode["INSPECTION"] = 2] = "INSPECTION";
    // Overhaul action [3] 
    MaintenanceActionCode[MaintenanceActionCode["OVERHAUL"] = 3] = "OVERHAUL";
    // Reissue certificate [4] 
    MaintenanceActionCode[MaintenanceActionCode["REISSUE"] = 4] = "REISSUE";
    // Replace component [5] 
    MaintenanceActionCode[MaintenanceActionCode["REPLACEMENT"] = 5] = "REPLACEMENT";
    // Weight action [6] 
    MaintenanceActionCode[MaintenanceActionCode["WEIGHT"] = 6] = "WEIGHT";
})(MaintenanceActionCode || (MaintenanceActionCode = {}));
// Return list of MaintenanceActionCode values and their display names
function GetMaintenanceActionCodes() {
    let result = [];
    result.push(new Tuple(MaintenanceActionCode.NONE, 'MaintenanceActionCode.NONE'));
    result.push(new Tuple(MaintenanceActionCode.INSPECTION, 'MaintenanceActionCode.INSPECTION'));
    result.push(new Tuple(MaintenanceActionCode.OVERHAUL, 'MaintenanceActionCode.OVERHAUL'));
    result.push(new Tuple(MaintenanceActionCode.REISSUE, 'MaintenanceActionCode.REISSUE'));
    result.push(new Tuple(MaintenanceActionCode.REPLACEMENT, 'MaintenanceActionCode.REPLACEMENT'));
    result.push(new Tuple(MaintenanceActionCode.WEIGHT, 'MaintenanceActionCode.WEIGHT'));
    return result;
}
// Return map of MaintenanceActionCode values and their display names
function MapMaintenanceActionCodes() {
    let result = new Map();
    result.set(MaintenanceActionCode.UNDEFINED, 'Undefined');
    result.set(MaintenanceActionCode.NONE, 'None');
    result.set(MaintenanceActionCode.INSPECTION, 'Inspection');
    result.set(MaintenanceActionCode.OVERHAUL, 'Overhaul');
    result.set(MaintenanceActionCode.REISSUE, 'Reissue');
    result.set(MaintenanceActionCode.REPLACEMENT, 'Replacement');
    result.set(MaintenanceActionCode.WEIGHT, 'Weight');
    return result;
}

// AirplaneStatusCode represents the airplane status: ACTIVE | INACTIVE | MAINTENANCE ...
var AirplaneStatusCode;
(function (AirplaneStatusCode) {
    // Undefined [0] 
    AirplaneStatusCode[AirplaneStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Active airplane [1] 
    AirplaneStatusCode[AirplaneStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Inactive airplane [2] 
    AirplaneStatusCode[AirplaneStatusCode["INACTIVE"] = 2] = "INACTIVE";
})(AirplaneStatusCode || (AirplaneStatusCode = {}));
// Return list of AirplaneStatusCode values and their display names
function GetAirplaneStatusCodes() {
    let result = [];
    result.push(new Tuple(AirplaneStatusCode.ACTIVE, 'AirplaneStatusCode.ACTIVE'));
    result.push(new Tuple(AirplaneStatusCode.INACTIVE, 'AirplaneStatusCode.INACTIVE'));
    return result;
}
// Return map of AirplaneStatusCode values and their display names
function MapAirplaneStatusCodes() {
    let result = new Map();
    result.set(AirplaneStatusCode.UNDEFINED, 'Undefined');
    result.set(AirplaneStatusCode.ACTIVE, 'Active');
    result.set(AirplaneStatusCode.INACTIVE, 'Inactive');
    return result;
}

// BillingStatusCode represents a flight billing status:  ...
var BillingStatusCode;
(function (BillingStatusCode) {
    // Undefined [0] 
    BillingStatusCode[BillingStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Unapproved [1] 
    BillingStatusCode[BillingStatusCode["UNAPPROVED"] = 1] = "UNAPPROVED";
    // Approved [2] 
    BillingStatusCode[BillingStatusCode["APPROVED"] = 2] = "APPROVED";
    // Auto invoice created [3] 
    BillingStatusCode[BillingStatusCode["CREATED_INVOICE"] = 3] = "CREATED_INVOICE";
    // Auto invoice pending [4] 
    BillingStatusCode[BillingStatusCode["PENDING_INVOICE"] = 4] = "PENDING_INVOICE";
    // Manual invoice [5] 
    BillingStatusCode[BillingStatusCode["MANUAL_INVOICE"] = 5] = "MANUAL_INVOICE";
    // Closed [6] 
    BillingStatusCode[BillingStatusCode["CLOSED"] = 6] = "CLOSED";
    // Credit Client [7] 
    BillingStatusCode[BillingStatusCode["CREDIT"] = 7] = "CREDIT";
    // Cancelled invoice [8] 
    BillingStatusCode[BillingStatusCode["CANCELLED"] = 8] = "CANCELLED";
    // Irrelevant status [9] 
    BillingStatusCode[BillingStatusCode["CANCELLED_BY_CLIENT"] = 9] = "CANCELLED_BY_CLIENT";
    // Irrelevant status [10] 
    BillingStatusCode[BillingStatusCode["IRRELEVANT"] = 10] = "IRRELEVANT";
})(BillingStatusCode || (BillingStatusCode = {}));
// Return list of BillingStatusCode values and their display names
function GetBillingStatusCodes() {
    let result = [];
    result.push(new Tuple(BillingStatusCode.UNAPPROVED, 'BillingStatusCode.UNAPPROVED'));
    result.push(new Tuple(BillingStatusCode.APPROVED, 'BillingStatusCode.APPROVED'));
    result.push(new Tuple(BillingStatusCode.CREATED_INVOICE, 'BillingStatusCode.CREATED_INVOICE'));
    result.push(new Tuple(BillingStatusCode.PENDING_INVOICE, 'BillingStatusCode.PENDING_INVOICE'));
    result.push(new Tuple(BillingStatusCode.MANUAL_INVOICE, 'BillingStatusCode.MANUAL_INVOICE'));
    result.push(new Tuple(BillingStatusCode.CLOSED, 'BillingStatusCode.CLOSED'));
    result.push(new Tuple(BillingStatusCode.CREDIT, 'BillingStatusCode.CREDIT'));
    result.push(new Tuple(BillingStatusCode.CANCELLED, 'BillingStatusCode.CANCELLED'));
    result.push(new Tuple(BillingStatusCode.CANCELLED_BY_CLIENT, 'BillingStatusCode.CANCELLED_BY_CLIENT'));
    result.push(new Tuple(BillingStatusCode.IRRELEVANT, 'BillingStatusCode.IRRELEVANT'));
    return result;
}
// Return map of BillingStatusCode values and their display names
function MapBillingStatusCodes() {
    let result = new Map();
    result.set(BillingStatusCode.UNDEFINED, 'Undefined');
    result.set(BillingStatusCode.UNAPPROVED, 'Unapproved');
    result.set(BillingStatusCode.APPROVED, 'Approved');
    result.set(BillingStatusCode.CREATED_INVOICE, 'Created Invoice');
    result.set(BillingStatusCode.PENDING_INVOICE, 'Pending Invoice');
    result.set(BillingStatusCode.MANUAL_INVOICE, 'Manual Invoice');
    result.set(BillingStatusCode.CLOSED, 'Closed');
    result.set(BillingStatusCode.CREDIT, 'Credit');
    result.set(BillingStatusCode.CANCELLED, 'Cancelled');
    result.set(BillingStatusCode.CANCELLED_BY_CLIENT, 'Cancelled By Client');
    result.set(BillingStatusCode.IRRELEVANT, 'Irrelevant');
    return result;
}

// CampaignStatusCode represents the campaign status: PLANNING | ACTIVE | COMPLETED ...
var CampaignStatusCode;
(function (CampaignStatusCode) {
    // Undefined [0] 
    CampaignStatusCode[CampaignStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Planned campaign [1] 
    CampaignStatusCode[CampaignStatusCode["PLANNING"] = 1] = "PLANNING";
    // Active campaign [2] 
    CampaignStatusCode[CampaignStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // `Completed campaign [3] 
    CampaignStatusCode[CampaignStatusCode["COMPLETED"] = 3] = "COMPLETED";
    // Suspended (about to be deleted) [4] 
    CampaignStatusCode[CampaignStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(CampaignStatusCode || (CampaignStatusCode = {}));
// Return list of CampaignStatusCode values and their display names
function GetCampaignStatusCodes() {
    let result = [];
    result.push(new Tuple(CampaignStatusCode.PLANNING, 'CampaignStatusCode.PLANNING'));
    result.push(new Tuple(CampaignStatusCode.ACTIVE, 'CampaignStatusCode.ACTIVE'));
    result.push(new Tuple(CampaignStatusCode.COMPLETED, 'CampaignStatusCode.COMPLETED'));
    result.push(new Tuple(CampaignStatusCode.SUSPENDED, 'CampaignStatusCode.SUSPENDED'));
    return result;
}
// Return map of CampaignStatusCode values and their display names
function MapCampaignStatusCodes() {
    let result = new Map();
    result.set(CampaignStatusCode.UNDEFINED, 'Undefined');
    result.set(CampaignStatusCode.PLANNING, 'Planning');
    result.set(CampaignStatusCode.ACTIVE, 'Active');
    result.set(CampaignStatusCode.COMPLETED, 'Completed');
    result.set(CampaignStatusCode.SUSPENDED, 'Suspended');
    return result;
}

// ConfirmStatusCode represents the contact confirmation status: PENDING | APPROVED | REJECTED ...
var ConfirmStatusCode;
(function (ConfirmStatusCode) {
    // Undefined [0] 
    ConfirmStatusCode[ConfirmStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Pending not read yet [1] 
    ConfirmStatusCode[ConfirmStatusCode["PENDING"] = 1] = "PENDING";
    // Approved by the contact [2] 
    ConfirmStatusCode[ConfirmStatusCode["APPROVED"] = 2] = "APPROVED";
    // Rejected by the contact [3] 
    ConfirmStatusCode[ConfirmStatusCode["REJECTED"] = 3] = "REJECTED";
})(ConfirmStatusCode || (ConfirmStatusCode = {}));
// Return list of ConfirmStatusCode values and their display names
function GetConfirmStatusCodes() {
    let result = [];
    result.push(new Tuple(ConfirmStatusCode.PENDING, 'ConfirmStatusCode.PENDING'));
    result.push(new Tuple(ConfirmStatusCode.APPROVED, 'ConfirmStatusCode.APPROVED'));
    result.push(new Tuple(ConfirmStatusCode.REJECTED, 'ConfirmStatusCode.REJECTED'));
    return result;
}
// Return map of ConfirmStatusCode values and their display names
function MapConfirmStatusCodes() {
    let result = new Map();
    result.set(ConfirmStatusCode.UNDEFINED, 'Undefined');
    result.set(ConfirmStatusCode.PENDING, 'Pending');
    result.set(ConfirmStatusCode.APPROVED, 'Approved');
    result.set(ConfirmStatusCode.REJECTED, 'Rejected');
    return result;
}

// CurrencyCode represents the currency: ILS | USD | EUR ...
var CurrencyCode;
(function (CurrencyCode) {
    // Undefined [0] 
    CurrencyCode[CurrencyCode["UNDEFINED"] = 0] = "UNDEFINED";
    // ILS [1] 
    CurrencyCode[CurrencyCode["ILS"] = 1] = "ILS";
    // USD [2] 
    CurrencyCode[CurrencyCode["USD"] = 2] = "USD";
    // EURO [3] 
    CurrencyCode[CurrencyCode["EUR"] = 3] = "EUR";
})(CurrencyCode || (CurrencyCode = {}));
// Return list of CurrencyCode values and their display names
function GetCurrencyCodes() {
    let result = [];
    result.push(new Tuple(CurrencyCode.ILS, 'CurrencyCode.ILS'));
    result.push(new Tuple(CurrencyCode.USD, 'CurrencyCode.USD'));
    result.push(new Tuple(CurrencyCode.EUR, 'CurrencyCode.EUR'));
    return result;
}
// Return map of CurrencyCode values and their display names
function MapCurrencyCodes() {
    let result = new Map();
    result.set(CurrencyCode.UNDEFINED, 'Undefined');
    result.set(CurrencyCode.ILS, 'Ils');
    result.set(CurrencyCode.USD, 'Usd');
    result.set(CurrencyCode.EUR, 'Eur');
    return result;
}

// FlightTypeCode represents a flight type:  GENERAL | PRIVATE | COMMERCIAL ...
var FlightTypeCode;
(function (FlightTypeCode) {
    // Undefined [0] 
    FlightTypeCode[FlightTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // General Purpose Flight [1] 
    FlightTypeCode[FlightTypeCode["GENERAL"] = 1] = "GENERAL";
    // Other Flight [2] 
    FlightTypeCode[FlightTypeCode["OTHER"] = 2] = "OTHER";
    // Private Flight [3] 
    FlightTypeCode[FlightTypeCode["PRIVATE"] = 3] = "PRIVATE";
    // Private Flight with IFR [4] 
    FlightTypeCode[FlightTypeCode["PRIVATE_IFR"] = 4] = "PRIVATE_IFR";
    // Commercial Flight [5] 
    FlightTypeCode[FlightTypeCode["COMMERCIAL"] = 5] = "COMMERCIAL";
    // Commercial Flight with IFR [6] 
    FlightTypeCode[FlightTypeCode["COMMERCIAL_IFR"] = 6] = "COMMERCIAL_IFR";
    // Instruction Flight [7] 
    FlightTypeCode[FlightTypeCode["INSTRUCTION"] = 7] = "INSTRUCTION";
    // Instruction Flight with CVFR [8] 
    FlightTypeCode[FlightTypeCode["INSTRUCTION_CVFR"] = 8] = "INSTRUCTION_CVFR";
    // Instruction Flight with IFR [9] 
    FlightTypeCode[FlightTypeCode["INSTRUCTION_IFR"] = 9] = "INSTRUCTION_IFR";
    // Instruction Flight with Navigation [10] 
    FlightTypeCode[FlightTypeCode["INSTRUCTION_NAV"] = 10] = "INSTRUCTION_NAV";
    // Instruction Night Flight [11] 
    FlightTypeCode[FlightTypeCode["INSTRUCTION_NIGHT"] = 11] = "INSTRUCTION_NIGHT";
})(FlightTypeCode || (FlightTypeCode = {}));
// Return list of FlightTypeCode values and their display names
function GetFlightTypeCodes() {
    let result = [];
    result.push(new Tuple(FlightTypeCode.GENERAL, 'FlightTypeCode.GENERAL'));
    result.push(new Tuple(FlightTypeCode.OTHER, 'FlightTypeCode.OTHER'));
    result.push(new Tuple(FlightTypeCode.PRIVATE, 'FlightTypeCode.PRIVATE'));
    result.push(new Tuple(FlightTypeCode.PRIVATE_IFR, 'FlightTypeCode.PRIVATE_IFR'));
    result.push(new Tuple(FlightTypeCode.COMMERCIAL, 'FlightTypeCode.COMMERCIAL'));
    result.push(new Tuple(FlightTypeCode.COMMERCIAL_IFR, 'FlightTypeCode.COMMERCIAL_IFR'));
    result.push(new Tuple(FlightTypeCode.INSTRUCTION, 'FlightTypeCode.INSTRUCTION'));
    result.push(new Tuple(FlightTypeCode.INSTRUCTION_CVFR, 'FlightTypeCode.INSTRUCTION_CVFR'));
    result.push(new Tuple(FlightTypeCode.INSTRUCTION_IFR, 'FlightTypeCode.INSTRUCTION_IFR'));
    result.push(new Tuple(FlightTypeCode.INSTRUCTION_NAV, 'FlightTypeCode.INSTRUCTION_NAV'));
    result.push(new Tuple(FlightTypeCode.INSTRUCTION_NIGHT, 'FlightTypeCode.INSTRUCTION_NIGHT'));
    return result;
}
// Return map of FlightTypeCode values and their display names
function MapFlightTypeCodes() {
    let result = new Map();
    result.set(FlightTypeCode.UNDEFINED, 'Undefined');
    result.set(FlightTypeCode.GENERAL, 'General');
    result.set(FlightTypeCode.OTHER, 'Other');
    result.set(FlightTypeCode.PRIVATE, 'Private');
    result.set(FlightTypeCode.PRIVATE_IFR, 'Private Ifr');
    result.set(FlightTypeCode.COMMERCIAL, 'Commercial');
    result.set(FlightTypeCode.COMMERCIAL_IFR, 'Commercial Ifr');
    result.set(FlightTypeCode.INSTRUCTION, 'Instruction');
    result.set(FlightTypeCode.INSTRUCTION_CVFR, 'Instruction Cvfr');
    result.set(FlightTypeCode.INSTRUCTION_IFR, 'Instruction Ifr');
    result.set(FlightTypeCode.INSTRUCTION_NAV, 'Instruction Nav');
    result.set(FlightTypeCode.INSTRUCTION_NIGHT, 'Instruction Night');
    return result;
}

// LeadStatusCode represents the lead status: NEW | INPROCESS | ASSIGNED ...
var LeadStatusCode;
(function (LeadStatusCode) {
    // Undefined [0] 
    LeadStatusCode[LeadStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // New Lead [1] 
    LeadStatusCode[LeadStatusCode["NEW"] = 1] = "NEW";
    // Lead in process [2] 
    LeadStatusCode[LeadStatusCode["INPROCESS"] = 2] = "INPROCESS";
    // Lead assigned [3] 
    LeadStatusCode[LeadStatusCode["ASSIGNED"] = 3] = "ASSIGNED";
    // Lead converted [4] 
    LeadStatusCode[LeadStatusCode["CONVERTED"] = 4] = "CONVERTED";
    // Lead irrelevant [5] 
    LeadStatusCode[LeadStatusCode["IRRELEVANT"] = 5] = "IRRELEVANT";
    // Lead redirected [6] 
    LeadStatusCode[LeadStatusCode["REDIRECTED"] = 6] = "REDIRECTED";
    // Lead recycled [7] 
    LeadStatusCode[LeadStatusCode["RECYCLED"] = 7] = "RECYCLED";
    // Lead is no longer exists [8] 
    LeadStatusCode[LeadStatusCode["DEAD"] = 8] = "DEAD";
})(LeadStatusCode || (LeadStatusCode = {}));
// Return list of LeadStatusCode values and their display names
function GetLeadStatusCodes() {
    let result = [];
    result.push(new Tuple(LeadStatusCode.NEW, 'LeadStatusCode.NEW'));
    result.push(new Tuple(LeadStatusCode.INPROCESS, 'LeadStatusCode.INPROCESS'));
    result.push(new Tuple(LeadStatusCode.ASSIGNED, 'LeadStatusCode.ASSIGNED'));
    result.push(new Tuple(LeadStatusCode.CONVERTED, 'LeadStatusCode.CONVERTED'));
    result.push(new Tuple(LeadStatusCode.IRRELEVANT, 'LeadStatusCode.IRRELEVANT'));
    result.push(new Tuple(LeadStatusCode.REDIRECTED, 'LeadStatusCode.REDIRECTED'));
    result.push(new Tuple(LeadStatusCode.RECYCLED, 'LeadStatusCode.RECYCLED'));
    result.push(new Tuple(LeadStatusCode.DEAD, 'LeadStatusCode.DEAD'));
    return result;
}
// Return map of LeadStatusCode values and their display names
function MapLeadStatusCodes() {
    let result = new Map();
    result.set(LeadStatusCode.UNDEFINED, 'Undefined');
    result.set(LeadStatusCode.NEW, 'New');
    result.set(LeadStatusCode.INPROCESS, 'Inprocess');
    result.set(LeadStatusCode.ASSIGNED, 'Assigned');
    result.set(LeadStatusCode.CONVERTED, 'Converted');
    result.set(LeadStatusCode.IRRELEVANT, 'Irrelevant');
    result.set(LeadStatusCode.REDIRECTED, 'Redirected');
    result.set(LeadStatusCode.RECYCLED, 'Recycled');
    result.set(LeadStatusCode.DEAD, 'Dead');
    return result;
}

// TicketStatusCode represents a flight ticket status:  ...
var TicketStatusCode;
(function (TicketStatusCode) {
    // Undefined [0] 
    TicketStatusCode[TicketStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Pending [1] 
    TicketStatusCode[TicketStatusCode["PENDING"] = 1] = "PENDING";
    // Sent to client [2] 
    TicketStatusCode[TicketStatusCode["SENT"] = 2] = "SENT";
})(TicketStatusCode || (TicketStatusCode = {}));
// Return list of TicketStatusCode values and their display names
function GetTicketStatusCodes() {
    let result = [];
    result.push(new Tuple(TicketStatusCode.PENDING, 'TicketStatusCode.PENDING'));
    result.push(new Tuple(TicketStatusCode.SENT, 'TicketStatusCode.SENT'));
    return result;
}
// Return map of TicketStatusCode values and their display names
function MapTicketStatusCodes() {
    let result = new Map();
    result.set(TicketStatusCode.UNDEFINED, 'Undefined');
    result.set(TicketStatusCode.PENDING, 'Pending');
    result.set(TicketStatusCode.SENT, 'Sent');
    return result;
}

// UserStatusCode represents the user status: PENDING | ACTIVE | BLOCKED ...
var UserStatusCode;
(function (UserStatusCode) {
    // Undefined [0] 
    UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // User is registered and pending verification [1] 
    UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
    // Active user in the system [2] 
    UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Blocked user (only account system can unblock the user) [3] 
    UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
    // Suspended user (about to be deleted) [4] 
    UserStatusCode[UserStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(UserStatusCode || (UserStatusCode = {}));
// Return list of UserStatusCode values and their display names
function GetUserStatusCodes() {
    let result = [];
    result.push(new Tuple(UserStatusCode.PENDING, 'UserStatusCode.PENDING'));
    result.push(new Tuple(UserStatusCode.ACTIVE, 'UserStatusCode.ACTIVE'));
    result.push(new Tuple(UserStatusCode.BLOCKED, 'UserStatusCode.BLOCKED'));
    result.push(new Tuple(UserStatusCode.SUSPENDED, 'UserStatusCode.SUSPENDED'));
    return result;
}
// Return map of UserStatusCode values and their display names
function MapUserStatusCodes() {
    let result = new Map();
    result.set(UserStatusCode.UNDEFINED, 'Undefined');
    result.set(UserStatusCode.PENDING, 'Pending');
    result.set(UserStatusCode.ACTIVE, 'Active');
    result.set(UserStatusCode.BLOCKED, 'Blocked');
    result.set(UserStatusCode.SUSPENDED, 'Suspended');
    return result;
}

// UserTypeCode represents the user type: SYSADMIN | SUPPORT | USER ...
var UserTypeCode;
(function (UserTypeCode) {
    // Undefined [0] 
    UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
    // Account user - has access to specific accounts with role based access control [3] 
    UserTypeCode[UserTypeCode["USER"] = 3] = "USER";
    // Service Account - to be used by other systems to perform actions using the API (can't login as a user to the portal) [4] 
    UserTypeCode[UserTypeCode["SERVICE"] = 4] = "SERVICE";
})(UserTypeCode || (UserTypeCode = {}));
// Return list of UserTypeCode values and their display names
function GetUserTypeCodes() {
    let result = [];
    result.push(new Tuple(UserTypeCode.SYSADMIN, 'UserTypeCode.SYSADMIN'));
    result.push(new Tuple(UserTypeCode.SUPPORT, 'UserTypeCode.SUPPORT'));
    result.push(new Tuple(UserTypeCode.USER, 'UserTypeCode.USER'));
    result.push(new Tuple(UserTypeCode.SERVICE, 'UserTypeCode.SERVICE'));
    return result;
}
// Return map of UserTypeCode values and their display names
function MapUserTypeCodes() {
    let result = new Map();
    result.set(UserTypeCode.UNDEFINED, 'Undefined');
    result.set(UserTypeCode.SYSADMIN, 'Sysadmin');
    result.set(UserTypeCode.SUPPORT, 'Support');
    result.set(UserTypeCode.USER, 'User');
    result.set(UserTypeCode.SERVICE, 'Service');
    return result;
}

// TOLData is Takeoff and landing data
class TOLData {
    constructor(planned, time, hobs, tach, field) {
        if (planned !== undefined) {
            this.planned = planned;
        }
        if (time !== undefined) {
            this.time = time;
        }
        if (hobs !== undefined) {
            this.hobs = hobs;
        }
        if (tach !== undefined) {
            this.tach = tach;
        }
        if (field !== undefined) {
            this.field = field;
        }
    }
}

// PilotQualificationsRisks group of pilot qualifications risk values
class PilotQualificationsRisks {
    constructor(captLess200Hr, captLess100Hr90d, firstOfLess200Hr, firstOfLess100Hr90d) {
        if (captLess200Hr !== undefined) {
            this.captLess200Hr = captLess200Hr;
        }
        if (captLess100Hr90d !== undefined) {
            this.captLess100Hr90d = captLess100Hr90d;
        }
        if (firstOfLess200Hr !== undefined) {
            this.firstOfLess200Hr = firstOfLess200Hr;
        }
        if (firstOfLess100Hr90d !== undefined) {
            this.firstOfLess100Hr90d = firstOfLess100Hr90d;
        }
    }
}

// StringKeyValue model used as a string key-value pair
class StringKeyValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Airplane entity represents an airplane
class Airplane extends BaseEntity {
}
function GetAirplaneColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("model", "string", ""));
    result.push(new ColumnDef("serialNo", "string", ""));
    result.push(new ColumnDef("status", "AirplaneStatusCode", ""));
    result.push(new ColumnDef("hobs", "number", "decimal"));
    result.push(new ColumnDef("tach", "number", "decimal"));
    result.push(new ColumnDef("nextTach", "number", "decimal"));
    result.push(new ColumnDef("airTime", "number", "decimal"));
    result.push(new ColumnDef("customerNo", "string", ""));
    result.push(new ColumnDef("airworthiness", "AirplaneValidationFlag", ""));
    result.push(new ColumnDef("fixedValueToFirstFlight", "number", "decimal"));
    result.push(new ColumnDef("acTotalTime", "number", "decimal"));
    result.push(new ColumnDef("engine", "Engine", ""));
    result.push(new ColumnDef("leftMagneto", "Magneto", ""));
    result.push(new ColumnDef("rightMagneto", "Magneto", ""));
    result.push(new ColumnDef("propeller", "Propeller", ""));
    result.push(new ColumnDef("fuel", "Fuel", ""));
    result.push(new ColumnDef("documents", "string", ""));
    return result;
}

// Propeller model represents propeller metrics
class Propeller {
    constructor(totalTime, overhaulFrequency, overhaulNextDue, hoursToOverhaul, lastAirframeOverhaul) {
        if (totalTime !== undefined) {
            this.totalTime = totalTime;
        }
        if (overhaulFrequency !== undefined) {
            this.overhaulFrequency = overhaulFrequency;
        }
        if (overhaulNextDue !== undefined) {
            this.overhaulNextDue = overhaulNextDue;
        }
        if (hoursToOverhaul !== undefined) {
            this.hoursToOverhaul = hoursToOverhaul;
        }
        if (lastAirframeOverhaul !== undefined) {
            this.lastAirframeOverhaul = lastAirframeOverhaul;
        }
    }
}

// Fuel model represents fuel metrics
class Fuel {
    constructor(tankSize, consumption, cost, estimatedFuelInTank, estimatedEndurance, lastUpdatedOn, lastUpdatedByFlight) {
        if (tankSize !== undefined) {
            this.tankSize = tankSize;
        }
        if (consumption !== undefined) {
            this.consumption = consumption;
        }
        if (cost !== undefined) {
            this.cost = cost;
        }
        if (estimatedFuelInTank !== undefined) {
            this.estimatedFuelInTank = estimatedFuelInTank;
        }
        if (estimatedEndurance !== undefined) {
            this.estimatedEndurance = estimatedEndurance;
        }
        if (lastUpdatedOn !== undefined) {
            this.lastUpdatedOn = lastUpdatedOn;
        }
        if (lastUpdatedByFlight !== undefined) {
            this.lastUpdatedByFlight = lastUpdatedByFlight;
        }
    }
}

// DocumentRevision entity represents a document revision in the system
class DocumentRevision {
    constructor(id, name, revision, url, createdBy, createdOn, mimeType) {
        if (id !== undefined) {
            this.id = id;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (revision !== undefined) {
            this.revision = revision;
        }
        if (url !== undefined) {
            this.url = url;
        }
        if (createdBy !== undefined) {
            this.createdBy = createdBy;
        }
        if (createdOn !== undefined) {
            this.createdOn = createdOn;
        }
        if (mimeType !== undefined) {
            this.mimeType = mimeType;
        }
    }
}

// Flight entity is a single flight in the airplane
class Flight extends BaseEntity {
}
function GetFlightColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("flightNumber", "number", ""));
    result.push(new ColumnDef("flightString", "string", ""));
    result.push(new ColumnDef("destination", "string", ""));
    result.push(new ColumnDef("accountId", "string", ""));
    result.push(new ColumnDef("airplaneId", "string", ""));
    result.push(new ColumnDef("type", "FlightTypeCode", ""));
    result.push(new ColumnDef("status", "FlightStatusCode", ""));
    result.push(new ColumnDef("state", "FlightStateCode", ""));
    result.push(new ColumnDef("purpose", "FlightPurposeCode", ""));
    result.push(new ColumnDef("purposeOt", "string", ""));
    result.push(new ColumnDef("onBoard", "OnBoard", ""));
    result.push(new ColumnDef("attendingTime", "string", ""));
    result.push(new ColumnDef("boardingTime", "string", ""));
    result.push(new ColumnDef("takeoff", "TOLData", ""));
    result.push(new ColumnDef("landing", "TOLData", ""));
    result.push(new ColumnDef("wbConfig", "string", ""));
    result.push(new ColumnDef("wbManual", "string", ""));
    result.push(new ColumnDef("hasCompetency", "boolean", ""));
    result.push(new ColumnDef("hasFlightPlan", "boolean", ""));
    result.push(new ColumnDef("preFlightNotes", "string", ""));
    result.push(new ColumnDef("operationNotes", "string", ""));
    result.push(new ColumnDef("fuelStatus", "ReFuel", ""));
    result.push(new ColumnDef("oilStatus", "ReFuel", ""));
    result.push(new ColumnDef("lesson", "Lesson", ""));
    result.push(new ColumnDef("billing", "Billing", ""));
    result.push(new ColumnDef("pilotCertCheck", "number", "datetime"));
    result.push(new ColumnDef("riskAssessment", "RiskAssessment", ""));
    return result;
}

// CrewDutyDayRisks group of crew duty risk values
class CrewDutyDayRisks {
    constructor(crewDutyDayOver12Hrs, flightTimeOver8Hrs, crewRestLess10Hrs) {
        if (crewDutyDayOver12Hrs !== undefined) {
            this.crewDutyDayOver12Hrs = crewDutyDayOver12Hrs;
        }
        if (flightTimeOver8Hrs !== undefined) {
            this.flightTimeOver8Hrs = flightTimeOver8Hrs;
        }
        if (crewRestLess10Hrs !== undefined) {
            this.crewRestLess10Hrs = crewRestLess10Hrs;
        }
    }
}

// DepartureRisks group of departure risk values
class DepartureRisks {
    constructor(mountainousAirport, towerNotOperationalAtEtd, nonToweredAirport, wetRunway, contaminatedRunway) {
        if (mountainousAirport !== undefined) {
            this.mountainousAirport = mountainousAirport;
        }
        if (towerNotOperationalAtEtd !== undefined) {
            this.towerNotOperationalAtEtd = towerNotOperationalAtEtd;
        }
        if (nonToweredAirport !== undefined) {
            this.nonToweredAirport = nonToweredAirport;
        }
        if (wetRunway !== undefined) {
            this.wetRunway = wetRunway;
        }
        if (contaminatedRunway !== undefined) {
            this.contaminatedRunway = contaminatedRunway;
        }
    }
}

// DestinationRisks group of destination risk values
class DestinationRisks {
    constructor(mountainousAirport, towerNotOperationalAtEta, nonToweredAirport, wetRunway, contaminatedRunway, stoppingDistanceOver80p, runwayBreakingLessGood, approachWoVerticalGuide, circlingApproach, noPublishedApproaches, noAlternateAirport, airportElevOver5KFts) {
        if (mountainousAirport !== undefined) {
            this.mountainousAirport = mountainousAirport;
        }
        if (towerNotOperationalAtEta !== undefined) {
            this.towerNotOperationalAtEta = towerNotOperationalAtEta;
        }
        if (nonToweredAirport !== undefined) {
            this.nonToweredAirport = nonToweredAirport;
        }
        if (wetRunway !== undefined) {
            this.wetRunway = wetRunway;
        }
        if (contaminatedRunway !== undefined) {
            this.contaminatedRunway = contaminatedRunway;
        }
        if (stoppingDistanceOver80p !== undefined) {
            this.stoppingDistanceOver80p = stoppingDistanceOver80p;
        }
        if (runwayBreakingLessGood !== undefined) {
            this.runwayBreakingLessGood = runwayBreakingLessGood;
        }
        if (approachWoVerticalGuide !== undefined) {
            this.approachWoVerticalGuide = approachWoVerticalGuide;
        }
        if (circlingApproach !== undefined) {
            this.circlingApproach = circlingApproach;
        }
        if (noPublishedApproaches !== undefined) {
            this.noPublishedApproaches = noPublishedApproaches;
        }
        if (noAlternateAirport !== undefined) {
            this.noAlternateAirport = noAlternateAirport;
        }
        if (airportElevOver5KFts !== undefined) {
            this.airportElevOver5KFts = airportElevOver5KFts;
        }
    }
}

// MessageConfirm entity is a system message confirmation by users
class MessageConfirm extends BaseEntity {
}
function GetMessageConfirmColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("messageId", "string", ""));
    result.push(new ColumnDef("contactId", "string", ""));
    result.push(new ColumnDef("replyStatus", "ConfirmStatusCode", ""));
    result.push(new ColumnDef("replyOn", "number", "datetime"));
    result.push(new ColumnDef("replyUrl", "string", ""));
    result.push(new ColumnDef("subject", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("type", "MessageTypeCode", ""));
    result.push(new ColumnDef("priority", "PriorityCode", ""));
    result.push(new ColumnDef("props", "Map<string,object>", ""));
    return result;
}

// SystemConfig is a global System Configuration variable
class SystemConfig extends BaseEntity {
}
function GetSystemConfigColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("strVal", "string", ""));
    result.push(new ColumnDef("intVal", "number", ""));
    return result;
}

// Booking entity is a flight booking request to secure an airplane for specific time slot
class Booking extends BaseEntity {
}
function GetBookingColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("accountId", "string", ""));
    result.push(new ColumnDef("contactId", "string", ""));
    result.push(new ColumnDef("airplaneId", "string", ""));
    result.push(new ColumnDef("placementOn", "number", "datetime"));
    result.push(new ColumnDef("placementTo", "number", "datetime"));
    return result;
}

// OnBoard includes all members on board
class OnBoard {
    constructor(captain, firstOfficer, passengers, crew) {
        if (captain !== undefined) {
            this.captain = captain;
        }
        if (firstOfficer !== undefined) {
            this.firstOfficer = firstOfficer;
        }
        if (passengers !== undefined) {
            this.passengers = passengers;
        }
        if (crew !== undefined) {
            this.crew = crew;
        }
    }
}

// User represents a human / system operator that has access to the system, and can perform operations
// User authentication is done by an external identity provider
class User extends BaseEntity {
}
function GetUserColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("email", "string", ""));
    result.push(new ColumnDef("mobile", "string", ""));
    result.push(new ColumnDef("type", "UserTypeCode", ""));
    result.push(new ColumnDef("status", "UserStatusCode", ""));
    return result;
}

// Engine model represents engine metrics
class Engine {
    constructor(totalTime, overhaulFrequency, overhaulNextDue, hoursToOverhaul, lastAirframeOverhaul) {
        if (totalTime !== undefined) {
            this.totalTime = totalTime;
        }
        if (overhaulFrequency !== undefined) {
            this.overhaulFrequency = overhaulFrequency;
        }
        if (overhaulNextDue !== undefined) {
            this.overhaulNextDue = overhaulNextDue;
        }
        if (hoursToOverhaul !== undefined) {
            this.hoursToOverhaul = hoursToOverhaul;
        }
        if (lastAirframeOverhaul !== undefined) {
            this.lastAirframeOverhaul = lastAirframeOverhaul;
        }
    }
}

// Billing includes flight billing information
class Billing {
    constructor(status, invoiceRecords, invoiceDate, discountPercentage, totalBeforeVAT, totalAfterVAT, totalAfterDiscount, pilotPayment, pilotPaymentStatus, firstOfficerPayment, firstOfficerPaymentStatus) {
        if (status !== undefined) {
            this.status = status;
        }
        if (invoiceRecords !== undefined) {
            this.invoiceRecords = invoiceRecords;
        }
        if (invoiceDate !== undefined) {
            this.invoiceDate = invoiceDate;
        }
        if (discountPercentage !== undefined) {
            this.discountPercentage = discountPercentage;
        }
        if (totalBeforeVAT !== undefined) {
            this.totalBeforeVat = totalBeforeVAT;
        }
        if (totalAfterVAT !== undefined) {
            this.totalAfterVat = totalAfterVAT;
        }
        if (totalAfterDiscount !== undefined) {
            this.totalAfterDiscount = totalAfterDiscount;
        }
        if (pilotPayment !== undefined) {
            this.pilotPayment = pilotPayment;
        }
        if (pilotPaymentStatus !== undefined) {
            this.pilotPaymentStatus = pilotPaymentStatus;
        }
        if (firstOfficerPayment !== undefined) {
            this.firstOfficerPayment = firstOfficerPayment;
        }
        if (firstOfficerPaymentStatus !== undefined) {
            this.firstOfficerPaymentStatus = firstOfficerPaymentStatus;
        }
    }
}

// BillingRecord is a single record in the total billing of the flight
class BillingRecord {
    constructor(units, unitPrice, description, exempt) {
        if (units !== undefined) {
            this.units = units;
        }
        if (unitPrice !== undefined) {
            this.unitPrice = unitPrice;
        }
        if (description !== undefined) {
            this.description = description;
        }
        if (exempt !== undefined) {
            this.exempt = exempt;
        }
    }
}

// WeatherRisks group of weather risk values
class WeatherRisks {
    constructor(noWeatherReporting, thunderstormsExpected, heavyRainExpected, frozenPrecipitation, ceilingVisibilityLess500Fts, coldWeatherOperation, moderateSeverIcing, surfaceWindsOver30Knots, crosswindsOver15Knots, severeTurbulenceExpected) {
        if (noWeatherReporting !== undefined) {
            this.noWeatherReporting = noWeatherReporting;
        }
        if (thunderstormsExpected !== undefined) {
            this.thunderstormsExpected = thunderstormsExpected;
        }
        if (heavyRainExpected !== undefined) {
            this.heavyRainExpected = heavyRainExpected;
        }
        if (frozenPrecipitation !== undefined) {
            this.frozenPrecipitation = frozenPrecipitation;
        }
        if (ceilingVisibilityLess500Fts !== undefined) {
            this.ceilingVisibilityLess500Fts = ceilingVisibilityLess500Fts;
        }
        if (coldWeatherOperation !== undefined) {
            this.coldWeatherOperation = coldWeatherOperation;
        }
        if (moderateSeverIcing !== undefined) {
            this.moderateSeverIcing = moderateSeverIcing;
        }
        if (surfaceWindsOver30Knots !== undefined) {
            this.surfaceWindsOver30Knts = surfaceWindsOver30Knots;
        }
        if (crosswindsOver15Knots !== undefined) {
            this.crosswindsOver15Knots = crosswindsOver15Knots;
        }
        if (severeTurbulenceExpected !== undefined) {
            this.severeTurbulenceExpected = severeTurbulenceExpected;
        }
    }
}

// ReFuel includes Fuel and Oil
class ReFuel {
    constructor(refillBefore, amountOnBoard, refillAfter) {
        if (refillBefore !== undefined) {
            this.refillBefore = refillBefore;
        }
        if (amountOnBoard !== undefined) {
            this.amountOnBoard = amountOnBoard;
        }
        if (refillAfter !== undefined) {
            this.refillAfter = refillAfter;
        }
    }
}

// SpecialRisks group of special / other risk values
class SpecialRisks {
    constructor(specialFlightPermit, specialMelCdlItems, specialFlightLimitAfm) {
        if (specialFlightPermit !== undefined) {
            this.specialFlightPermit = specialFlightPermit;
        }
        if (specialMelCdlItems !== undefined) {
            this.specialMelCdlItems = specialMelCdlItems;
        }
        if (specialFlightLimitAfm !== undefined) {
            this.specialFlightLimitAfm = specialFlightLimitAfm;
        }
    }
}

// LoginParams model used for authorize user by email
class LoginParams {
    constructor(email) {
        if (email !== undefined) {
            this.email = email;
        }
    }
}

// TokenData model represents user in account which is encrypted with the JWT token
class TokenData {
    constructor(subjectId, subjectType, status, expiresIn) {
        if (subjectId !== undefined) {
            this.subjectId = subjectId;
        }
        if (subjectType !== undefined) {
            this.subjectType = subjectType;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (expiresIn !== undefined) {
            this.expiresIn = expiresIn;
        }
    }
}

// Campaign entity represents a marketing campaign in the system
class Campaign extends BaseEntity {
}
function GetCampaignColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("type", "CampaignTypeCode", ""));
    result.push(new ColumnDef("status", "CampaignStatusCode", ""));
    result.push(new ColumnDef("content", "string", ""));
    result.push(new ColumnDef("startDate", "number", "datetime"));
    result.push(new ColumnDef("endDate", "number", "datetime"));
    result.push(new ColumnDef("budget", "number", "decimal"));
    result.push(new ColumnDef("baseRate", "number", "decimal"));
    result.push(new ColumnDef("referUrl", "string", ""));
    result.push(new ColumnDef("expectedCost", "number", "decimal"));
    result.push(new ColumnDef("actualCost", "number", "decimal"));
    result.push(new ColumnDef("currency", "CurrencyCode", ""));
    return result;
}

// Certificate entity is a contact certificate required for active pilot
class Certificate extends BaseEntity {
}
function GetCertificateColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("contactId", "string", ""));
    result.push(new ColumnDef("documentId", "string", ""));
    result.push(new ColumnDef("validUntil", "number", "datetime"));
    result.push(new ColumnDef("status", "StatusCode", ""));
    result.push(new ColumnDef("notifyAt", "number", "datetime"));
    result.push(new ColumnDef("subject", "string", ""));
    result.push(new ColumnDef("message", "string", ""));
    return result;
}

// Contact entity is a billing account in the system
class Contact extends BaseEntity {
}
function GetContactColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("firstName", "string", ""));
    result.push(new ColumnDef("lastName", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("title", "string", ""));
    result.push(new ColumnDef("birthDay", "number", "datetime"));
    result.push(new ColumnDef("status", "AccountStatusCode", ""));
    result.push(new ColumnDef("phone", "string", ""));
    result.push(new ColumnDef("fax", "string", ""));
    result.push(new ColumnDef("mobile", "string", ""));
    result.push(new ColumnDef("primaryAddress", "Address", ""));
    result.push(new ColumnDef("singleEngineHours", "number", ""));
    result.push(new ColumnDef("dualEngineHours", "number", ""));
    result.push(new ColumnDef("totalFlightHours", "number", ""));
    result.push(new ColumnDef("groups", "string", ""));
    result.push(new ColumnDef("idNumber", "string", ""));
    result.push(new ColumnDef("startToFlyDate", "number", "datetime"));
    result.push(new ColumnDef("authorizedToFlyBy", "string", ""));
    result.push(new ColumnDef("authorizedPhotographyBy", "string", ""));
    result.push(new ColumnDef("pilotLicense", "string", ""));
    result.push(new ColumnDef("licenseTypes", "string", ""));
    result.push(new ColumnDef("licenseGroup", "string", ""));
    result.push(new ColumnDef("medicalCertClass", "string", ""));
    result.push(new ColumnDef("validations", "ValidationFlag", ""));
    result.push(new ColumnDef("isPilot", "boolean", ""));
    return result;
}

// Document entity represents a document in the system
class Document extends BaseEntity {
}
function GetDocumentColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("createdBy", "string", ""));
    result.push(new ColumnDef("activeFrom", "number", "datetime"));
    result.push(new ColumnDef("activeUntil", "number", "datetime"));
    result.push(new ColumnDef("category", "string", ""));
    result.push(new ColumnDef("revisions", "DocumentRevision", ""));
    result.push(new ColumnDef("activeRevision", "string", ""));
    result.push(new ColumnDef("activeUrl", "string", ""));
    result.push(new ColumnDef("activeMimeType", "string", ""));
    return result;
}

// Lesson includes flight instruction lesson details
class Lesson {
    constructor(number, subject, assessment, comments, flightCounter, instructedFlightTime, instrumentsFlightTime, soloFlightTime) {
        if (number !== undefined) {
            this.number = number;
        }
        if (subject !== undefined) {
            this.subject = subject;
        }
        if (assessment !== undefined) {
            this.assessment = assessment;
        }
        if (comments !== undefined) {
            this.comments = comments;
        }
        if (flightCounter !== undefined) {
            this.flightCounter = flightCounter;
        }
        if (instructedFlightTime !== undefined) {
            this.instructedFlightTime = instructedFlightTime;
        }
        if (instrumentsFlightTime !== undefined) {
            this.instrumentsFlightTime = instrumentsFlightTime;
        }
        if (soloFlightTime !== undefined) {
            this.soloFlightTime = soloFlightTime;
        }
    }
}

// RiskAssessment Risk Assessment Tool & Mitigation Strategies
class RiskAssessment {
    constructor(timestamp, pilotQualifications, crewDutyDay, departure, destination, trip, weather, other, mitigation) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (pilotQualifications !== undefined) {
            this.pilotQualifications = pilotQualifications;
        }
        if (crewDutyDay !== undefined) {
            this.crewDutyDay = crewDutyDay;
        }
        if (departure !== undefined) {
            this.departure = departure;
        }
        if (destination !== undefined) {
            this.destination = destination;
        }
        if (trip !== undefined) {
            this.trip = trip;
        }
        if (weather !== undefined) {
            this.weather = weather;
        }
        if (other !== undefined) {
            this.other = other;
        }
        if (mitigation !== undefined) {
            this.mitigation = mitigation;
        }
    }
}

// Mitigation risks mitigation strategy
class Mitigation {
    constructor(operationManagerEval, documentMitigation, mitigationStrategy, managerName, idNumber, flightNotApproved, followUpActions) {
        if (operationManagerEval !== undefined) {
            this.operationManagerEval = operationManagerEval;
        }
        if (documentMitigation !== undefined) {
            this.documentMitigation = documentMitigation;
        }
        if (mitigationStrategy !== undefined) {
            this.mitigationStrategy = mitigationStrategy;
        }
        if (managerName !== undefined) {
            this.managerName = managerName;
        }
        if (idNumber !== undefined) {
            this.idNumber = idNumber;
        }
        if (flightNotApproved !== undefined) {
            this.flightNotApproved = flightNotApproved;
        }
        if (followUpActions !== undefined) {
            this.followUpActions = followUpActions;
        }
    }
}

// FlightTicket entity is a single flight in the airplane
class FlightTicket extends BaseEntity {
}
function GetFlightTicketColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("ticketNumber", "number", ""));
    result.push(new ColumnDef("flightNumber", "number", ""));
    result.push(new ColumnDef("flightId", "string", ""));
    result.push(new ColumnDef("status", "TicketStatusCode", ""));
    result.push(new ColumnDef("customerName", "string", ""));
    result.push(new ColumnDef("customerEmail", "string", ""));
    return result;
}

// Lead entity is a lead in the CRM system
class Lead extends BaseEntity {
}
function GetLeadColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("firstName", "string", ""));
    result.push(new ColumnDef("lastName", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("phone", "string", ""));
    result.push(new ColumnDef("fax", "string", ""));
    result.push(new ColumnDef("mobile", "string", ""));
    result.push(new ColumnDef("email", "string", ""));
    result.push(new ColumnDef("primaryAddress", "Address", ""));
    result.push(new ColumnDef("leadSource", "string", ""));
    result.push(new ColumnDef("leadSourceDescription", "string", ""));
    result.push(new ColumnDef("campaignId", "string", ""));
    result.push(new ColumnDef("status", "LeadStatusCode", ""));
    result.push(new ColumnDef("referredBy", "string", ""));
    result.push(new ColumnDef("notes", "string", ""));
    result.push(new ColumnDef("assignedTo", "string", ""));
    result.push(new ColumnDef("price", "number", "decimal"));
    result.push(new ColumnDef("commission", "number", "decimal"));
    result.push(new ColumnDef("totalCost", "number", "decimal"));
    result.push(new ColumnDef("commissionPaid", "boolean", ""));
    return result;
}

// SystemMessage entity is a system message notification that all pilots must read and confirm
class SystemMessage extends BaseEntity {
}
function GetSystemMessageColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("subject", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("type", "MessageTypeCode", ""));
    result.push(new ColumnDef("priority", "PriorityCode", ""));
    result.push(new ColumnDef("groups", "string", ""));
    return result;
}

// Magneto model represents magneto metrics
class Magneto {
    constructor(inspectionFrequency, lastInspectionHours, nextInspectionHours, remainingHours) {
        if (inspectionFrequency !== undefined) {
            this.inspectionFrequency = inspectionFrequency;
        }
        if (lastInspectionHours !== undefined) {
            this.lastInspectionHours = lastInspectionHours;
        }
        if (nextInspectionHours !== undefined) {
            this.nextInspectionHours = nextInspectionHours;
        }
        if (remainingHours !== undefined) {
            this.remainingHours = remainingHours;
        }
    }
}

// AuditLog entity is a log entry in the audit log to track users / service account actions
class AuditLog extends BaseEntity {
}
function GetAuditLogColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("userId", "string", ""));
    result.push(new ColumnDef("userType", "UserTypeCode", ""));
    result.push(new ColumnDef("action", "string", ""));
    result.push(new ColumnDef("itemType", "string", ""));
    result.push(new ColumnDef("itemId", "string", ""));
    result.push(new ColumnDef("itemName", "string", ""));
    result.push(new ColumnDef("beforeChange", "string", ""));
    result.push(new ColumnDef("afterChange", "string", ""));
    return result;
}

// Credit entity is an accounting action
class Credit extends BaseEntity {
}
function GetCreditColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("type", "TransactionTypeCode", ""));
    result.push(new ColumnDef("amount", "number", "decimal"));
    result.push(new ColumnDef("currency", "CurrencyCode", ""));
    result.push(new ColumnDef("accountId", "string", ""));
    result.push(new ColumnDef("flightId", "string", ""));
    result.push(new ColumnDef("updatedBy", "string", ""));
    return result;
}

// TripRisks group of trip risk values
class TripRisks {
    constructor(twilightOperation, nightTimeOperation, repositioningFlight, popupTripLess4HrsNotice, internationalTrip) {
        if (twilightOperation !== undefined) {
            this.twilightOperation = twilightOperation;
        }
        if (nightTimeOperation !== undefined) {
            this.nightTimeOperation = nightTimeOperation;
        }
        if (repositioningFlight !== undefined) {
            this.repositioningFlight = repositioningFlight;
        }
        if (popupTripLess4HrsNotice !== undefined) {
            this.popupTripLess4HrsNotice = popupTripLess4HrsNotice;
        }
        if (internationalTrip !== undefined) {
            this.internationalTrip = internationalTrip;
        }
    }
}

// Address model represents an address
class Address {
    constructor(street, city, state, zipCode, country) {
        if (street !== undefined) {
            this.street = street;
        }
        if (city !== undefined) {
            this.city = city;
        }
        if (state !== undefined) {
            this.state = state;
        }
        if (zipCode !== undefined) {
            this.zipCode = zipCode;
        }
        if (country !== undefined) {
            this.country = country;
        }
    }
}

// Account entity is a billing account in the system
class Account extends BaseEntity {
}
function GetAccountColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("status", "AccountStatusCode", ""));
    result.push(new ColumnDef("phone", "string", ""));
    result.push(new ColumnDef("fax", "string", ""));
    result.push(new ColumnDef("mobile", "string", ""));
    result.push(new ColumnDef("billingAddress", "Address", ""));
    result.push(new ColumnDef("shippingAddress", "Address", ""));
    result.push(new ColumnDef("campaignId", "string", ""));
    result.push(new ColumnDef("enableCredit", "boolean", ""));
    result.push(new ColumnDef("currentCredit", "number", "decimal"));
    result.push(new ColumnDef("baseRate", "number", "decimal"));
    result.push(new ColumnDef("percentageDiscount", "number", ""));
    result.push(new ColumnDef("invoiceId", "string", ""));
    result.push(new ColumnDef("documents", "Document", ""));
    return result;
}

// Maintenance entity is an airplane airworthiness certificate
class Maintenance extends BaseEntity {
}
function GetMaintenanceColumnsDef() {
    let result = [];
    result.push(new ColumnDef("id", "string", ""));
    result.push(new ColumnDef("createdOn", "number", "datetime"));
    result.push(new ColumnDef("updatedOn", "number", "datetime"));
    result.push(new ColumnDef("name", "string", ""));
    result.push(new ColumnDef("description", "string", ""));
    result.push(new ColumnDef("airplaneId", "string", ""));
    result.push(new ColumnDef("documentId", "string", ""));
    result.push(new ColumnDef("hobs", "number", "decimal"));
    result.push(new ColumnDef("nextHobs", "number", "decimal"));
    result.push(new ColumnDef("tach", "number", "decimal"));
    result.push(new ColumnDef("nextTach", "number", "decimal"));
    result.push(new ColumnDef("validUntil", "number", "datetime"));
    result.push(new ColumnDef("status", "StatusCode", ""));
    result.push(new ColumnDef("component", "string", ""));
    result.push(new ColumnDef("action", "MaintenanceActionCode", ""));
    result.push(new ColumnDef("notifyAt", "number", "datetime"));
    result.push(new ColumnDef("subject", "string", ""));
    result.push(new ColumnDef("message", "string", ""));
    return result;
}

// BaseRestResponse is a common structure for all response types
class BaseRestResponse {
    constructor() {
        // Error code (0 for success)
        this.code = 0;
        // Error message
        this.error = '';
    }
}

// ActionResponse message is returned for any action on entity with no return data (e.d. delete)
class ActionResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Entity key
        this.key = '';
        // Additional data
        this.data = '';
    }
}

// EntitiesResponse message is returned for any action returning multiple entities
class EntityResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Current page (Bulk) number
        this.page = 0;
        // Size of page (items in bulk)
        this.size = 0;
        // Total number of pages
        this.pages = 0;
        // Total number of items in the query
        this.total = 0;
    }
}

// EntitiesResponse message is returned for any action returning multiple entities
class EntitiesResponse extends BaseRestResponse {
    constructor() {
        super(...arguments);
        // Current page (Bulk) number
        this.page = 0;
        // Size of page (items in bulk)
        this.size = 0;
        // Total number of pages
        this.pages = 0;
        // Total number of items in the query
        this.total = 0;
        // List of entities
        this.list = [];
    }
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, X-API-KEY, X-ACCESS-TOKEN, X-TIMEZONE, accept, origin, Cache-Control, X-Requested-With, Authorization, Content-Disposition, Content-Filename',
        'Access-Control-Exposed-Headers': 'X-API-KEY, X-ACCESS-TOKEN, X-TIMEZONE, Content-Disposition, Content-Filename',
    })
};
// Utility class for all REST services with common functions
class RestUtil {
    // Constructor with injected authentication service
    constructor(http) {
        this.http = http;
    }
    // Upload is HTTP POST action but the body is File object
    upload(file, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        const formData = new FormData();
        formData.append('fileKey', file, file.name);
        const req = new HttpRequest('POST', resourceUrl, formData, {
            reportProgress: false,
            responseType: 'json',
        });
        return this.http.request(req);
        //return this.http.request(req);
    }
    // Download is HTTP GET action but the content is blob
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        let downloadLink = fileName;
        // extract file name
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'filename') {
                    downloadLink = arr[1];
                }
            }
        });
        // Set content type for: json / csv / xml / pdf /xslx
        let contentType = this.getMimeType(downloadLink);
        return this.http.get(resourceUrl, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({ 'Content-Type': contentType })
        });
    }
    // Download2 is an alternative option to download
    download2(fileName, url, ...params) {
        let downloadLink = fileName;
        // extract file name
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'filename') {
                    downloadLink = arr[1];
                }
            }
        });
        let contentType = this.getMimeType(fileName);
        const link = document.createElement('a');
        link.href = this.buildUrl(url, ...params);
        link.download = downloadLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    // HTTP GET action
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.get(resourceUrl, httpOptions);
    }
    // HTTP POST action
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.post(resourceUrl, body, httpOptions);
    }
    // HTTP PUT action
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.put(resourceUrl, body, httpOptions);
    }
    // HTTP PATCH action
    patch(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.patch(resourceUrl, body, httpOptions);
    }
    // HTTP DELETE action
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.delete(resourceUrl, httpOptions);
    }
    // Construct URL with parameters
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    // Return MIME type based on file extension
    getMimeType(fileName) {
        // Set content type for: json / csv / xml / pdf /xslx
        let contentType = 'application/json';
        if (fileName.toLowerCase().endsWith('csv')) {
            contentType = 'text/csv';
        }
        else if (fileName.toLowerCase().endsWith('xml')) {
            contentType = 'text/xml';
        }
        else if (fileName.toLowerCase().endsWith('pdf')) {
            contentType = 'application/pdf';
        }
        else if (fileName.toLowerCase().endsWith('xlsx')) {
            contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        }
        return contentType;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: RestUtil }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class GooxConfig {
    constructor() {
        this.api = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: GooxConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: GooxConfig }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: GooxConfig, decorators: [{
            type: Injectable
        }] });

// AirplanesEndPoint Services for airplanes actions 
class AirplanesEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/airplanes';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new airplane
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing airplane
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete airplane and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single airplane by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find airplanes by query
     */
    find(search, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find airplane flights
     */
    findFlights(id, search, type, status, state, purpose, from, to, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (state != null) {
            params.push(`state=${state}`);
        }
        if (purpose != null) {
            params.push(`purpose=${purpose}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/flights`, ...params);
    }
    /**
     * Find airplane documents
     */
    findDocuments(id, search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/documents`, ...params);
    }
    /**
     * Find airplane maintenance log book
     */
    findMaintenance(id, search, status, action, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (action != null) {
            params.push(`action=${action}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/maintenance`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AirplanesEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AirplanesEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AirplanesEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// CreditsEndPoint Services for credits actions 
class CreditsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/credits';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new credit
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing credit
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete credit and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single credit by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find credits by query
     */
    find(search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CreditsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CreditsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CreditsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// DocumentsEndPoint Services for documents actions 
class DocumentsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/documents';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new document
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing document
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete document and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single document by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find documents by query
     */
    find(search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: DocumentsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: DocumentsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: DocumentsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// SystemMessagesEndPoint Services for systemMessages actions 
class SystemMessagesEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/system_messages';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new systemMessage
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing systemMessage
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete systemMessage and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single systemMessage by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find systemMessages by query
     */
    find(search, type, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find message confirmations
     */
    findConfirms(id, search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/confirms`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SystemMessagesEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SystemMessagesEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: SystemMessagesEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// AuditLogsEndPoint Services for auditLogs actions 
class AuditLogsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/audit_logs';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new auditLog
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get a single auditLog by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find auditLogs by query
     */
    find(from, to, userId, action, itemType, itemId, itemName, search, sort, page, size) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (action != null) {
            params.push(`action=${action}`);
        }
        if (itemType != null) {
            params.push(`itemType=${itemType}`);
        }
        if (itemId != null) {
            params.push(`itemId=${itemId}`);
        }
        if (itemName != null) {
            params.push(`itemName=${itemName}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find auditLogs count histogram over time
     */
    histogram(from, to, userId, action, itemType, itemId, itemName, search, sort, page, size) {
        const params = [];
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (action != null) {
            params.push(`action=${action}`);
        }
        if (itemType != null) {
            params.push(`itemType=${itemType}`);
        }
        if (itemId != null) {
            params.push(`itemId=${itemId}`);
        }
        if (itemName != null) {
            params.push(`itemName=${itemName}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/histogram`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AuditLogsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AuditLogsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AuditLogsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// CampaignsEndPoint Services for campaigns actions 
class CampaignsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/campaigns';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new campaign
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing campaign
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete campaign and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single campaign by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find campaigns by query
     */
    find(search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CampaignsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CampaignsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CampaignsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// FlightTicketsEndPoint Services for flightTickets actions 
class FlightTicketsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/flight_tickets';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new flightTicket
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing flightTicket
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete flightTicket and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single flightTicket by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find flightTickets by query
     */
    find(search, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightTicketsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightTicketsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightTicketsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// LeadsEndPoint Services for leads actions 
class LeadsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/leads';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new lead
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing lead
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete lead and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single lead by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find leads by query
     */
    find(search, type, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: LeadsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: LeadsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: LeadsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// UsersEndPoint Services for users actions 
class UsersEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new user
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing user
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete user and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single user by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find users by query
     */
    find(search, type, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsersEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsersEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UsersEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// AccountsEndPoint Services for user registration and login 
class AccountsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/accounts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new account
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single account by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find accounts by query
     */
    find(search, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find account flights
     */
    findFlights(id, search, airplaneId, type, status, state, purpose, from, to, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (airplaneId != null) {
            params.push(`airplaneId=${airplaneId}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (state != null) {
            params.push(`state=${state}`);
        }
        if (purpose != null) {
            params.push(`purpose=${purpose}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/flights`, ...params);
    }
    /**
     * Find account credits
     */
    findCredits(id, search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/credits`, ...params);
    }
    /**
     * Find related documents
     */
    findDocuments(id, search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/documents`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AccountsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AccountsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: AccountsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// FlightsEndPoint Services for flights actions 
class FlightsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/flights';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new flight
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing flight
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete flight and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single flight by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find flights by query
     */
    find(search, type, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find list of contacts (pilot / first officer) on this flight
     */
    findContacts(id, search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/contacts`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: FlightsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// MaintenancesEndPoint Services for maintenances actions 
class MaintenancesEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/maintenances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new maintenance
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing maintenance
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete maintenance and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single maintenance by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find maintenances by query
     */
    find(search, action, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (action != null) {
            params.push(`action=${action}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: MaintenancesEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: MaintenancesEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: MaintenancesEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// MessageConfirmsEndPoint Services for messageConfirms actions 
class MessageConfirmsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/message_confirms';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new messageConfirm
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/{id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing messageConfirm
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete messageConfirm and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single messageConfirm by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find messageConfirms by query
     */
    find(search, messageId, contactId, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (messageId != null) {
            params.push(`messageId=${messageId}`);
        }
        if (contactId != null) {
            params.push(`contactId=${contactId}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: MessageConfirmsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: MessageConfirmsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: MessageConfirmsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// UserEndPoint Services for user registration and login 
class UserEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/user';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Authorize user, verify user exists in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body) {
        return this.rest.post(`${this.baseUrl}/authorize`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UserEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UserEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: UserEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// BookingsEndPoint Services for bookings actions 
class BookingsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/bookings';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new booking
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing booking
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete booking and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single booking by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find bookings by query
     */
    find(search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: BookingsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: BookingsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: BookingsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// CertificatesEndPoint Services for certificates actions 
class CertificatesEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/certificates';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new certificate
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing certificate
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete certificate and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single certificate by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find certificates by query
     */
    find(search, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CertificatesEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CertificatesEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: CertificatesEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// ContactsEndPoint Services for contacts actions 
class ContactsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/contacts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new contact
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing contact
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete contact and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get a single contact by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find contacts by query
     */
    find(search, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find contact certificates by query
     */
    findCertificates(search, status, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/{id}/certificates`, ...params);
    }
    /**
     * Find contact related flights by query
     */
    findFlights(search, type, status, state, purpose, from, to, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (state != null) {
            params.push(`state=${state}`);
        }
        if (purpose != null) {
            params.push(`purpose=${purpose}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/{id}/flights`, ...params);
    }
    /**
     * Find message confirmations
     */
    findConfirms(id, search, sort, page, size) {
        const params = [];
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/confirms`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: ContactsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: ContactsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: ContactsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// Return a map of Enum values to enum strings
function MapEnumValues() {
    let result = new Map();
    result.set("FlightTypeCode.0", "UNDEFINED");
    result.set("FlightTypeCode.1", "GENERAL");
    result.set("FlightTypeCode.2", "OTHER");
    result.set("FlightTypeCode.3", "PRIVATE");
    result.set("FlightTypeCode.4", "PRIVATE_IFR");
    result.set("FlightTypeCode.5", "COMMERCIAL");
    result.set("FlightTypeCode.6", "COMMERCIAL_IFR");
    result.set("FlightTypeCode.7", "INSTRUCTION");
    result.set("FlightTypeCode.8", "INSTRUCTION_CVFR");
    result.set("FlightTypeCode.9", "INSTRUCTION_IFR");
    result.set("FlightTypeCode.10", "INSTRUCTION_NAV");
    result.set("FlightTypeCode.11", "INSTRUCTION_NIGHT");
    result.set("LeadStatusCode.0", "UNDEFINED");
    result.set("LeadStatusCode.1", "NEW");
    result.set("LeadStatusCode.2", "INPROCESS");
    result.set("LeadStatusCode.3", "ASSIGNED");
    result.set("LeadStatusCode.4", "CONVERTED");
    result.set("LeadStatusCode.5", "IRRELEVANT");
    result.set("LeadStatusCode.6", "REDIRECTED");
    result.set("LeadStatusCode.7", "RECYCLED");
    result.set("LeadStatusCode.8", "DEAD");
    result.set("MaintenanceActionCode.0", "UNDEFINED");
    result.set("MaintenanceActionCode.1", "NONE");
    result.set("MaintenanceActionCode.2", "INSPECTION");
    result.set("MaintenanceActionCode.3", "OVERHAUL");
    result.set("MaintenanceActionCode.4", "REISSUE");
    result.set("MaintenanceActionCode.5", "REPLACEMENT");
    result.set("MaintenanceActionCode.6", "WEIGHT");
    result.set("AirplaneStatusCode.0", "UNDEFINED");
    result.set("AirplaneStatusCode.1", "ACTIVE");
    result.set("AirplaneStatusCode.2", "INACTIVE");
    result.set("BillingStatusCode.0", "UNDEFINED");
    result.set("BillingStatusCode.1", "UNAPPROVED");
    result.set("BillingStatusCode.2", "APPROVED");
    result.set("BillingStatusCode.3", "CREATED_INVOICE");
    result.set("BillingStatusCode.4", "PENDING_INVOICE");
    result.set("BillingStatusCode.5", "MANUAL_INVOICE");
    result.set("BillingStatusCode.6", "CLOSED");
    result.set("BillingStatusCode.7", "CREDIT");
    result.set("BillingStatusCode.8", "CANCELLED");
    result.set("BillingStatusCode.9", "CANCELLED_BY_CLIENT");
    result.set("BillingStatusCode.10", "IRRELEVANT");
    result.set("CampaignStatusCode.0", "UNDEFINED");
    result.set("CampaignStatusCode.1", "PLANNING");
    result.set("CampaignStatusCode.2", "ACTIVE");
    result.set("CampaignStatusCode.3", "COMPLETED");
    result.set("CampaignStatusCode.4", "SUSPENDED");
    result.set("ConfirmStatusCode.0", "UNDEFINED");
    result.set("ConfirmStatusCode.1", "PENDING");
    result.set("ConfirmStatusCode.2", "APPROVED");
    result.set("ConfirmStatusCode.3", "REJECTED");
    result.set("CurrencyCode.0", "UNDEFINED");
    result.set("CurrencyCode.1", "ILS");
    result.set("CurrencyCode.2", "USD");
    result.set("CurrencyCode.3", "EUR");
    result.set("TicketStatusCode.0", "UNDEFINED");
    result.set("TicketStatusCode.1", "PENDING");
    result.set("TicketStatusCode.2", "SENT");
    result.set("UserStatusCode.0", "UNDEFINED");
    result.set("UserStatusCode.1", "PENDING");
    result.set("UserStatusCode.2", "ACTIVE");
    result.set("UserStatusCode.3", "BLOCKED");
    result.set("UserStatusCode.4", "SUSPENDED");
    result.set("UserTypeCode.0", "UNDEFINED");
    result.set("UserTypeCode.1", "SYSADMIN");
    result.set("UserTypeCode.2", "SUPPORT");
    result.set("UserTypeCode.3", "USER");
    result.set("UserTypeCode.4", "SERVICE");
    result.set("AccountStatusCode.0", "UNDEFINED");
    result.set("AccountStatusCode.1", "ACTIVE");
    result.set("AccountStatusCode.2", "INACTIVE");
    result.set("AccountStatusCode.3", "BLOCKED");
    result.set("AccountStatusCode.4", "SUSPENDED");
    result.set("CampaignTypeCode.0", "UNDEFINED");
    result.set("CampaignTypeCode.1", "WEB");
    result.set("CampaignTypeCode.2", "EMAIL");
    result.set("CampaignTypeCode.3", "TELESALES");
    result.set("FlightPurposeCode.0", "UNDEFINED");
    result.set("FlightPurposeCode.1", "INTRODUCTORY");
    result.set("FlightPurposeCode.2", "FLIGHT_LESSON");
    result.set("FlightPurposeCode.3", "RENTAL");
    result.set("FlightPurposeCode.4", "PRIVATE");
    result.set("FlightPurposeCode.5", "VERTICAL_PHOTO");
    result.set("FlightPurposeCode.6", "DIAGONAL_PHOTO");
    result.set("FlightPurposeCode.7", "ROUND");
    result.set("FlightPurposeCode.8", "CAA_TEST");
    result.set("FlightPurposeCode.9", "TRANSFER");
    result.set("FlightPurposeCode.10", "AIR_TAXI");
    result.set("FlightPurposeCode.11", "ENGINE_RUNNING");
    result.set("FlightPurposeCode.12", "OTHER");
    result.set("FlightStateCode.0", "UNDEFINED");
    result.set("FlightStateCode.1", "PENDING");
    result.set("FlightStateCode.2", "ACTIVE");
    result.set("FlightStateCode.3", "COMPLETED");
    result.set("FlightStatusCode.0", "UNDEFINED");
    result.set("FlightStatusCode.1", "REGISTERED");
    result.set("FlightStatusCode.2", "DELETE");
    result.set("FlightStatusCode.3", "CANCELLED");
    result.set("FlightStatusCode.4", "ABORTED");
    result.set("AirplaneValidationFlag.0", "UNDEFINED");
    result.set("AirplaneValidationFlag.1", "AIRWORTHINESS");
    result.set("AirplaneValidationFlag.2", "INSURANCE");
    result.set("AirplaneValidationFlag.4", "FLIGHT_MANUAL");
    result.set("AirplaneValidationFlag.8", "RADIO_STATION");
    result.set("AirplaneValidationFlag.16", "REGISTRATION_CERT");
    result.set("AirplaneValidationFlag.32", "FIRST_AID_KIT");
    result.set("AirplaneValidationFlag.64", "FIRE_EXTINGUISHER");
    result.set("AirplaneValidationFlag.128", "OPERATION_SPEC");
    result.set("AirplaneValidationFlag.256", "VALID_337_CAMERA");
    result.set("AirplaneValidationFlag.512", "VALID_337_EXHAUST");
    result.set("AirplaneValidationFlag.1024", "VALID_STC_CAMERA");
    result.set("AirplaneValidationFlag.2048", "VALID_STC_EXHAUST");
    result.set("AirplaneValidationFlag.4096", "FLIGHT_LOGBOOK");
    result.set("AirplaneValidationFlag.8192", "AIR_OPERATOR");
    result.set("AirplaneValidationFlag.16384", "AIRCRAFT_WEIGHT");
    result.set("AirplaneValidationFlag.32768", "PROPELLER_OVERHAUL");
    result.set("AirplaneValidationFlag.65536", "SINGLE_ENGINE_OVERHAUL");
    result.set("AirplaneValidationFlag.131072", "LEFT_ENGINE_OVERHAUL");
    result.set("AirplaneValidationFlag.262144", "RIGHT_ENGINE_OVERHAUL");
    result.set("AirplaneValidationFlag.524288", "LEFT_PROPELLER_OVERHAUL");
    result.set("AirplaneValidationFlag.1048576", "RIGHT_PROPELLER_OVERHAUL");
    result.set("AirplaneValidationFlag.2097152", "CVFR_ATS");
    result.set("AirplaneValidationFlag.4194304", "WEIGHT_BALANCE_FORM");
    result.set("AirplaneValidationFlag.8388608", "CHECK_LIST");
    result.set("AirplaneValidationFlag.16777216", "NOISE_CERT");
    result.set("MessageTypeCode.0", "UNDEFINED");
    result.set("MessageTypeCode.1", "INFO");
    result.set("MessageTypeCode.2", "MEMO");
    result.set("MessageTypeCode.3", "EXTERNAL_PROCEDURE");
    result.set("MessageTypeCode.4", "INTERNAL_PROCEDURE");
    result.set("MessageTypeCode.5", "INCIDENT");
    result.set("MessageTypeCode.6", "POLICY");
    result.set("MessageTypeCode.7", "REPAIR");
    result.set("ValidationFlag.0", "UNDEFINED");
    result.set("ValidationFlag.1", "MEDICAL_CERT");
    result.set("ValidationFlag.2", "PILOT_LICENSE");
    result.set("ValidationFlag.4", "SINGLE_ENG_CERT");
    result.set("ValidationFlag.8", "DUAL_ENG_CERT");
    result.set("ValidationFlag.16", "INST_666_CERT");
    result.set("ValidationFlag.32", "INST_REC_CERT");
    result.set("ValidationFlag.64", "DAYTIME_FLY");
    result.set("ValidationFlag.128", "NIGHTTIME_FLY");
    result.set("ValidationFlag.256", "NIGHT_CVFR_CUR");
    result.set("ValidationFlag.512", "ROUTE_EXAM");
    result.set("ValidationFlag.1024", "DI_CERT");
    result.set("ValidationFlag.2048", "INTERNATIONAL");
    result.set("ValidationFlag.4096", "ENGLISH_PROF");
    result.set("ValidationFlag.8192", "INSTRUCTOR_LICENSE");
    result.set("ValidationFlag.16384", "COMPANY_CHECK");
    result.set("ValidationFlag.32768", "COMPANY_EXAMIN");
    result.set("ValidationFlag.65536", "COMMERCIAL_172P");
    result.set("ValidationFlag.131072", "COMMERCIAL_172XP");
    result.set("ValidationFlag.262144", "COMMERCIAL_207");
    result.set("AssessmentCode.0", "UNDEFINED");
    result.set("AssessmentCode.1", "EXCELLENT");
    result.set("AssessmentCode.2", "SATISFACTORY");
    result.set("AssessmentCode.3", "BELOW_AVERAGE");
    result.set("AssessmentCode.4", "UNSATISFACTORY");
    result.set("AssessmentCode.5", "INCOMPLETE");
    result.set("AssessmentCode.6", "REPEAT");
    result.set("AssessmentCode.7", "DEMO");
    result.set("PaymentMethodCode.0", "UNDEFINED");
    result.set("PaymentMethodCode.1", "NONE");
    result.set("PaymentMethodCode.2", "CREDIT_CLIENT");
    result.set("PaymentMethodCode.3", "CARD");
    result.set("PaymentMethodCode.4", "CHECK");
    result.set("PaymentMethodCode.5", "CASH");
    result.set("PaymentMethodCode.6", "BANK");
    result.set("PriorityCode.0", "UNDEFINED");
    result.set("PriorityCode.1", "NONE");
    result.set("PriorityCode.2", "LOW");
    result.set("PriorityCode.3", "MEDIUM");
    result.set("PriorityCode.4", "HIGH");
    result.set("StatusCode.0", "UNDEFINED");
    result.set("StatusCode.1", "PENDING");
    result.set("StatusCode.2", "IN_PROCESS");
    result.set("StatusCode.3", "COMPLETED");
    result.set("StatusCode.4", "CANCELLED");
    result.set("StatusCode.5", "AUTO_CANCELLED");
    result.set("TransactionTypeCode.0", "UNDEFINED");
    result.set("TransactionTypeCode.1", "FLIGHT");
    result.set("TransactionTypeCode.2", "INSTRUCTION");
    result.set("TransactionTypeCode.3", "PURCHASE");
    result.set("TransactionTypeCode.4", "PAYMENT");
    result.set("TransactionTypeCode.5", "BONUS");
    result.set("TransactionTypeCode.6", "REFUND");
    return result;
}

const Services = [
    BookingsEndPoint,
    CertificatesEndPoint,
    ContactsEndPoint,
    AirplanesEndPoint,
    CreditsEndPoint,
    DocumentsEndPoint,
    SystemMessagesEndPoint,
    UsersEndPoint,
    AuditLogsEndPoint,
    CampaignsEndPoint,
    FlightTicketsEndPoint,
    LeadsEndPoint,
    UserEndPoint,
    AccountsEndPoint,
    FlightsEndPoint,
    MaintenancesEndPoint,
    MessageConfirmsEndPoint,
];

class NgxGooxLibModule {
    static forRoot(config) {
        return {
            ngModule: NgxGooxLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: NgxGooxLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.5", ngImport: i0, type: NgxGooxLibModule, imports: [CommonModule, HttpClientModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: NgxGooxLibModule, imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.5", ngImport: i0, type: NgxGooxLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule]
                }]
        }] });

/*
 * Public API Surface of ngx-goox-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Account, AccountStatusCode, AccountsEndPoint, ActionResponse, Address, Airplane, AirplaneStatusCode, AirplaneValidationFlag, AirplanesEndPoint, AssessmentCode, AuditLog, AuditLogsEndPoint, BaseEntity, BaseRestResponse, Billing, BillingRecord, BillingStatusCode, Booking, BookingsEndPoint, Campaign, CampaignStatusCode, CampaignTypeCode, CampaignsEndPoint, Certificate, CertificatesEndPoint, ColumnDef, ConfirmStatusCode, Contact, ContactsEndPoint, Credit, CreditsEndPoint, CrewDutyDayRisks, CurrencyCode, DepartureRisks, DestinationRisks, Document, DocumentRevision, DocumentsEndPoint, Engine, EntitiesResponse, EntityResponse, Flight, FlightPurposeCode, FlightStateCode, FlightStatusCode, FlightTicket, FlightTicketsEndPoint, FlightTypeCode, FlightsEndPoint, Fuel, GetAccountColumnsDef, GetAccountStatusCodes, GetAirplaneColumnsDef, GetAirplaneStatusCodes, GetAirplaneValidationFlags, GetAssessmentCodes, GetAuditLogColumnsDef, GetBillingStatusCodes, GetBookingColumnsDef, GetCampaignColumnsDef, GetCampaignStatusCodes, GetCampaignTypeCodes, GetCertificateColumnsDef, GetConfirmStatusCodes, GetContactColumnsDef, GetCreditColumnsDef, GetCurrencyCodes, GetDocumentColumnsDef, GetFlightColumnsDef, GetFlightPurposeCodes, GetFlightStateCodes, GetFlightStatusCodes, GetFlightTicketColumnsDef, GetFlightTypeCodes, GetLeadColumnsDef, GetLeadStatusCodes, GetMaintenanceActionCodes, GetMaintenanceColumnsDef, GetMessageConfirmColumnsDef, GetMessageTypeCodes, GetOperatorCodes, GetPaymentMethodCodes, GetPriorityCodes, GetStatusCodes, GetSystemConfigColumnsDef, GetSystemMessageColumnsDef, GetTicketStatusCodes, GetTransactionTypeCodes, GetUserColumnsDef, GetUserStatusCodes, GetUserTypeCodes, GetValidationFlags, GooxConfig, Lead, LeadStatusCode, LeadsEndPoint, Lesson, LoginParams, Magneto, Maintenance, MaintenanceActionCode, MaintenancesEndPoint, MapAccountStatusCodes, MapAirplaneStatusCodes, MapAirplaneValidationFlags, MapAssessmentCodes, MapBillingStatusCodes, MapCampaignStatusCodes, MapCampaignTypeCodes, MapConfirmStatusCodes, MapCurrencyCodes, MapEnumValues, MapFlightPurposeCodes, MapFlightStateCodes, MapFlightStatusCodes, MapFlightTypeCodes, MapLeadStatusCodes, MapMaintenanceActionCodes, MapMessageTypeCodes, MapOperatorCodes, MapPaymentMethodCodes, MapPriorityCodes, MapStatusCodes, MapTicketStatusCodes, MapTransactionTypeCodes, MapUserStatusCodes, MapUserTypeCodes, MapValidationFlags, MessageConfirm, MessageConfirmsEndPoint, MessageTypeCode, Mitigation, NgxGooxLibModule, OnBoard, OperatorCode, PaymentMethodCode, PilotQualificationsRisks, PriorityCode, Propeller, ReFuel, RestUtil, RiskAssessment, SpecialRisks, StatusCode, StringKeyValue, SystemConfig, SystemMessage, SystemMessagesEndPoint, TOLData, TicketStatusCode, TimeDataPoint, TimeFrame, TimeSeries, TokenData, TransactionTypeCode, TripRisks, Tuple, User, UserEndPoint, UserStatusCode, UserTypeCode, UsersEndPoint, ValidationFlag, WeatherRisks };
//# sourceMappingURL=ngx-goox-lib.mjs.map
