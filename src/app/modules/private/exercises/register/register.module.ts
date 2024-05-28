import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowerrorComponent } from './common/showerror/showerror.component';
import { PopupComponent } from './popup/popup.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ShowerrortemplateComponent } from './common/showerrortemplate/showerrortemplate.component';
import { ListformComponent } from './listform/listform.component';


@NgModule({
  declarations: [
    ReactiveComponent,
    TemplatedrivenComponent,
    ShowerrorComponent,
    ShowerrortemplateComponent,
    PopupComponent,
    ListformComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule { }
