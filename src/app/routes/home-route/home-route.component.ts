import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {

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
}
