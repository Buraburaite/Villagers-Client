/*====
Component containing everything besides the navbar and sidebar
====*/

import { Component, OnInit, Input, Directive, HostListener } from '@angular/core';

@Directive({ selector: 'infinite-scroll' })
class infiniteScroll {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  console.log($event);
  console.log("scrolling");
}
}
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

}
