import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { DynamicformComponent } from './9th5/dynamicform/dynamicform.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DynamicformComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule { }
