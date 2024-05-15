import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input-gg';
import { PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber';

import { HttpClient } from '@angular/common/http';
interface Countries {
  name: string;
  dial_code: string;
  code: string;
}

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})

export class ReactiveComponent implements OnInit {
  userform: FormGroup;
  accountform: FormGroup;
  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;
  PhoneNumberFormat = PhoneNumberFormat;
  isPopupOpen = false;
  popupImageSrc = '';

  // countrylist = [
  //   { name: 'New York', phone: '01' },
  //   { name: 'Viet nam', phone: '84' },
  // ]
  genderlist = [
    "Male",
    "Female"
  ]

  countries: any;

  fetchData() {
    this.http.get<Countries>('assets/countrycode.json').subscribe(data => {
      this.countries = data;
    });
  }
  constructor(private http: HttpClient) {
    this.userform = new FormGroup({
      fullname: new FormControl("", [Validators.required, Validators.minLength(5), this.isWhiteSpace]),
      birthday: new FormControl("", [Validators.required, this.isUnder13YearOld]),
      gender: new FormControl(this.genderlist[0], [Validators.required]),
      country: new FormControl("VN", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      bio: new FormControl("", [Validators.maxLength(256)])
    }, { validators: this.isValidIntlPhone }),

      this.accountform = new FormGroup({
        username: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[a-z])(?=.*\d).{2,}$/), this.isWhiteSpace]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/)]),
        confirmpassword: new FormControl("", [Validators.required]),
        checkbox: new FormControl(false, Validators.requiredTrue)
      }, { validators: this.isPassNotMatch })
  }
  ngOnInit(): void {
    this.fetchData();
    // console.log(this.countries);
  }

  isValidIntlPhone: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const phone = control.get('phone');
    const countryCode = control.get('country')
    const phoneUtil: PhoneNumberUtil = PhoneNumberUtil.getInstance();
    if (phone?.value.length > 1) {
      const numberPhone = phoneUtil.parse(phone?.value, countryCode?.value)
      const validIntlPhone = phoneUtil.isValidNumberForRegion(numberPhone, countryCode?.value);
      // console.log(validIntlPhone);
      const number = phoneUtil.parseAndKeepRawInput(phone?.value, countryCode?.value);
      console.log(phoneUtil.getRegionCodeForNumber(number));
      
      return validIntlPhone ? { itnlphone: true } : null;
    }
    return null
  }

  isPassNotMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    return password?.value !== confirmpassword?.value ? { mismatch: true } : null;
  }

  isInValidandTouched(form: FormGroup, controlname: string) {
    const field = form.controls[controlname]
    return field.invalid && (field.dirty || field.touched);
  }

  isUnder13YearOld: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const birhday = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birhday.getFullYear();
    return age < 13 ? { under13yd: true } : null;
  }

  isWhiteSpace: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const isSpace = control.value.match(/\s/g);
    return isSpace ? { whitespace: true } : null;
  }

  usersubmit() {
    for (let c of this.countries) {
      // console.log(c);
    }

    this.userform.markAllAsTouched();
    if (this.userform.valid) {
      alert("USER VALID")
      console.log(this.userform.controls);
    }
  }

  accountsubmit() {
    this.accountform.markAllAsTouched();
    if (this.accountform.valid) {
      alert("Account ok");
      console.log(this.accountform.value);
    }
  }

  openPopup() {
    this.isPopupOpen = true;
    this.popupImageSrc = './assets/avatar.png';
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}