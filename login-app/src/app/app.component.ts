import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginService: LoginService;
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

  constructor() {}

  ngOnInit() {
    this.isLoginState = true; // Start on login screen
    this.onInitStatePage();
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
     }, function (response) {
      console.log('Fail', response);
      // Username or Password is wrong.
    });
  }

  onSignUpButtonClicked(): void {
    console.log('Sign Up', this.sUsername, this.sPassword, this.sConfPassword,
      this.sEmail, this.sConfEmail);
  }

  onSignUpConfirmButtonClicked(): void {
    console.log('Sign Up Comfirm', this.confirmCode, this.sUsername,
    this.sPassword, this.sConfPassword, this.sEmail, this.sConfEmail);
  }

  /***************************
   * Page transition functions
   ***************************/

  onInitStatePage(): void {
    // Get param in the address bar
    console.log('Start', this.isLoginState);
  }

  onSwitchToSignup(): void {
    this.isLoginState = false; 
    this.isSignUpState = true;
    this.isConfirmState = false;
    // Change the address in the bar
    // Change the page state var
  }

  onSwitchToConfirm(): void {
    this.isLoginState = false; 
    this.isSignUpState = false;
    this.isConfirmState = true;
    // Change the address in the bar
    // Change the page state var
  }

  onSwitchToLogin(): void {
    this.isLoginState = true; 
    this.isSignUpState = false;
    this.isConfirmState = false;
    // Change the address in the bar
    // Change the page state var
  }
}