import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  error: string;

  username: string = 'parent1';
  password: string = 'super';

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
      this.router.navigate(['home']);
    })
    .catch((err) => {
      this.error = err;
    });

    // this.session.login()
    // .catch(err => console.log(err));
  }

}
