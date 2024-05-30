import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class UserformComponent implements OnInit {
  @Input() formgroup!: FormGroup;
  personalInfo!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formgroup.addControl('personalInfo', this.createPersonalInfo());
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

  getPersonalInfo(){
    return this.formgroup.controls['personalInfo'] as FormGroup;
  }
}
