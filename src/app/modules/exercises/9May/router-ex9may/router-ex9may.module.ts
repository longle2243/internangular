import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterEx9mayRoutingModule } from './router-ex9may-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicformComponent } from '../dynamicform/dynamicform.component';
import { RouterEx9mayComponent } from './router-ex9may.component';


@NgModule({
  declarations: [
    DynamicformComponent,
    RouterEx9mayComponent
  ],
  imports: [
    CommonModule,
    RouterEx9mayRoutingModule,
    ReactiveFormsModule
  ]
})
export class RouterEx9mayModule { }
