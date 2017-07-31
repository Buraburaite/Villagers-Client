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

  state = {};

  constructor(@Inject(DOCUMENT) private document: any) { }

  scroll(id: string, newPos: number): void {
    const el = this.document.getElementById(id);
    el.scrollTop = newPos;
  }

  scrollToTop(id: string): void { this.scroll(id, 0); }

}
