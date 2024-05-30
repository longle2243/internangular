import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { isWhiteSpace } from '@app/functions/whiteSpace-validators';

import { HttpClient } from '@angular/common/http';
import { Countries } from '@app/interfaces/country.interface';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss',
})
export class ReactiveComponent implements OnInit {
  userform: FormGroup;
  accountform: FormGroup;
  isPopupOpen = false;
  popupImageSrc = '';
  genderlist = ['Male', 'Female'];
  countries!: Countries[];
  IntlPhone?: string;

  constructor(private http: HttpClient) {
    (this.userform = new FormGroup(
      {
        fullname: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          isWhiteSpace,
        ]),
        birthday: new FormControl('', [
          Validators.required,
          this.isUnder13YearOld,
        ]),
        gender: new FormControl(this.genderlist[0], [Validators.required]),
        country: new FormControl('VN', [Validators.required]),
        phone: new FormControl('', [
          Validators.required,
          // Validators.pattern(/^[0-9]*$/),
        ]),
        bio: new FormControl('', [Validators.maxLength(256)]),
      },
      { validators: this.isValidIntlPhone }
    )),
      (this.accountform = new FormGroup(
        {
          username: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern(/^(?=.*[a-z])(?=.*\d).{2,}$/),
            isWhiteSpace,
          ]),
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/),
          ]),
          confirmpassword: new FormControl('', [Validators.required]),
          checkbox: new FormControl(false, Validators.requiredTrue),
        },
        { validators: this.isPassNotMatch }
      ));
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Countries[]>('assets/countrycode.json').subscribe(data => {
      this.countries = data;
    });
  }

  isValidIntlPhone: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const phone = control.get('phone');
    const countryCode = control.get('country');
    const phoneUtil: PhoneNumberUtil = PhoneNumberUtil.getInstance();

    if (phone?.value) {
      const numberPhone = phoneUtil.parse(phone?.value, countryCode?.value);

      // Check Validate Phone
      const validIntlPhone = phoneUtil.isValidNumberForRegion(
        numberPhone,
        countryCode?.value
      );

      // Set Value Phone = countrycode + number
      if (validIntlPhone) {
        if (phone?.value[0] === '0' || phone?.value[0] === '+') {
          phone?.value.slice(1);
          const nationalNumber = numberPhone.getNationalNumber();
          const countryCode = numberPhone.getCountryCode();
          if (nationalNumber !== undefined && countryCode !== undefined) {
            this.IntlPhone = countryCode.toString() + nationalNumber.toString();
            // console.log(this.IntlPhone);
          }
        }
      }

      return validIntlPhone ? { itnlphone: true } : null;
    }
    return null;
  };

  isPassNotMatch: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    return password?.value !== confirmpassword?.value
      ? { mismatch: true }
      : null;
  };

  isInValidandTouched(form: FormGroup, controlname: string) {
    const field = form.controls[controlname];
    return field.invalid && (field.dirty || field.touched);
  }

  isUnder13YearOld: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const birhday = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birhday.getFullYear();
    return age < 13 ? { under13yd: true } : null;
  };

  usersubmit() {
    this.userform.markAllAsTouched();
    // if (this.userform.valid) {
    // alert('USER VALID');
    this.userform.controls['phone'].setValue(this.IntlPhone);
    console.log(this.userform.controls['phone'].value);
    this.userform.reset()
    // }
  }

  accountsubmit() {
    this.accountform.markAllAsTouched();
    if (this.accountform.valid) {
      alert('Account ok');
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
