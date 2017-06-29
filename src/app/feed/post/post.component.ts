import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() user: any;
  @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

}
