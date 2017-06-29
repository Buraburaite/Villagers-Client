/*====
Component for the navbar
====*/

import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { SessionService } from '../services/session.service';

// Navbar for the parent user's / route

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() currentStudent: any;
  @Output() onCurrentStudentChange = new EventEmitter<any>();

  user: any;
  logoImage: string = "assets/logo.png";

  constructor(private session: SessionService) {
    this.user = session.user;
  }

  ngOnInit() {
    // this.currentStudent = this.user.students[0];
  }

  // Change the current student variable in the app component
  updateCurrentStudent(e: Event, selectedStudent: any) {
    this.currentStudent = selectedStudent; // this line needed?
    this.onCurrentStudentChange.emit(this.currentStudent);
  }

  // Dropdown selection events, left here for later reference
  // studentToggled(open:boolean):void {
  // }
  // profileToggled(open:boolean):void {
  // }

}
