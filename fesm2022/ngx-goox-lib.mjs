import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpRequest, HttpClientModule } from '@angular/common/http';

// Contact entity is a billing account in the system
class Contact extends BaseEntity {
}

// Document entity represents a document in the system
class Document extends BaseEntity {
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

// AuditLog entity is a log entry in the audit log to track users / service account actions
class AuditLog extends BaseEntity {
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
    let result = new Map();
    result.set(AccountStatusCode.UNDEFINED, 'Undefined');
    result.set(AccountStatusCode.ACTIVE, 'Active');
    result.set(AccountStatusCode.INACTIVE, 'Inactive');
    result.set(AccountStatusCode.BLOCKED, 'Blocked');
    result.set(AccountStatusCode.SUSPENDED, 'Suspended');
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
    let result = new Map();
    result.set(CampaignStatusCode.UNDEFINED, 'Undefined');
    result.set(CampaignStatusCode.PLANNING, 'Planning');
    result.set(CampaignStatusCode.ACTIVE, 'Active');
    result.set(CampaignStatusCode.COMPLETED, 'Completed');
    result.set(CampaignStatusCode.SUSPENDED, 'Suspended');
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
    let result = new Map();
    result.set(CampaignTypeCode.UNDEFINED, 'Undefined');
    result.set(CampaignTypeCode.WEB, 'Web');
    result.set(CampaignTypeCode.EMAIL, 'Email');
    result.set(CampaignTypeCode.TELESALES, 'Telesales');
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RestUtil }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class GooxConfig {
    constructor() {
        this.api = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: GooxConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: GooxConfig }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: GooxConfig, decorators: [{
            type: Injectable
        }] });

// DocumentsEndPoint Services for documents actions 
// @Path: /v1/documents 
class DocumentsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new document
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/documents`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing document
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/documents`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete document and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/documents`);
    }
    /**
     * Get a single document by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/documents`);
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
        return this.rest.get(`${this.baseUrl}/v1/documents`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: DocumentsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: DocumentsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: DocumentsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// LeadsEndPoint Services for leads actions 
// @Path: /v1/leads 
class LeadsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new lead
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/leads`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing lead
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/leads`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete lead and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/leads`);
    }
    /**
     * Get a single lead by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/leads`);
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
        return this.rest.get(`${this.baseUrl}/v1/leads`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: LeadsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: LeadsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: LeadsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// UserEndPoint Services for user registration and login 
// @Path: /v1/user 
class UserEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Authorize user, verify user against account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body) {
        return this.rest.post(`${this.baseUrl}/user/authorize`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: UserEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: UserEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: UserEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// UsersEndPoint Services for users actions 
// @Path: /v1/users 
class UsersEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new user
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/users`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing user
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/users`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete user and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/users`);
    }
    /**
     * Get a single user by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/users`);
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
        return this.rest.get(`${this.baseUrl}/v1/users`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: UsersEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: UsersEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: UsersEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// AccountsEndPoint Services for user registration and login 
// @Path: /v1/accounts 
class AccountsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new account
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/accounts`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/sys/accounts`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/sys/accounts`);
    }
    /**
     * Get a single account by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/sys/accounts`);
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
        return this.rest.get(`${this.baseUrl}/v1/sys/accounts`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AccountsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AccountsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AccountsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// AuditLogsEndPoint Services for auditLogs actions 
// @Path: /v1/audit_logs 
class AuditLogsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new auditLog
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/audit_logs`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get a single auditLog by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/audit_logs`);
    }
    /**
     * Find auditLogs by query
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
        return this.rest.get(`${this.baseUrl}/v1/audit_logs`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AuditLogsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AuditLogsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: AuditLogsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// CampaignsEndPoint Services for campaigns actions 
// @Path: /v1/campaigns 
class CampaignsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new campaign
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/campaigns`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing campaign
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/campaigns`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete campaign and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/campaigns`);
    }
    /**
     * Get a single campaign by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/campaigns`);
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
        return this.rest.get(`${this.baseUrl}/v1/campaigns`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: CampaignsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: CampaignsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: CampaignsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

// ContactsEndPoint Services for contacts actions 
// @Path: /v1/contacts 
class ContactsEndPoint {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new contact
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/v1/contacts`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing contact
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/v1/contacts`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete contact and all its content
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/v1/contacts`);
    }
    /**
     * Get a single contact by id
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/v1/contacts`);
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
        return this.rest.get(`${this.baseUrl}/v1/contacts`, ...params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: ContactsEndPoint, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: ContactsEndPoint }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: ContactsEndPoint, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: GooxConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }] });

const Services = [
    ContactsEndPoint,
    DocumentsEndPoint,
    LeadsEndPoint,
    UserEndPoint,
    UsersEndPoint,
    AccountsEndPoint,
    AuditLogsEndPoint,
    CampaignsEndPoint,
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: NgxGooxLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.7", ngImport: i0, type: NgxGooxLibModule, imports: [CommonModule, HttpClientModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: NgxGooxLibModule, imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.7", ngImport: i0, type: NgxGooxLibModule, decorators: [{
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

export { Account, AccountStatusCode, AccountsEndPoint, ActionResponse, Address, AuditLog, AuditLogsEndPoint, BaseEntity, BaseRestResponse, Campaign, CampaignStatusCode, CampaignTypeCode, CampaignsEndPoint, Contact, ContactsEndPoint, CurrencyCode, Document, DocumentsEndPoint, EntitiesResponse, EntityResponse, GetAccountStatusCodes, GetCampaignStatusCodes, GetCampaignTypeCodes, GetCurrencyCodes, GetLeadStatusCodes, GetUserStatusCodes, GetUserTypeCodes, GooxConfig, Lead, LeadStatusCode, LeadsEndPoint, LoginParams, NgxGooxLibModule, RestUtil, TimeFrame, TokenData, User, UserEndPoint, UserStatusCode, UserTypeCode, UsersEndPoint };
//# sourceMappingURL=ngx-goox-lib.mjs.map
