import { NgModule } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RequestService } from './request.service';

@NgModule({
  imports: [],
  providers: [RequestService]
})
export class LoginService {
    loginUrl = 'https://trixd5mgs7.execute-api.us-east-1.amazonaws.com/prod/LOGIN';
    registerUrl = 'https://trixd5mgs7.execute-api.us-east-1.amazonaws.com/prod/SIGNUP';
    // confirmUrl = 'https://trixd5mgs7.execute-api.us-east-1.amazonaws.com/prod/LOGIN';
    
    constructor(private requestService: RequestService) { }

    register(username: String, password: String, email: String, successCB: Function, failCB: Function): Promise<boolean> {
      // Create signup body
      const content = JSON.stringify({
        USERNAME: username,
        PASSWORD: password,
        EMAIL: email
      });
      // Make request
      return this.requestService.makeRequest(content, successCB, failCB, this.registerUrl);
    }

    confirm(username: String, code: String, successCB, failCB): Promise<boolean>{
      // Create signup body
      const content = JSON.stringify({
        USERNAME: username,
        CODE: code
      });
      // Make request
      return this.requestService.makeRequest(content, successCB, failCB, this.registerUrl);
    }

    login(username: String, password: String, successCB: Function, failCB: Function): Promise<boolean> {
        // Create login body
        const content = JSON.stringify({
          USERNAME: username,
          PASSWORD: password
        });
        // Make request
        return this.requestService.makeRequest(content, successCB, failCB, this.loginUrl);
      }
}
