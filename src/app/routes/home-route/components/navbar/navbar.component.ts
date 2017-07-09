/*====
Component for the navbar
====*/

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../services/session.service';
import { StateService } from '../../../../services/state.service';

import { User } from '../../../../models/user-model';

@Component({
  selector: 'home-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;
  logoImage: string = "logo.png";

  constructor(
    private session: SessionService,
    private state: StateService
  ) {
    this.user = this.state.user;
  }

  ngOnInit() {
  }

  logout(e: Event) {
    this.session.logout();
  }

  // Dropdown selection events, left here for later reference
  // studentToggled(open:boolean):void {
  // }
  // profileToggled(open:boolean):void {
  // }

}
