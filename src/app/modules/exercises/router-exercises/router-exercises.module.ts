import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterExercisesRoutingModule } from './router-exercises-routing.module';
import { RouterExercisesComponent } from './router-exercises.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    RouterExercisesComponent
  ],
  imports: [
    CommonModule,
    RouterExercisesRoutingModule,
    // NgxPaginationModule
  ]
})
export class RouterExercisesModule { }
