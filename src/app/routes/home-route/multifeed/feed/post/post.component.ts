import { Component, OnInit, Input } from '@angular/core';
import { VisitationService } from '../../../../../services/visitation/visitation.service';

import { Villager } from '../../../../../models/villager.model';
import { Post } from '../../../../../models/post.model';

@Component({
  selector: 'feed-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() avil: Villager;
  @Input() post: Post;

  picPath: string = 'assets/profile-pictures/';

  constructor(private visitation: VisitationService) { }

  ngOnInit() {
  }

}
