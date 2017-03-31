import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  BASE_URL = '';
  // BASE_URL = 'http://localhost:3000';
  cred = { withCredentials : true };

  constructor(private myHttp: Http) { }

  signup (user) {
    const theOriginalPromise = this.myHttp.post('/signup', user).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  login (credentials) {
    const theOriginalPromise = this.myHttp.post(this.BASE_URL + '/login', credentials, this.cred).toPromise();

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
