import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Countries } from '@app/interfaces/country.interface';
import { PersonalInfo } from '@app/interfaces/personalinfo.interface';
import { Register } from '@app/interfaces/register.interface';
import { HttpClient } from '@angular/common/http';
import { PhoneNumberUtil } from 'google-libphonenumber';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.scss',
})
export class TemplatedrivenComponent implements OnInit {
  userform: PersonalInfo;
  accountform: Register;
  countries!: Countries[];
  genderlist = ['Male', 'Female'];
  IntlPhone?: string;

  constructor(private http: HttpClient) {
    this.userform = {
      fullname: '',
      birthday: '',
      gender: 'Male',
      country: '',
      phone: '',
      bio: '',
    };

    this.accountform = {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      check: false,
    };
  }

  ngOnInit(): void {
    this.fetchData();
  }

  // FORM
  usersubmit(form: NgForm) {
    form.form.markAllAsTouched();
    if (form.valid) {
      this.userform.phone = this.IntlPhone!;
      console.log('OK');
      alert('User valid');
    }
  }

  accountsubmit(form: NgForm) {
    form.form.markAllAsTouched();
    if (form.valid) {
      console.log('OK');
      alert('Account valid');
    }
  }

  // SERVICE
  fetchData() {
    this.http.get<Countries[]>('assets/countrycode.json').subscribe(data => {
      this.countries = data;
    });
  }

  isItnlPhone(countryCodeOriginal: string, phoneOriginal: string): boolean {
    const phoneUtil: PhoneNumberUtil = PhoneNumberUtil.getInstance();
    if (countryCodeOriginal && phoneOriginal) {
      // Format numberPhone
      const phoneFormated = phoneUtil.parse(phoneOriginal, countryCodeOriginal);

      // Is Phone & Country match
      const validIntlPhone = phoneUtil.isValidNumberForRegion(
        phoneFormated,
        countryCodeOriginal
      );

      // Handle    Phone = Country + Number
      // Ex: 84923456789 = 84      + 923456789
      if (validIntlPhone) {
        const phone = phoneFormated.getNationalNumber();
        const countryCode = phoneFormated.getCountryCode();
        this.IntlPhone = countryCode!.toString() + phone!.toString();
        this.userform.phone = this.IntlPhone;
        return true;
      }
    }
    return false;
  }

  isNotMatch(password: string, confirm: string): boolean {
    return password !== confirm;
  }

  isInValidandTouched(model: NgModel) {
    return model.invalid && (model.dirty || model.touched);
  }

  isTouchedandDirty(model: NgModel) {
    return model.invalid && (model.dirty || model.touched);
  }

  isUnder13Yd(model: NgModel): boolean {
    const birthday = new Date(model.value);
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    return age < 13;
  }
}
