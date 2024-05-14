import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from '../../exercises/9th5/dynamicform/dynamicform.component';
import { HomeComponent } from '../../home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '9th5', component: DynamicformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
