import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterEx24mayRoutingModule } from './router-ex24may-routing.module';
import { RouterEx24mayComponent } from './router-ex24may.component';
import { EmployeeformComponent } from '../employeeform/employeeform.component';


@NgModule({
  declarations: [
    RouterEx24mayComponent,
    // EmployeeformComponent
  ],
  imports: [
    CommonModule,
    RouterEx24mayRoutingModule
  ]
})
export class RouterEx24mayModule { }
