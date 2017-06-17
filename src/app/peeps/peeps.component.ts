

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peeps',
  templateUrl: './peeps.component.html',
  styleUrls: ['./peeps.component.scss']
})

export class PeepsComponent implements OnInit {

  @Input() currentStudent: any;

  isClosed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
