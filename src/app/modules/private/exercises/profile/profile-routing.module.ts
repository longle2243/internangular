import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminformComponent } from './adminform/adminform.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';

const routes: Routes = [
  { path: '', component: EmployeeformComponent },
  { path: 'employee', component: EmployeeformComponent },
  { path: 'admin', component: AdminformComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
