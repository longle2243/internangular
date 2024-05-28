import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.scss'
})
export class EmployeeformComponent {
  employee: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employee = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      empID: ['', Validators.required],
      position: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit(){
    console.log(this.employee.value);
  }

}
