import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { VisitComponent } from './visit.component';

import { Villager } from '../../models/villager.model';

@Injectable()
export class VisitService {

  private modalRef: BsModalRef;

  constructor(private modalMaker: BsModalService) { }

  show(vilToVisit: Villager) {
    this.modalRef = this.modalMaker.show(VisitComponent);
    const content = this.modalRef.content;

    content.vilToVisit = vilToVisit;
  }

}
