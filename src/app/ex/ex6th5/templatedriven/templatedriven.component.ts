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
    gender: "",
    country: "",
    phone: "",
    bio: "",
  }

  accountform: any = {
    username: "",
    email: "",
    password: "",
    country: "",
    confirmpassword: "",
    checkbox: "",
  }

  usersubmit(form: NgForm) {

  }

  accountsubmit(form: NgForm) {

  }
}
