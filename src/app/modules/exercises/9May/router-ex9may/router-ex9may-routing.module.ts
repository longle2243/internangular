import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from '../dynamicform/dynamicform.component';
import { RouterEx9mayComponent } from './router-ex9may.component';
import { QuestionformComponent } from '../questionform/questionform.component';
import { ListquestionComponent } from '../listquestion/listquestion.component';
import { QuestiondetailComponent } from '../questiondetail/questiondetail.component';

const routes: Routes = [
  {path: '', component: RouterEx9mayComponent},
  {path: 'exam', component: DynamicformComponent},
  {path: 'question', component: QuestionformComponent},
  {path: 'list', component: ListquestionComponent},
  {path: 'list/:id', component: QuestiondetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterEx9mayRoutingModule { }
