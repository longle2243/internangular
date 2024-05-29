import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { DetailquestionComponent } from './detailquestion/detailquestion.component';
import { ShareModule } from '@app/modules/share/share.module';

@NgModule({
  declarations: [
    ListquestionComponent,
    CreatequestionComponent,
    DetailquestionComponent,
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
  ],
})
export class QuestionModule {}
