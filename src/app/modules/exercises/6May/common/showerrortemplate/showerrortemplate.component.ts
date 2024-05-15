import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-showerrortemplate',
  templateUrl: './showerrortemplate.component.html',
  styleUrl: './showerrortemplate.component.scss'
})
export class ShowerrortemplateComponent {
  @Input() model!: NgModel;

    isInvalidandTouched(model: NgModel){
    return model.invalid && (model.dirty || model.touched);
  }
}
