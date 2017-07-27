import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager.model';

@Component({
  selector: 'home-multifeed',
  templateUrl: './multifeed.component.html',
  styleUrls: ['./multifeed.component.scss']
})
export class MultiFeedComponent implements OnInit {

  get avil(): Villager { return this.state.activeVillager; }

  constructor(private state: StateService) {
  }

  ngOnInit() {
  }

}
