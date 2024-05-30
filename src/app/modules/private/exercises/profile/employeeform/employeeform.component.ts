import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.scss',
})
export class EmployeeformComponent {
  constructor(private fb: FormBuilder) {}

  // FORM
  employee = this.fb.group({
    personalInfo: this.fb.group({}),
    empID: ['', Validators.required],
    position: ['', Validators.required],
    address: this.fb.array([]),
  });

  get address() {
    return this.employee.controls['address'] as FormArray;
  }

  get personalInfo(){
    return this.employee.controls['personalInfo'] as FormGroup;
  }

  onSubmit() {
    this.employee.markAllAsTouched();
    if (this.employee.valid) {
      console.log(this.employee.value);
    }
  }
}
