/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidatorFn} from '@angular/forms';

export function priceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    if (isNaN(control.value) || control.value === null) {
      return {priceIsNaN: {value: control.value}};
    }
    return control.value <= 0 ? {price: {value: control.value, qt: 0}} : null;
  };
}
