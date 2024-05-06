import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrl: './ex1.component.scss'
})
export class Ex1Component {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      // firstName: ['', [Validators.required, Validators.maxLength(32)]],
      // lastName: ['', [Validators.required, Validators.maxLength(32)]],
      // birthDate: ['', Validators.required],
      // country: ['', Validators.required],
    }, { validator: this.confirmPassword });
  }

  confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    return password?.value !== confirmpassword?.value ? { checkpass: true } : null;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
    console.log(this.registrationForm.value);
    }
  }
}
