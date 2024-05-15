import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterEx6mayRoutingModule } from './router-ex6may-routing.module';
import { RouterEx6mayComponent } from './router-ex6may.component';
import { PopupComponent } from '../popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from '../reactive/reactive.component';
import { TemplatedrivenComponent } from '../templatedriven/templatedriven.component';
import { ShowerrorComponent } from '../common/showerror/showerror.component';
import { InputComponent } from '../common/input/input.component';
import { ShowerrortemplateComponent } from '../common/showerrortemplate/showerrortemplate.component';


@NgModule({
  declarations: [
    RouterEx6mayComponent,
    PopupComponent,
    ReactiveComponent,
    TemplatedrivenComponent,
    ShowerrorComponent,
    InputComponent,
    PopupComponent,
    ShowerrortemplateComponent
  ],
  imports: [
    CommonModule,
    RouterEx6mayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RouterEx6mayModule { }
