import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (private session : AuthService) { }

  ngOnInit() {
    this.login();
  }

  // Hard-coded credentials for testing
  loginInfo = { "username" : "parent1", "password" : "super" };
  signupInfo = {};

  user: any;
  error: string;
  currentStudent: any; // the user's currently selected student
  posts: any[];

  // Authentication methods

  login() {
    // Get a promise for the user's object
    const thePromise = this.session.login(this.loginInfo);

    thePromise
    .then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      this.changeCurrentStudent(this.user.students[0]);
    })
    .catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  logout() {
    this.session.logout()
    .then(() => {
      this.user = null;
      this.error = null;
    })
    .catch(err => this.error = err);
  }

  signup() {
    // Get a promise for the new user's object
    const thePromise = this.session.signup(this.signupInfo);

    thePromise
    .then((userInfo) => {
      this.user = userInfo;
      this.error = null;
    })
    .catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  // Update the page when current student changes
  changeCurrentStudent(selectedStudent: any) {
    this.currentStudent = selectedStudent;

    // Update the posts that appear
    const newPosts = [];
    selectedStudent.teachers.forEach((teacher) => {
      teacher.posts.forEach((post) => {
        newPosts.push(post);
      });
    });
    this.posts = newPosts;
  }
}
