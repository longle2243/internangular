import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { QuestionComponent } from './question/question.component';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  {path: 'address', component: AddressComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'apiquestion', component: ListquestionComponent},
  {path: 'exam', component: ExamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ex9th5RoutingModule { }
