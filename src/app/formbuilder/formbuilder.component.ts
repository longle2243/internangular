import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.scss'
})
export class FormbuilderComponent {
  formbuilder: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formbuilder = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.email],
    })
  }

  onSubmit(){
    if (this.formbuilder.valid) {
      console.log(this.formbuilder.value);
      
    }
  }
}
