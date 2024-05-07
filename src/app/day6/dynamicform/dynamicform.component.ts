import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss'
})
export class DynamicformComponent {
  // constructor(private fb: FormBuilder){}
  // form =this.fb.group({
  //   items: this.fb.array([]),
  // });
  // get items(){
  //   return this.form.get('items') as FormArray
  // }
  // deleteItems(index: number){
  //   this.items.removeAt(index);
  // }
  // addItem(){
  //   this.items.push(
  //     this.fb.group({
  //       name: [''],
  //       // age: ['']
  //     })
  //   );
  // }

  profile: FormGroup;
  constructor() {
    this.profile = new FormGroup({
      firstname: new FormControl("", [Validators.required]),
      // lastname: new FormControl("", [Validators.required]),
      // email: new FormControl(""),
      emails: new FormArray([]),
    })
  }

  getControls() {
    return (this.profile.controls['emails'] as FormArray).controls;
  }

  creatEmail() {
    return new FormControl("", Validators.required);
  }

  removeEmail(index: number) {
    (this.profile.controls['emails'] as FormArray).removeAt(index);
  }

  addEmail() {
    (this.profile.controls['emails'] as FormArray).push(this.creatEmail());
    for (let i of this.getControls()) {
      console.log(i.invalid);
    }
  }

  onSubmit() {
    if (this.profile.valid) {
      console.log(this.profile.value);
      alert("Profile VALID");
    }
  }
}
