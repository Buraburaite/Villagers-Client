import { Component } from '@angular/core';
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

  constructor(private session: SessionService) { }

  submitForm(form) {
    // Get a promise for the user's object
    console.log('here - login');
    this.session.login({
      'username': this.username,
      'password': this.password
    })
    .catch((err) => {
      console.log('here - login catch');
      this.error = err;
    });

    // this.session.login()
    // .catch(err => console.log(err));
  }

}
