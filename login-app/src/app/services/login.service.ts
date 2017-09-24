import { NgModule } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: []
})
export class LoginService {
    url = 'https://trixd5mgs7.execute-api.us-east-1.amazonaws.com/prod/LOGIN';
    constructor(private http: Http) { }
    
    register(username: String, password: String, email: String, successCB: Function, failCB: Function): Promise<boolean> {
      // Create headers
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = new RequestOptions({ headers: headers });        
      // Create signup body
      const content = JSON.stringify({
        USERNAME: username,
        PASSWORD: password,
        EMAIL: email
      });
      // Make request
      return this.http.post(this.url, content, options)
        .toPromise()
        .then(response => successCB(response.json()))
        .catch(error => failCB(error));
    }

    login(username: String, password: String, successCB: Function, failCB: Function): Promise<boolean> {
        // Create headers    
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({ headers: headers });        
        // Create login body        
        const content = JSON.stringify({
          USERNAME: username,
          PASSWORD: password
        });
        // Make request
        return this.http.post(this.url, content, options)
          .toPromise()
          .then(response => successCB(response.json()))
          .catch(error => failCB(error));
      }

    
}
