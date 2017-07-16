/* ===
Service for communcating authentication information
=== */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.model';

import { StateService } from '../services/state.service';

@Injectable()
export class SessionService {

  // Variables for communicating with the server
  private SERVER_BASE_URL = environment.serverBaseUrl;
  private enableCors = { withCredentials : true }; // options object for CORS

  constructor(
    private http: Http,
    private router: Router,
    private state: StateService
  ) { }

  login (userCred): any {
    // Return a promise that collapses to the server's response as json
    return this.http.post(
      this.SERVER_BASE_URL + '/login', // POST url
      userCred,                        // login credentials
      this.enableCors                  // options object for CORS
    )
    .toPromise() // convert observable into a promise
    .then((passme) => { console.log('here'); return passme; })
    .then(res => {
      this.state.user = new User(res.json()); // save the user's information into state
      this.state.visit('timonGomez'); // NOTE: temporary, for testing
      return this.state.activeVillager;
    });

  }

  logout (): any {
    // Logout the user on the client side
    this.router.navigate(['']);
    this.state.user = null;

    // Tell the server to end the session
    return this.http.get(this.SERVER_BASE_URL + '/logout')
    .toPromise()
    .then(res => res.json());
  }

  isLoggedIn (): any {
    return this.http.get(this.SERVER_BASE_URL + '/loggedin')
    .toPromise()
    .then(res => res.json());
  }

  signup (newUserCred): any {
    return this.http.post(
      this.SERVER_BASE_URL + '/signup',
      newUserCred, // signup credentials
      this.enableCors // do I need this? If not sending user back here
    )
    .toPromise()
    .then((res) => {
      if (res.status !== 200) { throw new Error('POST signup failed'); }
      return newUserCred;
    });
  }

}
