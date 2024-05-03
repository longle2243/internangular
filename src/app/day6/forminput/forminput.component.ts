import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { format } from 'path';

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrl: './forminput.component.scss'
})
export class ForminputComponent {

  name = new FormControl('');
  username: any;
  clearform(){
    this.name.setValue("");
  }

  // form template driven 
  profile: any = {
    username:"",
    password:"",
  }

  onSubmit(form: NgForm){
    console.log(form.form.value);
    alert("Submited!  => "+JSON.stringify(form.form.value));
  }
}
