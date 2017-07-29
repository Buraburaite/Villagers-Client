/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, Input } from '@angular/core';

import { Villager } from '../../../../../models/villager.model';
import { Post } from '../../../../../models/post.model';

@Component({
  selector: 'multifeed-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  @Input() avil: Villager;
  @Input() filters: String[] = [];

  get posts(): Post[] {
    if (!this.filters || !this.filters.length) {
      return this.avil.subscribedPosts;
    }
    return this.avil.subscribedPosts.filter((post) => {
      return this.filters.includes(post.author.kind);
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
