import { Component, OnInit, Input } from '@angular/core';
import { VisitationService } from '../../../../../../services/visitation/visitation.service';

import { Villager } from '../../../../../../models/villager.model';
import { Comment } from '../../../../../../models/comment.model';

@Component({
  selector: 'post-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() avil: Villager;
  @Input() comments: Comment[];

  newCommentText: string;
  picPath: string = 'assets/profile-pictures/';

  constructor(private visitation: VisitationService) { }

  ngOnInit() {
  }

  submitComment(value: string){
    this.comments.push(
      new Comment({
        author: this.avil,
        content: value,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    );

    this.newCommentText = '';
  }

}
