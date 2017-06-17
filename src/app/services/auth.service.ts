import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

/* ===
This class holds various methods related to authentication
and communicating with the API
=== */

@Injectable()
export class AuthService {

  // Get the server's address
  SERVER_BASE_URL = environment.serverBaseUrl;
  postOptions = { withCredentials : true };

  constructor(private myHttp: Http) { }

  signup (newUserInfo) {
    // Get a promise for the new user object
    const thePromise = this.myHttp.post(
      this.SERVER_BASE_URL + '/signup',
      newUserInfo)
      .toPromise();

    // Return a promise that collapses to json
    return thePromise
    .then(result => {
      return result.json();
    })
  }

  login (credentials) {
    // Get a promise for the appropriate user object
    const thePromise = this.myHttp.post(
      this.SERVER_BASE_URL + '/login', // address
      credentials, // login information
      this.postOptions // object containing a required option
    ).toPromise();


    // Return a promise that collapses to json
    return thePromise
    .then(result => {
      return result.json();
    });
  }

  logout () {
    return this.myHttp.post('/logout', {})
      .toPromise()
      .then(result => result.json());
  }

  isLoggedIn () {
    return this.myHttp.get('/loggedin')
      .toPromise()
      .then(result => result.json());
  }

}
