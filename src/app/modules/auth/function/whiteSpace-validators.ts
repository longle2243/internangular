import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const isWhiteSpace: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const isSpace = control.value.match(/\s/g);
    return isSpace ? { whitespace: true } : null;
  }