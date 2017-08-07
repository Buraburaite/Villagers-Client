/*====
Component for a scrolling sidebar of users
====*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { StateService } from '../../../services/state.service';
import { VisitModalComponent } from '../visit-modal/visit-modal.component';

import { Villager } from '../../../models/villager.model';

@Component({
  selector: 'home-avabar',
  templateUrl: './avabar.component.html',
  styleUrls: ['./avabar.component.scss']
})

export class AvabarComponent implements OnInit {

  avil: Villager;
  visitModal: BsModalRef;
  vilList: Villager[] = [];
  picPath: string = 'assets/profile-pictures/';

  constructor(
    private state: StateService,
    private modalMaker: BsModalService
  ) {
    this.vilList = this.state.visitedVils;
  }

  ngOnInit() {
    this.avil = this.state.activeVillager;
  }

  openModal(): void {
    this.visitModal = this.modalMaker.show(VisitModalComponent);
    const visitComp = this.visitModal.content;

    visitComp.vilToVisit = this.avil;
  }


}
