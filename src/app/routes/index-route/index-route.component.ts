import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'index-route',
  templateUrl: './index-route.component.html',
  styleUrls: ['./index-route.component.scss']
})
export class IndexRouteComponent implements OnInit {
  @ViewChild('infoModal') private infoModal:ModalDirective;

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

  showInfoModal():void { this.infoModal.show(); }
  hideInfoModal():void { this.infoModal.hide(); }


}
