import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex9th5RoutingModule } from './ex9th5-routing.module';
import { QuestionComponent } from './question/question.component';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListquestionComponent } from './listquestion/listquestion.component';


@NgModule({
  declarations: [
    QuestionComponent,
    AddressComponent,
    ListquestionComponent
  ],
  imports: [
    CommonModule,
    Ex9th5RoutingModule,
    ReactiveFormsModule
  ]
})
export class Ex9th5Module { }
