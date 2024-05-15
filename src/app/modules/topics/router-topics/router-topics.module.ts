import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterTopicsRoutingModule } from './router-topics-routing.module';
import { RouterTopicsComponent } from './router-topics.component';


@NgModule({
  declarations: [
    RouterTopicsComponent
  ],
  imports: [
    CommonModule,
    RouterTopicsRoutingModule
  ]
})
export class RouterTopicsModule { }
