/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { User } from '../../../../models/user-model';
import { Post } from '../../../../models/post-model';

@Component({
  selector: 'home-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  user: User;
  posts: Post[];

  constructor(private state: StateService) { }

  ngOnInit() {
    this.user = this.state.user;
    this.posts = this.user.getVillager('blueberry').posts;
  }

}
