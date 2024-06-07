import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrl: './personalinfo.component.scss',
})
export class PersonalinfoComponent implements OnInit {
  @Input() formgroup!: FormGroup;
  personalInfo!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formgroup.addControl('fullname', this.createFullName());
    this.formgroup.addControl('contact', this.createContact());
  }

  createFullName() {
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  createContact() {
    return this.fb.group({
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  getFullName() {
    return this.formgroup.controls['fullname'] as FormGroup;
  }

  getContact() {
    return this.formgroup.controls['contact'] as FormGroup;
  }
}
