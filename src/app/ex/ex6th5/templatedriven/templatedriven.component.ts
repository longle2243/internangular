import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    checkbox: "",
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
    console.log(form.controls);
    if(form.valid){
      console.log("OK");
      alert("User valid")
    }
  }

  accountsubmit(form: NgForm) {
    console.log(form.controls);
    if(form.valid){
      console.log("OK");
      alert("Account valid")
    }
  }

  count = 0;
  countChar(event: any ){
    this.count =(event.target as HTMLInputElement).value.length;
  }

  isInternationalPhone(country: any, phone: string) : boolean{
    const selectcounry = this.countrylist.find(c => c.name === country);
    const firstTwoDigits = phone.substring(0,2);
    return selectcounry?.phone == firstTwoDigits;
  }

  isMatch(password: string, confirm: string): boolean{
    return password === confirm;
  }
}
