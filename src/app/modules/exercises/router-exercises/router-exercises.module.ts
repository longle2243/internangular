import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterExercisesRoutingModule } from './router-exercises-routing.module';
import { RouterExercisesComponent } from './router-exercises.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RouterExercisesComponent,
  ],
  imports: [
    CommonModule,
    RouterExercisesRoutingModule,
    ReactiveFormsModule
  ]
})
export class RouterExercisesModule { }
