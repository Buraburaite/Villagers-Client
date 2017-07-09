/*====
Component for the navbar
====*/

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../services/session.service';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager-model';

@Component({
  selector: 'home-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  avil: Villager;
  logoImage: string = "assets/logo.png";
  picPath: string = 'assets/profile-pictures/';

  constructor(
    private session: SessionService,
    private state: StateService
  ) {
    this.avil = this.state.activeVillager;
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
