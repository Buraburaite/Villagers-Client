/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager.model';
import { Post } from '../../../../models/post.model';

@Component({
  selector: 'home-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() filter: any = 'none';

  get avil(): Villager { return this.state.activeVillager; }
  get posts(): any[] {
    let avil = this.state.activeVillager;
    let filter = this.filter;
    let posts = this.state.posts;

    if (!this.filter || this.filter === 'none') {
      return avil.parents.map(vil => vil.posts).concat(
        avil.students.map(vil => vil.posts),
        avil.teachers.map(vil => vil.posts)
      );
    } else {
      return avil[filter].map(vil => vil.posts);
    }
  }

  constructor(private state: StateService) { }

  ngOnInit() {
  }

}
