import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
  userform: FormGroup;
  accountform: FormGroup;

  countrylist = [
    { name: 'New York', phone: '01' },
    { name: 'Viet nam', phone: '84' },
  ]
  genderlist = [
    "Male",
    "Female"
  ]
  constructor() {
    this.userform = new FormGroup({
      fullname: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),
      gender: new FormControl(this.genderlist[0], [Validators.required]),
      country: new FormControl(this.countrylist[0].name, [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      bio: new FormControl("", [Validators.maxLength(256)])
    }, { validators: this.IsinternationalPhone }),

      this.accountform = new FormGroup({
        username: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern(/^[0-9A-Za-z]{6,16}$/)]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/)]),
        confirmpassword: new FormControl("", [Validators.required]),
        checkbox: new FormControl(false, Validators.requiredTrue)
      }, { validators: this.confirmPassword })
  }

  IsinternationalPhone: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const phone = control.get('phone');
    const country = control.get('country');
    const selectcounry = this.countrylist.find(ct => ct.name === country?.value)
    return phone?.value.substr(0, 2) != selectcounry?.phone ? { isinternationalphone: true } : null;
  }

  confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    return password?.value !== confirmpassword?.value ? { checkpass: true } : null;
  }

  usersubmit() {
    if (this.userform.valid) {
      alert("USER VALID")
      console.log(this.userform.controls);
    }
  }

  accountsubmit() {
    if (this.accountform.valid) {
      alert("Account ok");
      console.log(this.accountform.value);
    }
  }

  count = 0;
  countChar(event: any ){
    // console.log((event.target as HTMLInputElement).value.length);
    
    this.count =(event.target as HTMLInputElement).value.length;
  }
}
