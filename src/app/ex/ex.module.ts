import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExRoutingModule } from './ex-routing.module';
import { ExComponent } from './ex.component';
import { Ex6th5Component } from './ex6th5/ex6th5.component';


@NgModule({
  declarations: [
    ExComponent,
    Ex6th5Component,
  ],
  imports: [
    CommonModule,
    ExRoutingModule
  ]
})
export class ExModule { }
