import { Directive, HostListener, Input } from '@angular/core';
import { StateService } from '../../services/state.service';

@Directive({
  selector: '[visit]'
})
export class VisitDirective {
  @Input() visit; // I think this is just a default if no input?

  @HostListener('click', ['$event'])
  visitVil(event: Event) {
    this.state.visit(this.visit);
  }

  constructor(private state: StateService) { }

}
