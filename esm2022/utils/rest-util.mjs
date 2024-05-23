import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
export class RestUtil {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: RestUtil }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy91dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFHNUUsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO1FBQ3ZCLGNBQWMsRUFBRyxrQkFBa0I7UUFDbkMsZUFBZSxFQUFFLG9CQUFvQjtRQUNyQyw2QkFBNkIsRUFBRSxHQUFHO1FBQ2xDLDhCQUE4QixFQUFFLDJNQUEyTTtRQUMzTyxnQ0FBZ0MsRUFBRSw4RUFBOEU7S0FDakgsQ0FBQztDQUNILENBQUM7QUFHRiw0REFBNEQ7QUFFNUQsTUFBTSxPQUFPLFFBQVE7SUFFbkIsbURBQW1EO0lBQ25ELFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLHlEQUF5RDtJQUN6RCxNQUFNLENBQUksSUFBVSxFQUFFLEdBQVcsRUFBRSxHQUFHLE1BQWdCO1FBRXBELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFbEQsTUFBTSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLE1BQU0sR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO1lBQ3pELGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztR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Q0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDcEksQ0FBQztJQUVELDJDQUEyQztJQUNuQyxXQUFXLENBQUMsUUFBZ0I7UUFDbEMscURBQXFEO1FBQ3JELElBQUksV0FBVyxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQzFCO2FBQU0sSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDMUI7YUFBTSxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakQsV0FBVyxHQUFHLGlCQUFpQixDQUFDO1NBQ2pDO2FBQU0sSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xELFdBQVcsR0FBRyxtRUFBbUUsQ0FBQTtTQUNsRjtRQUNELE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7K0dBM0hVLFFBQVE7bUhBQVIsUUFBUTs7NEZBQVIsUUFBUTtrQkFEcEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXN0b3JlJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZSwgQ29udGVudC1MZW5ndGgsIEFjY2VwdC1FbmNvZGluZywgWC1DU1JGLVRva2VuLCBYLUFQSS1LRVksIFgtQUNDRVNTLVRPS0VOLCBYLVRJTUVaT05FLCBhY2NlcHQsIG9yaWdpbiwgQ2FjaGUtQ29udHJvbCwgWC1SZXF1ZXN0ZWQtV2l0aCwgQXV0aG9yaXphdGlvbiwgQ29udGVudC1EaXNwb3NpdGlvbiwgQ29udGVudC1GaWxlbmFtZScsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUV4cG9zZWQtSGVhZGVycyc6ICdYLUFQSS1LRVksIFgtQUNDRVNTLVRPS0VOLCBYLVRJTUVaT05FLCBDb250ZW50LURpc3Bvc2l0aW9uLCBDb250ZW50LUZpbGVuYW1lJyxcbiAgfSlcbn07XG5cblxuLy8gVXRpbGl0eSBjbGFzcyBmb3IgYWxsIFJFU1Qgc2VydmljZXMgd2l0aCBjb21tb24gZnVuY3Rpb25zXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzdFV0aWwge1xuXG4gIC8vIENvbnN0cnVjdG9yIHdpdGggaW5qZWN0ZWQgYXV0aGVudGljYXRpb24gc2VydmljZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8vIFVwbG9hZCBpcyBIVFRQIFBPU1QgYWN0aW9uIGJ1dCB0aGUgYm9keSBpcyBGaWxlIG9iamVjdFxuICB1cGxvYWQ8VD4oZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcblxuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG5cbiAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVLZXknLCBmaWxlLCBmaWxlLm5hbWUpO1xuXG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgcmVzb3VyY2VVcmwsIGZvcm1EYXRhLCB7XG4gICAgICByZXBvcnRQcm9ncmVzczogZmFsc2UsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3Q8VD4ocmVxKTtcbiAgICAvL3JldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXEpO1xuICB9XG5cbiAgLy8gRG93bmxvYWQgaXMgSFRUUCBHRVQgYWN0aW9uIGJ1dCB0aGUgY29udGVudCBpcyBibG9iXG4gIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcblxuICAgIGxldCBkb3dubG9hZExpbmsgPSBmaWxlTmFtZVxuXG4gICAgLy8gZXh0cmFjdCBmaWxlIG5hbWVcbiAgICBwYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgIGxldCBhcnIgPSBwLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKGFyclswXS50b0xvd2VyQ2FzZSgpID09PSAnZmlsZW5hbWUnKSB7XG4gICAgICAgICAgZG93bmxvYWRMaW5rID0gYXJyWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgY29udGVudCB0eXBlIGZvcjoganNvbiAvIGNzdiAvIHhtbCAvIHBkZiAveHNseFxuICAgIGxldCBjb250ZW50VHlwZSA9IHRoaXMuZ2V0TWltZVR5cGUoZG93bmxvYWRMaW5rKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHJlc291cmNlVXJsLCB7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cycsXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogY29udGVudFR5cGUgfSlcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERvd25sb2FkMiBpcyBhbiBhbHRlcm5hdGl2ZSBvcHRpb24gdG8gZG93bmxvYWRcbiAgZG93bmxvYWQyKGZpbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG5cbiAgICBsZXQgZG93bmxvYWRMaW5rID0gZmlsZU5hbWVcblxuICAgIC8vIGV4dHJhY3QgZmlsZSBuYW1lXG4gICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICBsZXQgYXJyID0gcC5zcGxpdCgnPScpO1xuICAgICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChhcnJbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGVuYW1lJykge1xuICAgICAgICAgIGRvd25sb2FkTGluayA9IGFyclsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGNvbnRlbnRUeXBlID0gdGhpcy5nZXRNaW1lVHlwZShmaWxlTmFtZSk7XG5cbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIGxpbmsuZG93bmxvYWQgPSBkb3dubG9hZExpbms7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcblxuICB9XG5cbiAgLy8gSFRUUCBHRVQgYWN0aW9uXG4gIGdldDxUPih1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4ocmVzb3VyY2VVcmwsIGh0dHBPcHRpb25zKVxuICB9XG5cbiAgLy8gSFRUUCBQT1NUIGFjdGlvblxuICBwb3N0PFQ+KHVybDogc3RyaW5nLCBib2R5Pzogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4ocmVzb3VyY2VVcmwsIGJvZHksIGh0dHBPcHRpb25zKVxuICB9XG5cbiAgLy8gSFRUUCBQVVQgYWN0aW9uXG4gIHB1dDxUPih1cmw6IHN0cmluZywgYm9keT86IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VD4ocmVzb3VyY2VVcmwsIGJvZHksIGh0dHBPcHRpb25zKVxuICB9XG5cbiAgLy8gSFRUUCBQQVRDSCBhY3Rpb25cbiAgcGF0Y2g8VD4odXJsOiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2g8VD4ocmVzb3VyY2VVcmwsIGJvZHksIGh0dHBPcHRpb25zKVxuICB9XG5cbiAgLy8gSFRUUCBERUxFVEUgYWN0aW9uXG4gIGRlbGV0ZTxUPih1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8VD4ocmVzb3VyY2VVcmwsIGh0dHBPcHRpb25zKVxuICB9XG5cbiAgLy8gQ29uc3RydWN0IFVSTCB3aXRoIHBhcmFtZXRlcnNcbiAgcHJpdmF0ZSBidWlsZFVybCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiAocGFyYW1zID09PSBudWxsKSA/IHVybCA6IChwYXJhbXMubGVuZ3RoID09PSAwKSA/IHVybCA6IGAke3VybH0ke3BhcmFtcyAmJiBwYXJhbXMubGVuZ3RoID4gMCA/ICc/JytwYXJhbXMuam9pbignJicpIDogJyd9YDtcbiAgfVxuXG4gIC8vIFJldHVybiBNSU1FIHR5cGUgYmFzZWQgb24gZmlsZSBleHRlbnNpb25cbiAgcHJpdmF0ZSBnZXRNaW1lVHlwZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBTZXQgY29udGVudCB0eXBlIGZvcjoganNvbiAvIGNzdiAvIHhtbCAvIHBkZiAveHNseFxuICAgIGxldCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICBpZiAoZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnY3N2JykpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQvY3N2JztcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3htbCcpKSB7XG4gICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L3htbCc7XG4gICAgfSBlbHNlIGlmIChmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCdwZGYnKSkge1xuICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vcGRmJztcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3hsc3gnKSkge1xuICAgICAgY29udGVudFR5cGUgPSBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0XCJcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnRUeXBlXG4gIH1cbn1cbiJdfQ==