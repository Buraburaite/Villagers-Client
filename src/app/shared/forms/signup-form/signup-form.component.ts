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
  private password: string;// = 'testtest';
  private confirmPassword: string;// = 'testtest';

  constructor(
    private session: SessionService,
    private state: StateService
  ) { }

  submitForm(form): void {
    const userCred = {
      'username': this.username,
      'password': this.password
    };

    this.session.signup(userCred) // try to create the user
    .then((userCred) => this.session.login(userCred)) // log them in
    .catch((err) => {
      console.log(err);
      this.error = err;
    });
  }

  clearConfirm(): void {
    this.confirmPassword = '';
  }

  pwMatch(): boolean {
    // this.pas
    return this.password === this.confirmPassword;
  }

}
