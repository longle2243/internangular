import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { popUpConfirm, popUpFailed } from '@app/functions/popup-function';

@Component({
  selector: 'app-addressform',
  templateUrl: './addressform.component.html',
  styleUrl: './addressform.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class AddressformComponent implements OnInit{
  @Input() formarray!: FormArray;
  emptyFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emptyFormGroup = this.fb.group({});
  }
  ngOnInit(): void {
    this.addAddress()    
  }

  createAddress() {
    const address = this.fb.group({
      addressline: ['', Validators.required],
      city: ['', Validators.required],
      post: ['', Validators.required],
      country: ['', Validators.required],
    });
    return address;
  }

  addAddress() {
    this.formarray.push(this.createAddress());
  }

  deleteAdress(index: number) {
    popUpConfirm('Are you sure?').then(rs => {
      if (rs.isConfirmed) {
        if (index > 0) {
          this.formarray.removeAt(index);
        } else {
          popUpFailed('Failed!');
        }
      }
    });
  }

  getAdress(i: number) {
    if (i >= 0 && i < this.formarray.length) {
      return this.formarray.at(i) as FormGroup;
    }
    return null;
  }
}
