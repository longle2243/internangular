import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  form: FormGroup;
  // address!: FormArray;

  constructor() {
    this.form = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      addressList: new FormArray([this.createAddress()]),
    })

    // this.address = this.form.controls['address'] as FormArray;
  }

  getListAddress(){
    return this.form.controls['addressList'] as FormArray;
  }

  createAddress() {
    const newaddress = new FormGroup({
      street: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    })
    return newaddress
  }

  newAddress(){
    this.getListAddress().push(this.createAddress())
  }

  delAddress(index: number) {
    this.getListAddress().removeAt(index);
  }

  onSubmit(){
    if (this.form.valid) {
      console.log(this.getListAddress().value);
    }
  }
}
