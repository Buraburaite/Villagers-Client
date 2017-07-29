/*====
Holds multiple feed components in an ngx-bootstrap tab
component. The tabs are dynamically created based
on avil's kind (parent, student, or teacher).

The scroll position of each the feed is preserved through
the use of a directive that transmits the position of the
parent div of this multifeed component (which is what receives
the scroll events) to a service that holds the current
value of each recorded div. That service also exposes
methods for changing the position of said divs,
which are called from here so that tabs 'remember' their
positions.

Tabs are recreated (with the scroll position reset to 0)
whenever avil changes.
====*/

import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { ScrollerService } from '../../../services/scroller.service';

import { Villager } from '../../../models/villager.model';

@Component({
  selector: 'home-multifeed',
  templateUrl: './multifeed.component.html',
  styleUrls: ['./multifeed.component.scss']
})
export class MultiFeedComponent implements OnInit {

  private prevAvilName: string;
  get avil(): Villager {

    // If avil has changed...
    const newAvil = this.state.activeVillager;
    if (this.prevAvilName !== newAvil.vilname) {
      this.prevAvilName = newAvil.vilname;

      // ...reset the tabs...
      this.tabs = this.getDefaultTabArray(newAvil.kind);
      // ...and set their scroll position.
      // this.scroll.currentTab = this.tabs[0].heading;
    }

    return newAvil;
  }

  get scrollPos(): Number { return this.scroll.state['multifeed-div']; }
  private tabs: any;
  private defaultTabs: any = {
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

  private _currentTab: any = 'All';
  get currentTab(): string { return this._currentTab; }
  set currentTab(value: string) {
    this.scroll.scroll
    this._currentTab = value;
  }

  constructor(
    private state : StateService,
    private scroll: ScrollerService
  ) { }

  ngOnInit() {
    this.tabs = this.getDefaultTabArray('parent');
  }

  private getDefaultTabArray(kind: string) {
    return this.defaultTabs[kind].map(tab => {
      return {
        heading: tab.heading,
        filters: tab.filters ? tab.filters.map(x => x) : null,
        scrollPos: 0
      }
    });
  }

}
