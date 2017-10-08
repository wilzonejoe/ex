import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginService: LoginService;
  router: Router;

  // Login States
  isLoginState: Boolean;
  isSignUpState: Boolean;
  isConfirmState: Boolean;

  // Login var
  password: String;
  username: String;

  // Signin var
  sPassword: String;
  sConfPassword: String;
  sUsername: String;
  sEmail: String;
  sConfEmail: String;

  // Comfirm var
  confirmCode: String;
  confirmUsername: String;

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit() {
    this.isLoginState = true; // Start on login screen
    // this.isConfirmState = true; // debugger
    // this.isSignUpState = true; // debugger
  }

  /***************************
   * Page transition functions
   ***************************/

  onSwitchToSignup(): void {
    this.isLoginState = false; 
    this.isSignUpState = true;
    this.isConfirmState = false;
  }

  onSwitchToConfirm(): void {
    this.isLoginState = false; 
    this.isSignUpState = false;
    this.isConfirmState = true;
    //  Add to the username to url
    this.router.navigate(['/'],{ queryParams: { username : this.sUsername } });
  }

  onSwitchToLogin(): void {
    this.isLoginState = true; 
    this.isSignUpState = false;
    this.isConfirmState = false;
  }

    /*****************************************
   * Login / Signin / Confirm Action buttons
   *****************************************/

  onLoginButtonClicked(): void  {
    console.log('Login', this.username, this.password);
    this.loginService.login(this.username, this.password,
      function (response) {
        console.log('Success', response);
        // Storing current installed user details
        localStorage.setItem('currentUser', JSON.stringify(response));
        // window.location.href = "https://google.com"; // To application root
        alert('Successfully logged in, '+ this.username);
     }, function (response) {
      console.log('Fail', response);
      // Username or Password is wrong.
    });
  }

  onSignUpButtonClicked(): void {
    console.log('Sign Up', this.sUsername, this.sPassword, this.sConfPassword,
      this.sEmail, this.sConfEmail);
      this.loginService.register(this.sUsername, this.sPassword, this.sEmail,
        // Move to confirm page
        this.onSwitchToConfirm.bind(this),
        function (response) {
        console.log('Fail', response);
        // Something was wrong with either the request body or the service
      });
  }

  onSignUpConfirmButtonClicked(): void {
    // Get username from url link from email
    console.log(window.location);
    // e.g. http://localhost:4200/?username=albert
    this.confirmUsername = this.router.parseUrl(this.router.url).queryParams["username"];
    console.log('Sign Up Comfirm', this.confirmCode, this.confirmUsername);
    this.loginService.confirm(this.confirmUsername, this.confirmCode,
      function (response) {
        console.log('Success Confirmation', response);
        // Add user name to the url

        // If success show banner of success
        alert('Successfully confirmed account, please login');
        // Click banner to go to login page
     }, function (response) {
      console.log('Fail Confirmation', response);
      // Something was wrong with either the request body or the service
    });
  }
}