import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[mustMatch][formControlName],[mustMatch][formControl],[mustMatch][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MustMatchValidator), multi: true }
  ]
})
export class MustMatchValidator implements Validator {
  constructor( @Attribute('mustMatch') public mustMatch: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    // get the control value, whose value we will check...
    let ourValue = c.value;

    // ...against the value of the control named in this.mustMatch
    let theirValue = c.root.get(this.mustMatch).value;
    /*====
    NOTE: c is a control, c.root is the formGroup it's a part of (or maybe
    the top level form?), this.mustMatch is the /literal/ string inputted
    onto the input element. For instance, in mustMatch="password",
    mustMatch === 'password'. c.root.get(this.mustMatch) then returns the
    control whose value we want to check against (in this case, that's the
    form's password). Honestly, it seems like a better idea to just
    allow a value to be inputted from the controller typescript. Less limiting,
    doesn't add code we don't already probably have. But I don't know how to
    do that, so sticking with this for now.
    ====*/

    // Return an error object if they're not equal,
    // else return null (meaning it's valid)
    return ourValue === theirValue ? null : {
      mustMatch: false
    };
  }
}
