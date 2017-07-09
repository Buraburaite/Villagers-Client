import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../../../../models/user-model';
import { Comment } from '../../../../../../models/comment-model';

@Component({
  selector: 'post-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() user: User;
  @Input() comments: Comment[];

  newCommentText: string;

  constructor() { }

  ngOnInit() {
  }

  submitComment(value: string){
    this.comments.push(
      new Comment({
      author: this.user,
      content: value
    })
  );

    this.newCommentText = '';
  }

}
