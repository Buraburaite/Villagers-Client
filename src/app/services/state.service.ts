import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { User } from '../models/user.model';
import { Villager } from '../models/villager.model';
import { Post } from '../models/post.model';

@Injectable()
export class StateService {

  user: User;
  activeVillager: Villager;

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

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  getVillager(vilname: string): Villager {
    return this.user.getVillager(vilname);
  }

  visit(vilname): void {
    this.activeVillager = this.user.getVillager(vilname);
    this.router.navigate(['', vilname]);
  }

  // This, combined with the scrollTracker directive,
  // is a hack meant to allow multifeed tabs
  // 'remember' their scroll positions.
  // It's temporary and fragile, but functional.
  private _currentTab: string = '';
  get currentTab (): string { return this._currentTab; }
  set currentTab(value: string) {
    this._currentTab = value;

    const multifeedDiv = this.document.getElementById('multifeed-div');
    multifeedDiv.scrollTop = this.tabs[value];
  }
  tabs: any = {};
}
