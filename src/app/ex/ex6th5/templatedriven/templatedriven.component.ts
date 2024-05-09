import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.scss'
})
export class TemplatedrivenComponent {

  userform: any = {
    fullname: "",
    birthday: "",
    gender: "Male",
    country: "New York",
    phone: "",
    bio: "",
  }

  accountform: any = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    check: false,
  }

  countrylist = [
    { name: 'New York', phone: '01' },
    { name: 'Viet nam', phone: '84' },
  ]

  genderlist = [
    "Male",
    "Female"
  ]

  usersubmit(form: NgForm) {
    form.form.markAllAsTouched();
    if(form.valid){
      console.log("OK");
      alert("User valid")
    }
  }

  accountsubmit(form: NgForm) {
    form.form.markAllAsTouched();
    if(form.valid){
      console.log("OK");
      alert("Account valid")
    }
  }

  isItnlPhone(country: any, phone: any) : boolean{
    const selectcounry = this.countrylist.find(c => c.name === country);
    const firstTwoDigits = phone.substring(0,2);
    return selectcounry?.phone == firstTwoDigits;
  }

  isNotMatch(password: string, confirm: string): boolean{
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
    return age < 13
  }
}
