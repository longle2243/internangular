import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const confirmPassword: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null =>{
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    return password?.value === confirmpassword?.value ? {checkpass: true}: null;
}