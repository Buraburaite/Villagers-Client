/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager.model';
import { Post } from '../../../../models/post.model';

@Component({
  selector: 'home-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  get avil(): Villager { return this.state.activeVillager; }
  get posts(): Post[] { return this.state.posts; }

  constructor(private state: StateService) { }

  ngOnInit() {
  }

}
