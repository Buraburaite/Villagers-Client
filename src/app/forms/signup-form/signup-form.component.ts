import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  private error: string;

  private username: string;
  private password: string = 'super';

  constructor(private session: SessionService) { }

  submitForm(form) {
    // Get a promise for the new user's object
    this.session.signup({
      'username': this.username,
      'password': this.password
    })
    .catch((err) => {
      this.error = err;
    });
  }

}
