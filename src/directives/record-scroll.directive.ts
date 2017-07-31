import { Directive, HostListener } from '@angular/core';

import { ScrollerService } from '../services/scroller.service';

@Directive({
  selector: '[recordScroll]'
})
export class RecordScrollDirective {

  constructor(private scroll: ScrollerService) { }

  @HostListener('scroll', ['$event'])
  transmitPos(e: any) {
    const id = e.target.id;
    const pos = e.target.scrollTop;

    this.scroll.state[id] = pos;
  }

}
