/*====
Component for a scrolling sidebar of users
====*/

import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-peeps',
  templateUrl: './peeps.component.html',
  styleUrls: ['./peeps.component.scss']
})

export class PeepsComponent implements OnInit {

  @Input() currentStudent: any;

  isClosed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
