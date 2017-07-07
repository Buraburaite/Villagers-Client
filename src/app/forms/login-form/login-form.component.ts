import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  private error: string;

  private username: string = 'test';
  private password: string = 'test';

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  submitForm(form) {
    // Get a promise for the user's object
    this.session.login({
      'username': this.username,
      'password': this.password
    })
    .then((user) => {
      console.log('here2', user);
      this.router.navigate(['', this.username]);
    })
    .catch((err) => {
      // Clear the password field on each attempt
      this.password = '';

      this.error = err;
    });
  }

}
