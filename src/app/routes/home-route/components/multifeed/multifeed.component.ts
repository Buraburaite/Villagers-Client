import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../services/state.service';

import { Villager } from '../../../../models/villager.model';

@Component({
  selector: 'home-multifeed',
  templateUrl: './multifeed.component.html',
  styleUrls: ['./multifeed.component.scss']
})
export class MultiFeedComponent implements OnInit {

  private activeTab: String = "Parents";

  get avil(): Villager { return this.state.activeVillager; }

  constructor(private state: StateService) {
  }

  ngOnInit() {
  }


  changeTab(e: any): void {
    this.activeTab = e.target.text;
  }

  isActiveTab(name: String): Boolean {
    return name === this.activeTab;
  }
}
