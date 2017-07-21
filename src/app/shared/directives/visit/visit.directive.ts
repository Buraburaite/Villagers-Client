import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { StateService } from '../../../services/state.service';

import { Villager } from '../../../models/villager.model';

@Directive({
  selector: '[canVisit]'
})
export class VisitDirective {
  @Input() canVisit; // I think this is just a default if no input?
  @Output() onVisitRequest: EventEmitter<Villager> = new EventEmitter<Villager>();

  @HostListener('click', ['$event'])
  visitVil(event: Event) {

    // If would visit the activeVillager, do nothing
    if (this.canVisit === this.state.activeVillager.vilname) { return null; }

    let confirmed = window.confirm(`Visit ${this.canVisit}?`);

    if (confirmed) {
      this.state.visit(this.canVisit);
    }
  }

  constructor(private state: StateService) { }

}
