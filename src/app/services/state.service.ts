import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { Villager } from '../models/villager.model';
import { Post } from '../models/post.model';

@Injectable()
export class StateService {

  user: User;
  activeVillager: Villager; // the Villager whose account is being accessed
  visitedVils: Villager[] = []; // villagers that have been visited already

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

  constructor(private router: Router) { }

  // cast vilname string to Villager obj
  getVillager(vilname: string): Villager {
    return this.user.getVillager(vilname);
  }

  // change the active villager
  visit(vilname): void {
    const vilToVisit = this.user.getVillager(vilname);
    this.activeVillager = vilToVisit;
    this.router.navigate(['', vilname]);

    const hasBeenVisited =
    !!this.visitedVils
    .find(vil => vil.vilname === vilname);

    if (!hasBeenVisited) {
      this.visitedVils.push(this.user.getVillager(vilname));
    }
  }
}
