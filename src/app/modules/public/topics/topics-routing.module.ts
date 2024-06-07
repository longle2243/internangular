import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  {
    path: 'week1',
    loadChildren: () => import('./week1/week1.module').then(m => m.Week1Module),
  },
  {
    path: 'week2',
    loadChildren: () => import('./week2/week2.module').then(m => m.Week2Module),
  },
  {
    path: 'week3',
    loadChildren: () => import('./week3/week3.module').then(m => m.Week3Module),
  },
  {
    path: 'a100day',
    loadChildren: () =>
      import('./a100day/a100day.module').then(m => m.A100dayModule),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsRoutingModule {}
