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

  get posts(): Post[] {
    // let posts = this.state.posts;
    //
    // if (!this.filter || this.filter === 'none') {
    //   return avil.parents.map(vil => vil.posts).concat(
    //     avil.students.map(vil => vil.posts),
    //     avil.teachers.map(vil => vil.posts)
    //   );
    // } else {
    //   return avil[filter].map(vil => vil.posts);
    // }
    return this.avil.students[0].teachers[0].posts;
  }

  constructor() { }

  ngOnInit() {
  }

}
