import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { VisitModalComponent } from './visit-modal.component';

import { StateService } from '../state.service';

import { Villager } from '../../models/villager.model';

@Injectable()
export class VisitationService {

  activeVillager: Villager; // the Villager whose account is being accessed
  visitedVils: Villager[] = []; // villagers that have been visited already

  private modalRef: BsModalRef;


  constructor(
    private state: StateService,
    private router: Router,
    private modalMaker: BsModalService
  ) { }

  // change the active villager
  visit(vilToVisit: any): void {

    // type check
    if (typeof vilToVisit === 'string') {
      vilToVisit = this.state.getVillager(vilToVisit);
    }

    const visitName = vilToVisit.vilname;

    this.activeVillager = vilToVisit;
    this.router.navigate(['', visitName]);

    const hasBeenVisited =
    !!this.visitedVils
    .find(vil => vil.vilname === visitName);

    if (!hasBeenVisited) { this.visitedVils.push(vilToVisit); }
  }

  showModal(vilToVisit: Villager) {
    this.modalRef = this.modalMaker.show(VisitModalComponent);
    const content = this.modalRef.content;

    content.vilToVisit = vilToVisit;
  }

}
