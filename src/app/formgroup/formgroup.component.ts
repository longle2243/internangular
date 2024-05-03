import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrl: './formgroup.component.scss'
})
export class FormgroupComponent {
  accountform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit(){
    console.log(this.accountform.value);
  }
}
