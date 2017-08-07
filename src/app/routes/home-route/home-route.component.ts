import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { VisitationService } from '../../services/visitation/visitation.service';

@Component({
  selector: 'home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {

  constructor (
    private session : SessionService,
    private visitation : VisitationService
  ) {

    // this.session.login({
    //   username: 'test',
    //   password: 'test'
    // })
    // .then((avil) => {
    //   this.visitation.visit(avil.vilname);
    // });
  }

  ngOnInit() {
  }
}
