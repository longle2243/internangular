import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent {
  accountform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmitFormGroup(){
    console.log(this.accountform.value);
    alert(JSON.stringify(this.accountform.value))
  }

  formbuilder: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formbuilder = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    })
  }

  onSubmitFormBuilder(){
    if (this.formbuilder.valid) {
      console.log(this.formbuilder.value);
      
    }
  }
}
