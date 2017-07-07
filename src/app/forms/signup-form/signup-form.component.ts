import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  submitForm(form) {
    const userCred = {
      'username': this.username,
      'password': this.password
    };

    this.session.signup(userCred) // try to create the user
    .then((userCred) => this.session.login(userCred)) // log them in
    .then((user) => {
      this.router.navigate(['', user.username]);
    })
    .catch((err) => {
      console.log(err);
      this.error = err;
    });
  }

}
