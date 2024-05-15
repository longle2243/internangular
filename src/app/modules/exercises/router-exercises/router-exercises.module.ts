import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterExercisesRoutingModule } from './router-exercises-routing.module';
import { RouterExercisesComponent } from './router-exercises.component';


@NgModule({
  declarations: [
    RouterExercisesComponent
  ],
  imports: [
    CommonModule,
    RouterExercisesRoutingModule,
  ]
})
export class RouterExercisesModule { }
