/*====
Component for the navbar
====*/

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // @Output() onCurrentStudentChange = new EventEmitter<string>();

  user: any;
  currentStudent: any;
  logoImage: string = "assets/logo.png";

  constructor(
    private session: SessionService,
    private state: StateService
  ) {
    this.user = state.user;
  }

  ngOnInit() {
    this.currentStudent = this.state.currentStudent = this.user.students[0];
  }

  // Change the current student variable in the app component
  updateCurrentStudent(e: Event, selectedStudent: any) {
    this.state.currentStudent = selectedStudent;
    // this.state.currentStudent = selectedStudent;
    // this.onCurrentStudentChange.emit(this.currentStudent);
  }

  logout(e: Event) {
    this.session.logout();
  }

  // Dropdown selection events, left here for later reference
  // studentToggled(open:boolean):void {
  // }
  // profileToggled(open:boolean):void {
  // }

}
