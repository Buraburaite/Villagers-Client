/*====
This holds the scroll position of anything with the record-scroll
directive on it, and exposes methods for scrolling those elements.

This originated as a hack to allow saving scroll position
inside of an ngx-bootstrap tabbed component.
====*/

import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ScrollerService {

  // private _currentTab: string = '';
  // get currentTab (): string { return this._currentTab; }
  // set currentTab(newTab: string) {
  //   console.log(this.currentTab, newTab, this.tabs[newTab]);
  //
  //   const multifeedDiv = this.document.getElementById('multifeed-div');
  //   multifeedDiv.scrollTop = this.tabs[newTab];
  //
  //   this._currentTab = newTab;
  // }
  // tabs: any = {};

  state = {};

  constructor(@Inject(DOCUMENT) private document: any) { }

  scroll(id: string, newPos: Number): void {
    const el = this.document.getElementById(id);
    el.scrollTop = newPos;
  }

  scrollToTop(id: string): void { this.scroll(id, 0); }

}
