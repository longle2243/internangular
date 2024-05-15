import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterWeek1RoutingModule } from './router-week1-routing.module';
import { RouterWeek1Component } from './router-week1.component';
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';


@NgModule({
  declarations: [
    RouterWeek1Component,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterWeek1RoutingModule
  ]
})
export class RouterWeek1Module { }
