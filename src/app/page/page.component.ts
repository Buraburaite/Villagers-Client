/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, OnInit, Input, HostListener } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() user: any;
  @Input() posts: any[];

  constructor() { }

  ngOnInit() {

  }

  // trying to implement infinite scrolling but only in the element
  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
      console.log("scrolling");
    }

}
