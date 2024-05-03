import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day6RoutingModule } from './day6-routing.module';
import { Day6Component } from './day6.component';
import { ForminputComponent } from './forminput/forminput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { FormtestComponent } from './formtest/formtest.component';


@NgModule({
  declarations: [
    Day6Component,
    ForminputComponent,
    ReactiveformComponent,
    DynamicformComponent,
    FormtestComponent
  ],
  imports: [
    CommonModule,
    Day6RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Day6Module { }
