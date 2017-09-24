import { NgModule } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: []
})
export class LoginService {
    url = 'https://trixd5mgs7.execute-api.us-east-1.amazonaws.com/prod/LOGIN';
    constructor(private http: Http) { }
    login(username: String, password: String, successCB: Function, failCB: Function): Promise<boolean> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({ headers: headers });        
        const content = JSON.stringify({
          USERNAME: username,
          PASSWORD: password
        });

        return this.http.post(this.url, content, options)
          .toPromise()
          .then(response => successCB(response.json()))
          .catch(error => failCB(error));
      }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}
