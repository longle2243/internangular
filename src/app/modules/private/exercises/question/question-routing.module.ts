import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { DetailquestionComponent } from './detailquestion/detailquestion.component';

const routes: Routes = [
  // { path: '', component: ListquestionComponent },
  { path: 'list', component: ListquestionComponent },
  { path: 'list/:id', component: DetailquestionComponent },
  { path: 'create', component: CreatequestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
