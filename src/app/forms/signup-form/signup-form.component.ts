import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  error: string;

  username: string;
  password: string;

  constructor(private session: SessionService) { }

  submitForm(form) {
    // Get a promise for the new user's object
    console.log('here - signup');
    this.session.signup({
      'username': this.username,
      'password': this.password
    })
    .catch((err) => {
      console.log('here - signup catch');
      this.error = err;
    });
  }

}
