import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ListexercisesComponent } from './listexercises/listexercises.component';


@NgModule({
  declarations: [
    ListexercisesComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule { }
