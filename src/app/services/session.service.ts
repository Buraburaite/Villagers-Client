/* ===
Service for communcating authentication information
=== */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

  user: any;

  // Variables for communicating with the server
  private SERVER_BASE_URL = environment.serverBaseUrl;
  private enableCors = { withCredentials : true }; // options object for CORS

  constructor(private http: Http) {}

  login (userCred) {
    // Return a promise that collapses to the server's response as json
    return this.http.post(
      this.SERVER_BASE_URL + '/login', // POST url
      userCred,                        // login credentials
      this.enableCors                  // options object for CORS
    ).toPromise()                      // convert observable into a promise
    .then(res => {
      this.user = res.json();          // extract the user information
      return this.user;
    });

  }

  logout () {
    return this.http.post( // can this be a get?
      this.SERVER_BASE_URL + '/logout',
      {} // do I need to pass the username, or are cookies handling this?
    ).toPromise()
    .then(res => res.json());
  }

  isLoggedIn () {
    return this.http.get(
      this.SERVER_BASE_URL + '/loggedin'
    ).toPromise()
    .then(res => res.json());
  }

  signup (newUserCred) {
    return this.http.post(
      this.SERVER_BASE_URL + '/signup',
      newUserCred, // signup credentials
      this.enableCors
    ).toPromise()
    .then(res => {
      console.log(res);
      return res;
    })
    .then(res => res.json());
  }

}
