/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager-model';
import { Post } from '../../../../models/post-model';

@Component({
  selector: 'home-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  avil: Villager;
  posts: Post[];

  constructor(private state: StateService) { }

  ngOnInit() {
    this.avil = this.state.activeVillager;
    this.posts = this.state.posts;
  }

}
