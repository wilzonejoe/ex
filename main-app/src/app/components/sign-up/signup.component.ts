import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormsModule } from '@angular/forms';

// Import in request service
@Component({
  selector: 'app-signup', // Application scope
  templateUrl: 'signup.template.html'
})
export class SignupComponent {
  body = {}; // Request body
  username = '';
  password = '';
  email = '';
  emailConf = '';
  signup() {
    if (this.email !== this.emailConf) return; // Exit if emails Don't match
    this.body = {
        USERNAME : this.username,
        PASSWORD : this.password,
        EMAIL : this.email
    }
    // Request Service with
  }
}
