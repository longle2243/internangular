import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupenvComponent } from './components/setupenv/setupenv.component';
import { FolderstructureComponent } from './components/folderstructure/folderstructure.component';

const routes: Routes = [
  { path: '1', component: SetupenvComponent },
  { path: '2', component: FolderstructureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Week1RoutingModule { }
