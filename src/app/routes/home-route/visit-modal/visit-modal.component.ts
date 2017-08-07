import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Villager } from '../../../models/villager.model';

@Component({
  selector: 'app-visit-modal',
  templateUrl: './visit-modal.component.html',
  styleUrls: ['./visit-modal.component.scss']
})
export class VisitModalComponent implements OnInit {

  private vilToVisit: Villager;
  private picPath: string = 'assets/profile-pictures/';

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  onVisitModalRequested(vil: Villager) {
    this.vilToVisit = vil;
    // this.visitModal.show();
  }

  confirmVisit(vil: Villager) {
    this.state.visit(vil.vilname);
    // this.visitModal.hide();
  }

}
