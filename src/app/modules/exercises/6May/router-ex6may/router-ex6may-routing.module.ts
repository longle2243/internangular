import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from '../reactive/reactive.component';
import { TemplatedrivenComponent } from '../templatedriven/templatedriven.component';
import { RouterEx6mayComponent } from './router-ex6may.component';

const routes: Routes = [
  { path: '', component: RouterEx6mayComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'templatedriven', component: TemplatedrivenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterEx6mayRoutingModule { }
