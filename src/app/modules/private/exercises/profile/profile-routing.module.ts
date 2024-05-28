import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminformComponent } from './adminform/adminform.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';

const routes: Routes = [
  {path: 'admin', component: AdminformComponent},
  {path: 'employee', component: EmployeeformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
