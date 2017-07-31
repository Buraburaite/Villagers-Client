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

import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { ScrollerService } from '../../../services/scroller.service';

import { Villager } from '../../../models/villager.model';

class Tab {
  heading: string;
  filters: string[];
  scrollPos: number;

  constructor(heading?: string, filters?: any) {
    this.heading = heading || 'All';
    this.filters = (!filters || Array.isArray(filters)) ? filters : [filters];
    this.scrollPos = 0;
  }
}

@Component({
  selector: 'home-multifeed',
  templateUrl: './multifeed.component.html',
  styleUrls: ['./multifeed.component.scss']
})
export class MultiFeedComponent implements OnInit, AfterViewChecked {

  private prevAvilName: string;
  get avil(): Villager {

    // If avil has changed...
    const newAvil = this.state.activeVillager;
    if (this.prevAvilName !== newAvil.vilname) {
      this.prevAvilName = newAvil.vilname;

      // Reset tabs
        setTimeout(() => { // Hack for dealing with lifecycle checks
          this.tabs = this.getDefaultTabArray(newAvil.kind);
        }, 400);
    }

    return newAvil;
  }

  private tabs: Tab[];
  private defaultTabs = {
    parent: [
      new Tab('All'),
      new Tab('Students', 'student'),
      new Tab('Teachers', 'teacher'),
    ],
    student: [
      new Tab('All'),
      new Tab('Parents',    'parent'),
      new Tab('Classmates', 'student'),
      new Tab('Teachers',   'teacher'),
    ],
    teacher: [
      new Tab('All'),
      new Tab('Parents',  'parent'),
      new Tab('Students', 'student'),
    ]
  };

  private _currentTab: Tab = new Tab(); // This might be where the inconsistencies are coming from
  get currentTab(): Tab {
    return this._currentTab;
  }
  set currentTab(newTab: Tab) {
    // Make sure the tab is actually being changed
    if (!newTab || newTab.heading === this._currentTab.heading) { return; }

    // Record the old scroll position, then switch _currentTab
    const targetDiv = 'multifeed-div';
    this._currentTab.scrollPos = this.scroller.state[targetDiv];
    this._currentTab = newTab;

    // Scroll to the position of the new tab
    const newPos = newTab.scrollPos;
    this.scroller.scroll(targetDiv, newPos);

    //NOTE: Scroll recording behavior is very inconsistent
    // Likely an issue with lifecycle checks, a timeout might work.
    // No more time to work on this before the job fair.
  }

  constructor(
    private state : StateService,
    private scroller: ScrollerService
  ) { }

  ngOnInit() {
    this.tabs = this.getDefaultTabArray('parent');
  }

  // The issue may be that the view is checked before currentTab setter is done;
  ngAfterViewChecked() {
  }

  private getDefaultTabArray(kind: string) {
    return this.defaultTabs[kind].map(tab => {
      return new Tab(
        tab.heading,
        tab.filters ? tab.filters.map(x => x) : null
      );
    });
  }

  private getTab(heading: string): Tab {
    return this.tabs.find(tab => tab.heading === heading);
  }
}
