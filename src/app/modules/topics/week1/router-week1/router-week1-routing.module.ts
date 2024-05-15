import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterWeek1Component } from './router-week1.component';
import { SetupenvComponent } from '../components/setupenv/setupenv.component';
import { FolderstructureComponent } from '../components/folderstructure/folderstructure.component';

const routes: Routes = [
  { path: '', component: RouterWeek1Component },
  { path: '1', component: SetupenvComponent },
  { path: '2', component: FolderstructureComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterWeek1RoutingModule { }
