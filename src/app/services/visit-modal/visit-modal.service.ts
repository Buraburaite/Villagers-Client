import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { VisitModalComponent } from './visit-modal.component';

import { Villager } from '../../models/villager.model';

@Injectable()
export class VisitModalService {

  private modalRef: BsModalRef;

  constructor(private modalMaker: BsModalService) { }

  show(vilToVisit: Villager) {
    this.modalRef = this.modalMaker.show(VisitModalComponent);
    const content = this.modalRef.content;

    content.vilToVisit = vilToVisit;
  }

}
