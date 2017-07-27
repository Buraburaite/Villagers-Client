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
  @Input() filter: any = 'none';

  get posts(): Post[] { return this.avil.subscribedPosts; }

  constructor() { }

  ngOnInit() {
    console.log(this.avil.vilname, this.posts);
  }

  scrollToTop(e: Event): void {
  }

}
