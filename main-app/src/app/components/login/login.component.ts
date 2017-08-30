import { Component } from '@angular/core';
// Import in request service
@Component({
  selector: 'app-login', // Application scope
  templateUrl: 'login.template.html'
})
export class AppComponent {
  username = '';
  password = '';
  login(username: string, password: string) {
    this.username = username;
    this.password = password;
    // Request Service with
  }
}
