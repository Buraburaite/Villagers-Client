import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';

import { Villager } from '../../models/villager.model';

@Component({
  selector: 'visit-modal',
  templateUrl: './visit-modal.component.html',
  styleUrls: ['./visit-modal.component.scss']
})
export class VisitModalComponent implements OnInit {

  public visitation: any; // Must be a VisitationService
                          // (avoiding circular imports)
  public vilToVisit: Villager;

  private picPath: string = 'assets/profile-pictures/';

  constructor(
    /*====
    BsModalRef is a singleton, like all providers
    It references whichever BsModal is currently open
    ====*/
    private modalRef: BsModalRef
  ) {

  }

  ngOnInit() {
  }

  // NOTE: This needs to not be a circular import I think
  confirmVisit() {
    this.visitation.visit(this.vilToVisit);
    this.modalRef.hide();
  }

}
