import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex6th5RoutingModule } from './ex6th5-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveComponent,
    TemplatedrivenComponent
  ],
  imports: [
    CommonModule,
    Ex6th5RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Ex6th5Module { }
