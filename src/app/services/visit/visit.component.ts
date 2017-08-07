import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';

import { Villager } from '../../models/villager.model';

@Component({
  selector: 'visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  vilToVisit: Villager;
  private picPath: string = 'assets/profile-pictures/';

  constructor(
    private state: StateService,
    /*====
    BsModalRef is a singleton, like all providers
    It references whichever BsModal is currently open
    ====*/
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  confirmVisit() {
    this.state.visit(this.vilToVisit.vilname);
    this.modalRef.hide();
  }

}
