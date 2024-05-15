import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterWeek2RoutingModule } from './router-week2-routing.module';
import { RouterWeek2Component } from './router-week2.component';


@NgModule({
  declarations: [
    RouterWeek2Component
  ],
  imports: [
    CommonModule,
    RouterWeek2RoutingModule
  ]
})
export class RouterWeek2Module { }
