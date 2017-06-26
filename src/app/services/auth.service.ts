/* ===
Service for communcating authentication information
=== */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  // Variables for communicating with the server
  SERVER_BASE_URL = environment.serverBaseUrl;
  enableCors = { withCredentials : true }; // options object for CORS

  constructor(private http: Http) {}

  handleError(err) {
    throw err.json().message; // need to test this out
  }

  login (userCred) {
    // Return a promise that collapses to the server's response as json
    return this.http.post(
      this.SERVER_BASE_URL + '/login', // POST url
      userCred,                        // login credentials
      this.enableCors                  // options object for CORS
    ).toPromise()                      // convert observable into a promise
    .then(res => res.json())          // collapse promise to json
    .catch(err => this.handleError(err));
  }

  logout () {
    return this.http.post( // can this be a get?
      this.SERVER_BASE_URL + '/logout',
      {} // do I need to pass the username, or are cookies handling this?
    ).toPromise()
    .then(res => res.json())
    .catch(err => this.handleError(err));
  }

  isLoggedIn () {
    return this.http.get(
      this.SERVER_BASE_URL + '/loggedin'
    ).toPromise()
    .then(res => res.json())
    .catch(err => this.handleError(err));
  }

  signup (newUserCred) {
    return this.http.post(
      this.SERVER_BASE_URL + '/signup',
      newUserCred, // signup credentials
      this.enableCors
    ).toPromise()
    .then(res => res.json())
    .catch(err => this.handleError(err));
  }

}
