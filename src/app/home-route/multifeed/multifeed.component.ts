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
  scrollPos: Number;

  constructor(heading?: string, filters?: any, scrollPos?: Number) {
    this.heading = heading || 'All';
    this.scrollPos = scrollPos || 0;
    this.filters = (!filters || Array.isArray(filters)) ? filters : [filters];
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

      // ...reset the tabs...
      this.tabs = this.getDefaultTabArray(newAvil.kind);
      // ...and set their scroll position.
      // this.currentTab = this.tabs[0];
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

  private _currentTab: Tab = new Tab();
  get currentTab(): Tab { console.log(this._currentTab.scrollPos); return this._currentTab; }
  set currentTab(newTab: Tab) {
    if (!newTab || newTab.heading === this._currentTab.heading) { return; } // <tab (select)> can start null for some reason
    this._currentTab = newTab;

    const targetDiv = 'multifeed-div';
    const newPos = newTab.scrollPos;
    this.scroller.scroll(targetDiv, newPos);
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
    this.currentTab.scrollPos = this.getDivPos();
  }

  private getDivPos() { return this.scroller.state['multifeed-div']; }

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
