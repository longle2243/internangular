import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForminputComponent } from './forminput/forminput.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';

const routes: Routes = [
  {path: '1', component: ForminputComponent},
  {path: '3', component: ReactiveformComponent},
  {path: '4', component: DynamicformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day6RoutingModule { }
