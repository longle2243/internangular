import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss'
})
export class DynamicformComponent {
  constructor(private fb: FormBuilder){}

  form =this.fb.group({
    items: this.fb.array([]),
  });
  
  get items(){
    return this.form.get('items') as FormArray
  }

  deleteItems(index: number){
    this.items.removeAt(index);
  }

  addItem(){
    this.items.push(
      this.fb.group({
        name: [''],
        // age: ['']
      })
    );
  }
}
