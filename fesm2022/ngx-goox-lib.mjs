import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpRequest, HttpClientModule } from '@angular/common/http';

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

// Account entity is a billing account in the system
class Account extends BaseEntity {
}

// AuditLog entity is a log entry in the audit log to track users / service account actions
class AuditLog extends BaseEntity {
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

// Document entity represents a document in the system
class Document extends BaseEntity {
}

// LoginParams model used for authorize user by email
class LoginParams {
    constructor(email) {
        if (email !== undefined) {
            this.email = email;
        }
    }
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

// Fuel model represents fuel metrics
class Fuel {
    constructor(tankSize, consumption, cost, estimatedFuelInTank, estimatedEndurance, lastUpdatedOn, lastUpdatedByFlight) {
        if (tankSize !== undefined) {
            this.totalTime = tankSize;
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

// Contact entity is a billing account in the system
class Contact extends BaseEntity {
}

// Airplane entity represents an airplane
class Airplane extends BaseEntity {
}

// Campaign entity represents a marketing campaign in the system
class Campaign extends BaseEntity {
}

// Lead entity is a lead in the CRM system
class Lead extends BaseEntity {
}

// User represents a human / system operator that has access to the system, and can perform operations
// User authentication is done by an external identity provider
class User extends BaseEntity {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: RestUtil }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class GooxConfig {
    constructor() {
        this.api = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: GooxConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: GooxConfig }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: GooxConfig, decorators: [{
            type: Injectable
        }] });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: AccountsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: AccountsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: AccountsEndPoint, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: AuditLogsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: AuditLogsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: AuditLogsEndPoint, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: CampaignsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: CampaignsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: CampaignsEndPoint, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ContactsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ContactsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ContactsEndPoint, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: DocumentsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: DocumentsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: DocumentsEndPoint, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: LeadsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: LeadsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: LeadsEndPoint, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: UserEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: UserEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: UserEndPoint, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: UsersEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: UsersEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: UsersEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

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

const Services = [
    UsersEndPoint,
    AccountsEndPoint,
    AuditLogsEndPoint,
    CampaignsEndPoint,
    ContactsEndPoint,
    DocumentsEndPoint,
    LeadsEndPoint,
    UserEndPoint,
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: NgxGooxLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.11", ngImport: i0, type: NgxGooxLibModule, imports: [CommonModule, HttpClientModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: NgxGooxLibModule, imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: NgxGooxLibModule, decorators: [{
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

export { Account, AccountStatusCode, AccountsEndPoint, ActionResponse, Address, Airplane, AirplaneStatusCode, AirplaneValidationFlag, AuditLog, AuditLogsEndPoint, BaseEntity, BaseRestResponse, Campaign, CampaignStatusCode, CampaignTypeCode, CampaignsEndPoint, Contact, ContactsEndPoint, CurrencyCode, Document, DocumentsEndPoint, Engine, EntitiesResponse, EntityResponse, Fuel, GetAccountStatusCodes, GetAirplaneStatusCodes, GetAirplaneValidationFlags, GetCampaignStatusCodes, GetCampaignTypeCodes, GetCurrencyCodes, GetLeadStatusCodes, GetUserStatusCodes, GetUserTypeCodes, GetValidationFlags, GooxConfig, Lead, LeadStatusCode, LeadsEndPoint, LoginParams, Magneto, MapAccountStatusCodes, MapAirplaneStatusCodes, MapAirplaneValidationFlags, MapCampaignStatusCodes, MapCampaignTypeCodes, MapCurrencyCodes, MapLeadStatusCodes, MapUserStatusCodes, MapUserTypeCodes, MapValidationFlags, NgxGooxLibModule, Propeller, RestUtil, StringKeyValue, TimeDataPoint, TimeFrame, TimeSeries, TokenData, Tuple, User, UserEndPoint, UserStatusCode, UserTypeCode, UsersEndPoint, ValidationFlag };
//# sourceMappingURL=ngx-goox-lib.mjs.map
