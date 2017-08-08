/*====
Component for a scrolling sidebar of users
====*/

import { Component, OnInit } from '@angular/core';

import { StateService } from '../../../services/state.service';
import { VisitationService } from '../../../services/visitation/visitation.service';

import { Villager } from '../../../models/villager.model';

@Component({
  selector: 'home-avabar',
  templateUrl: './avabar.component.html',
  styleUrls: ['./avabar.component.scss']
})

export class AvabarComponent implements OnInit {

  avil: Villager;
  vilList: Villager[] = [];
  picPath: string = 'assets/profile-pictures/';

  constructor(
    private state: StateService,
    private visitation: VisitationService
  ) {
    this.vilList = this.visitation.visitedVils;
  }

  ngOnInit() {
    this.avil = this.visitation.activeVillager;
  }

  showVisitModal(vilToVisit: Villager): void {
    this.visitation.showModal(vilToVisit);
  }
}
