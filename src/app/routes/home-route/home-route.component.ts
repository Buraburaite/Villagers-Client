import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { StateService } from '../../services/state.service';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { Villager } from './../../models/villager.model';

@Component({
  selector: 'home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {

  @ViewChild('visitModal') private visitModal:ModalDirective;

  private vilToVisit: Villager;
  private picPath: String = 'src/assets/profile-pictures/'

  constructor (
    private session : SessionService,
    private state : StateService
  ) {

    // this.session.login({
    //   username: 'test',
    //   password: 'test'
    // })
    // .then((avil) => {
    //   this.state.visit(avil.vilname);
    // });
  }

  ngOnInit() {
  }

  onVisitModalRequested(vil: Villager) {
    this.vilToVisit = vil;
    this.visitModal.show();
  }
}
