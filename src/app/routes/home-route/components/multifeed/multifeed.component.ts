import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager.model';

@Component({
  selector: 'home-multifeed',
  templateUrl: './multifeed.component.html',
  styleUrls: ['./multifeed.component.scss']
})
export class MultiFeedComponent implements OnInit {

  private tabs: any = {
    parent: [
      { heading: 'All' },
      { heading: 'Students', filters: ['student'] },
      { heading: 'Teachers', filters: ['teacher'] },
    ],
    student: [
      { heading: 'All' },
      { heading: 'Parents',    filters: ['parent'] },
      { heading: 'Classmates', filters: ['student'] },
      { heading: 'Teachers',   filters: ['teacher'] },
    ],
    teacher: [
      { heading: 'All' },
      { heading: 'Parents',  filters: ['parent'] },
      { heading: 'Students', filters: ['student'] },
    ]
  };

  get avil(): Villager { return this.state.activeVillager; }

  constructor(private state: StateService) {
  }

  ngOnInit() {
    this.state.currentTab = this.tabs[this.avil.kind][0].heading;
  }

}
