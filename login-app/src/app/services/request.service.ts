import { NgModule } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@NgModule({
    imports: []
})
export class RequestService {
    // Field var
    constructor(private http: Http) { }

    /**
     * @function getDefaultOptions
     * @desc Gets the default headers to allow posting to AWS
     * API Gateway
     * @returns {RequestOptions}
     */
    private _getDefaultOptions(): RequestOptions {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new RequestOptions({ headers: headers });
    }

    /**
     * @function makeRequest
     * @param body
     * @param successCB
     * @param failCB
     * @return {Promise}
     */
    public makePostRequest(body, successCB, failCB, url): Promise<boolean> {
        return this.http.post(url, body, this._getDefaultOptions())
            .toPromise()
            .then(response => successCB(response.json()))
            .catch(error => failCB(error));
    }

    /**
     * @function _makeRequest
     * @param body
     * @param successCB
     * @param failCB
     * @return {Promise}
     */
    public makePutRequest(body, successCB, failCB, url): Promise<boolean> {
        return this.http.put(url, body, this._getDefaultOptions())
            .toPromise()
            .then(response => successCB(response.json()))
            .catch(error => failCB(error));
    }
}
