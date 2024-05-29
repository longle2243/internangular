import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ListformComponent } from './listform/listform.component';

const routes: Routes = [
  { path: '', component: ListformComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'template', component: TemplatedrivenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
