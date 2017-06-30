import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  private error : string;

  private username    : string;
  private password    : string = 'super';
  private fullname    : string = 'Dana Holmes';
  private kindOfUser  : string;
  private profPic     : string = 'assets/dana.jpg';

  private kindsOfUsers = [
    { value: 'Parent',  display: 'Parent'  },
    { value: 'Student', display: 'Student' },
    { value: 'Teacher', display: 'Teacher' }
  ];

  constructor(private session: SessionService) { }

  submitForm(form) {
    // Get a promise for the new user's object
    this.session.signup({
      'username'   : this.username,
      'password'   : this.password,
      'fullname'   : this.fullname,
      'kindOfUser' : this.kindOfUser,
      'profPic'    : this.profPic
    })
    .catch((err) => {
      this.error = err;
    });
  }

}
