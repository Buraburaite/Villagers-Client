import { Directive, HostListener } from '@angular/core';

import { StateService } from '../services/state.service';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {

  constructor(private state: StateService) { }

  @HostListener('scroll', ['$event'])
  do (e) {
    if (this.state.currentTab) {
      this.state.tabs[this.state.currentTab] = e.target.scrollTop;
    }
  }

}
