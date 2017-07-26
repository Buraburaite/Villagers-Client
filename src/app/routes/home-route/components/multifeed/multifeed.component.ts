import { Component, OnInit } from '@angular/core';
import { FeedComponent } from '../feed/feed.component'

@Component({
  selector: 'home-multifeed',
  templateUrl: './multifeed.component.html',
  styleUrls: ['./multifeed.component.scss']
})
export class MultiFeedComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  changeTab(e: any): void {
    console.log(e.target.text);
  }

  isActiveTab(e: any): Boolean {

  }
}
