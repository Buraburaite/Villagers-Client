import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() onLogin = new EventEmitter<any>();

  error: string;

  username: string;
  password: string;

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  submitForm(loginForm) {
    // Get a promise for the user's object
    this.session.login({
      'username': loginForm.username,
      'password': loginForm.password
    })
    .then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      this.changeCurrentStudent(this.user.students[0]);
    })
    .catch((err) => {
      this.user = null;
      this.error = err;
    });

    // this.session.login()
    // .catch(err => console.log(err));
  }

}
