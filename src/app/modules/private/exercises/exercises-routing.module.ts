import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListexercisesComponent } from './listexercises/listexercises.component';

const routes: Routes = [
  { path: '', component: ListexercisesComponent },
  { path: 'question', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
