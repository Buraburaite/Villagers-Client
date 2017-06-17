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
  cred = { withCredentials : true };

  constructor(private myHttp: Http) { }

  signup (user) {
    // Get a promise for the new user object
    const thePromise = this.myHttp.post('/signup', user).toPromise();

    // Return a promise that collapses to the json object
    return thePromise
    .then(result => {
      return result.json();
    })
  }

  login (credentials) {
    const theOriginalPromise = this.myHttp.post(this.SERVER_BASE_URL + '/login', credentials, this.cred).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
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
