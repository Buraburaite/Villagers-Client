import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable }  from 'rxjs/Rx';

import { StateService } from '../services/state.service';

@Injectable()
export class LoggedOutGuard implements CanActivate {

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return !this.state.user;
  }

  constructor(private state: StateService) { }

}
