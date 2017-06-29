/*====
Component for a scrolling sidebar of users
====*/

import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-avabar',
  templateUrl: './avabar.component.html',
  styleUrls: ['./avabar.component.scss']
})

export class AvabarComponent implements OnInit {

  currentStudent: any;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.currentStudent = this.state.currentStudent;
  }

}
