/*====
Component for a scrolling sidebar of users
====*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateService } from '../../../services/state.service';

import { Villager } from '../../../models/villager.model';

@Component({
  selector: 'home-avabar',
  templateUrl: './avabar.component.html',
  styleUrls: ['./avabar.component.scss']
})

export class AvabarComponent implements OnInit {

  @Output() onVisitModalRequested: EventEmitter<Villager> = new EventEmitter<Villager>();

  avil: Villager;
  vilList: Villager[];
  picPath: string = 'assets/profile-pictures/';

  constructor(private state: StateService) { }

  ngOnInit() {
    this.avil = this.state.activeVillager;
    this.vilList = this.state.user.villagers;
  }

  fireVisitModalRequested(vil: Villager) {
    this.onVisitModalRequested.emit(vil);
  }

}
