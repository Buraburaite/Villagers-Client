import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { Villager } from '../models/villager.model';
import { Post } from '../models/post.model';

@Injectable()
export class StateService {

  user: User;

  // all the villagers
  get villagers(): Villager[] {
    return this.user.villagers;
  }

  // all the posts from all the villagers
  get posts(): Post[] {
    return this.villagers.reduce(
      (acc: Post[], vil) => acc.concat(vil.posts),
      []
    );
  }

  constructor() { }

  // cast vilname string to Villager obj
  getVillager(vilname: string): Villager {
    return this.user.getVillager(vilname);
  }

}
