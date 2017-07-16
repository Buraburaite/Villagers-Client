/*====
Component for the navbar
====*/

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../services/session.service';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager.model';

@Component({
  selector: 'home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {

  get avil(): Villager { return this.state.activeVillager; }
  logoImage: string = 'assets/logo.png';
  picPath: string = 'assets/profile-pictures/';

  constructor(
    private session: SessionService,
    private state: StateService
  ) { }

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
