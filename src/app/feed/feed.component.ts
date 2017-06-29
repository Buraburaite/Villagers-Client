/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  user: any;
  currentStudent: any;

  posts: any[];

  constructor(private state: StateService) { }

  ngOnInit() {
    this.user = this.state.user;
    this.currentStudent = this.state.currentStudent;
    this.posts = this.currentStudent.teachers[0].posts;
  }

}
