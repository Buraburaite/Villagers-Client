import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() user: any;
  @Input() comments: any[];

  newCommentText: string;

  constructor() { }

  ngOnInit() {
  }

  submitComment(value: string){
    this.comments.push({
      author: this.user,
      content: value,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    });

    this.newCommentText = '';
  }

}
