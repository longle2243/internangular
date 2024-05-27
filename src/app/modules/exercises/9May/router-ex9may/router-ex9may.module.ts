import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterEx9mayRoutingModule } from './router-ex9may-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicformComponent } from '../dynamicform/dynamicform.component';
import { RouterEx9mayComponent } from './router-ex9may.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListquestionComponent } from '../listquestion/listquestion.component';


@NgModule({
  declarations: [
    DynamicformComponent,
    RouterEx9mayComponent,
    ListquestionComponent
  ],
  imports: [
    CommonModule,
    RouterEx9mayRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class RouterEx9mayModule { }
