import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() user: any;
  @Input() currentStudent: any;
  @Output() onCurrentStudentChange = new EventEmitter<any>();

  logoImage: string = "assets/logo.png";

  constructor() { }

  ngOnInit() {
    // this.currentStudent = this.user.students[0];
  }

  updateCurrentStudent(e: Event, selectedStudent: any) {
    this.currentStudent = selectedStudent;
    this.onCurrentStudentChange.emit(this.currentStudent);
  }


  studentToggled(open:boolean):void {
  }


  profileToggled(open:boolean):void {
  }

}
