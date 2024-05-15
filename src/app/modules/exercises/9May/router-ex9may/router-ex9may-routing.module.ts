import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from '../dynamicform/dynamicform.component';
import { RouterEx9mayComponent } from './router-ex9may.component';

const routes: Routes = [
  {path: '', component: RouterEx9mayComponent},
  {path: 'exam', component: DynamicformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterEx9mayRoutingModule { }
