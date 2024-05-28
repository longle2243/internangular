import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterEx24mayRoutingModule } from './router-ex24may-routing.module';
import { RouterEx24mayComponent } from './router-ex24may.component';
import { EmployeeformComponent } from '../employeeform/employeeform.component';
import { UserformComponent } from '../userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RouterEx24mayComponent,
    EmployeeformComponent,
    UserformComponent
  ],
  imports: [
    CommonModule,
    RouterEx24mayRoutingModule,
    ReactiveFormsModule
  ]
})
export class RouterEx24mayModule { }
