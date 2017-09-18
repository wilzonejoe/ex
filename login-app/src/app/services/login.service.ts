import { NgModule } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: []
})
export class LoginService {
    url = 'https://trixd5mgs7.execute-api.us-east-1.amazonaws.com/prod/LOGIN';
    constructor(private http: Http) { }
    login(username: String, password: String): Promise<boolean> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://aws-app-bucket-2.s3-website-us-east-1.amazonaws.com');
        const content = JSON.stringify({
          USERNAME: username,
          PASSWORD: password
        });

        return this.http.post(this.url, content)
          .toPromise()
          .then(response => response.json().data)
          .catch(this.handleError);
      }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}
