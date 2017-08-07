import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    '../input-styles.scss',
    './login-form.component.scss'
  ]
})
export class LoginFormComponent {

  private error: string;

  private username: string;// = 'test';
  private password: string;// = 'testtest';

  constructor(
    private session: SessionService
  ) { }

  submitForm(form) {
    // Get a promise for the user's object
    this.session.login({
      'username': this.username,
      'password': this.password
    })
    .catch((err) => {
      // Clear the password field on each attempt
      this.password = '';

      this.error = err;
      console.log(err);
    });
  }

}
