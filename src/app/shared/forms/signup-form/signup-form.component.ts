import { Component } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['../form-parts.scss', './signup-form.component.scss']
})
export class SignupFormComponent {

  private error: string;

  private username: string;
  private password: string = 'testtest';

  constructor(
    private session: SessionService,
    private state: StateService
  ) { }

  submitForm(form) {
    const userCred = {
      'username': this.username,
      'password': this.password
    };

    this.session.signup(userCred) // try to create the user
    .then((userCred) => this.session.login(userCred)) // log them in
    .then((avil) => {
      this.state.visit(avil.vilname);
    })
    .catch((err) => {
      console.log(err);
      this.error = err;
    });
  }

}
