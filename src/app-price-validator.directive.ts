import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  selector: '[appPrice]',
  providers: [{provide: NG_VALIDATORS, useExisting: PriceValidatorDirective, multi: true}]
})
export class PriceValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) {
      return null;
    }
    if (isNaN(control.value) || control.value === null) {
      return {priceIsNaN: {value: control.value}};
    }
    return control.value <= 0 ? {price: {value: control.value, qt: 0}} : null;
  }
}
