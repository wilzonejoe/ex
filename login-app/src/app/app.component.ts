import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService) {}
  password: String;
  username: String;
  onLoginButtonClicked(): void  {
    console.log(this.username, this.password);
    this.loginService.login(this.username, this.password, 
      function (response) {
        console.log('Success', response);
        // Storing current installed user details      
        localStorage.setItem('currentUser', JSON.stringify(response));
        window.location.href = "https://google.com";
     }, function (response) {
      console.log('Fail', response);
      // Username or Password is wrong.   
    });
  }
}
