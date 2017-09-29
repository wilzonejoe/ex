import { NgModule } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RequestService } from './request.service';

@NgModule({
  imports: [],
  providers: [RequestService]
})
export class LoginService {
    constructor(private requestService: RequestService) { }

    register(username: String, password: String, email: String, successCB: Function, failCB: Function): Promise<boolean> {
      // Create signup body
      const content = JSON.stringify({
        USERNAME: username,
        PASSWORD: password,
        EMAIL: email
      });
      // Make request
      return this.requestService.makeRequest(content, successCB, failCB);
    }

    login(username: String, password: String, successCB: Function, failCB: Function): Promise<boolean> {
        // Create login body
        const content = JSON.stringify({
          USERNAME: username,
          PASSWORD: password
        });
        // Make request
        return this.requestService.makeRequest(content, successCB, failCB);
      }
}
