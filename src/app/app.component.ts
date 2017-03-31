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

  loginInfo = { "username" : "parent1", "password" : "super" };
  signupInfo = {};

  user: any;
  error: string;
  myData: any;

  currentStudent: any;
  posts: any[];

  login() {
    const thePromise = this.session.login(this.loginInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      this.changeCurrentStudent(this.user.students[0]);
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  signup() {
    const thePromise = this.session.signup(this.signupInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
    });

    thePromise.catch((err) => {
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

  changeCurrentStudent(selectedStudent: any) {
    this.currentStudent = selectedStudent;
    this.changePosts(this.currentStudent);
  }

  changePosts(selectedStudent: any) {
    this.posts = [];
    selectedStudent.teachers.forEach((teacher) => {
      teacher.posts.forEach((post) => {
        this.posts.push(post);
      });
    });
  }

  // pistachioPosts: any[] = [{
  //   author :  {
  //     userId: 'blah7',
  //     firstName: 'Terrance',
  //     lastName: 'Pistachio',
  //     fullName: 'The Pistachio',
  //     profilePic: 'assets/prof.png',
  //   },
  //   content:  `Everyone should have affordable access to healthcare.
  //   Whether you think it is a human right or not, we don't get to call ourselves
  //   the best country in the world when money decides who lives or dies.
  //   "Health" isn't a product, and whoever tells you otherwise isn't at risk of
  //   not being able to afford it.`,
  //   comments: [{
  //     author: {
  //       userId: 'blah2',
  //       firstName: 'Blabby',
  //       lastName: 'McPearson',
  //       fullName: 'Blabby McPearson',
  //       profilePic: 'assets/prof.png'
  //     },
  //     content: "Hi, I have a problem with this. How dare you, sir?",
  //     updatedAt: new Date('2016-11-16T00:00:00'),
  //     createdAt: new Date('2015-11-16T00:00:00')
  //   },{
  //     author: {
  //       userId: 'blah3',
  //       firstName: 'Funky',
  //       lastName: 'Munnki',
  //       fullName: 'Funky Munnki',
  //       profilePic: 'assets/ramsey.jpg'
  //     },
  //     content: "Well then. How shall I receive my satisfaction now?",
  //     updatedAt: new Date('2016-11-16T00:00:00'),
  //     createdAt: new Date('2015-11-16T00:00:00')
  //   }]
  // },{
  //   author : {
  //     userId: 'blah7',
  //     firstName: 'Terrance',
  //     lastName: 'Pistachio',
  //     fullName: 'The Pistachio',
  //     profilePic: 'assets/prof.png',
  //   },
  //   content: `Samurai Jack bois its the best show I've seen in a while`,
  //   comments: [{
  //     author: {
  //       userId: 'blah2',
  //       firstName: 'Blabby',
  //       lastName: 'McPearson',
  //       fullName: 'Blabby McPearson',
  //       profilePic: 'assets/prof.png'
  //     },
  //     content: `Wha? It's back? No waaaayyyyy`,
  //     updatedAt: new Date('2016-10-16T00:00:00'),
  //     createdAt: new Date('2015-10-16T00:00:00')
  //   }]
  // }];
  //
  // user: any = {
  //   userId: 'blah4',
  //   firstName: 'Parent',
  //   lastName: 'Storms',
  //   fullName: 'Mr. Storms',
  //   profilePic: 'assets/prof.png',
  //   students: [{
  //     userId: 'blah5',
  //     firstName: 'Sally',
  //     lastName: 'Storms',
  //     fullName: 'Sally Storms',
  //     profilePic: 'assets/ramsey.jpg',
  //     schoolName: 'Generic Middle School',
  //     teachers: [{
  //       userId: 'blah1',
  //       firstName: 'Samantha',
  //       lastName: 'Blueberry',
  //       fullName: 'Ms. Blueberry',
  //       profilePic: 'assets/ramsey.jpg',
  //       posts: []
  //     },{
  //       userId: 'blah7',
  //       firstName: 'Terrance',
  //       lastName: 'Pistachio',
  //       fullName: 'The Pistachio',
  //       profilePic: 'assets/prof.png',
  //       posts: this.pistachioPosts
  //     }]
  //   },{
  //     userId: 'blah6',
  //     firstName: 'Raphael',
  //     lastName: 'Storms',
  //     fullName: 'Raphael Storms',
  //     profilePic: 'assets/spicy.png',
  //     schoolName: 'Sky High',
  //     teachers: [{
  //       userId: 'blah1',
  //       firstName: 'Samantha',
  //       lastName: 'Blueberry',
  //       fullName: 'Ms. Blueberry',
  //       profilePic: 'assets/ramsey.jpg',
  //       posts: []
  //     }]
  //   }]
  // };

}
