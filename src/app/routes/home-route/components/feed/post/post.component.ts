import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../../../models/user-model';
import { Post } from '../../../../../models/post-model';

@Component({
  selector: 'page-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() user: User;
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
