import { Injectable } from '@angular/core';

import { User } from '../models/user-model';
import { Villager } from '../models/villager-model';

@Injectable()
export class StateService {

  user: User;
  activeVillager: Villager;

  constructor() { }

  visit(vilname): void {
    this.activeVillager = this.user.getVillager(vilname);
  }
}
