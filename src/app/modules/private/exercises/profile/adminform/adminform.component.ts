import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrl: './adminform.component.scss',
})
export class AdminformComponent {
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.employee.markAllAsTouched();
    if (this.employee.valid) {
      console.log(this.employee.value);
    }
  }

  // FORM
  employee = this.fb.group({
    personalInfo: this.createPersonalInfo(),
    empID: ['', Validators.required],
    position: ['', Validators.required],
    address: this.fb.array([]),
  });

  get address() {
    return this.employee.controls['address'] as FormArray;
  }

  createPersonalInfo() {
    const personalInfo = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    return personalInfo;
  }
}
