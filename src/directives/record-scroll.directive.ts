import { Directive, HostListener } from '@angular/core';

import { ScrollerService } from '../services/scroller.service';

@Directive({
  selector: '[recordScroll]'
})
export class RecordScrollDirective {

  constructor(private scroll: ScrollerService) { }

  // NOTE: Change this to work with an id system
  // @HostListener('scroll', ['$event'])
  // do (e: any) {
  //   const tabState = this.scroll.tabs;
  //   const cTab = this.scroll.currentTab;
  //   const pos = e.target.scrollTop;
  //
  //   if (tabState[cTab] === undefined) { tabState[cTab] = 0; }
  //   tabState[cTab] = pos;
  //   console.log(pos);
  // }

  @HostListener('scroll', ['$event'])
  transmitPos(e: any) {
    const id = e.target.id;
    const pos = e.target.scrollTop;

    this.scroll.state[id] = pos;
  }

}
;
