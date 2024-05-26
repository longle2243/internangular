import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterEx24mayComponent } from './router-ex24may.component';
import { EmployeeformComponent } from '../employeeform/employeeform.component';

const routes: Routes = [
  { path: '', component: RouterEx24mayComponent},
  { path: 'employee', component: EmployeeformComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterEx24mayRoutingModule { }
