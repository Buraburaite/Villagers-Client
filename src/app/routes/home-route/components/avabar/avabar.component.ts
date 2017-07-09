/*====
Component for a scrolling sidebar of users
====*/

import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { User } from '../../../../models/user-model';

@Component({
  selector: 'home-avabar',
  templateUrl: './avabar.component.html',
  styleUrls: ['./avabar.component.scss']
})

export class AvabarComponent implements OnInit {

  user: User;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.user = this.state.user;
  }

}
