import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private session: SessionService,
    private state: StateService
  ) {}

  ngOnInit() {
    this.session.login({
      username: 'test',
      password: 'testtest'
    });
  }

  title: string = 'Villagers';
  user: any;

}
