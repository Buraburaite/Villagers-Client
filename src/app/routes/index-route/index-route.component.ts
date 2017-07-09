import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'index-route',
  templateUrl: './index-route.component.html',
  styleUrls: ['./index-route.component.scss']
})
export class IndexRouteComponent implements OnInit {

  constructor(private session: SessionService) { }

  ngOnInit() {

  // for inspecting the resulting user object
    // this.session.login({
    //   username: 'test',
    //   password: 'test'
    // })
    // .then((user) => {
    //   console.log(user);
    // });
  }

}
