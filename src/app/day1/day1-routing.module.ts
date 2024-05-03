import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupenvComponent } from './setupenv/setupenv.component';
import { FolderstructureComponent } from './folderstructure/folderstructure.component';

const routes: Routes = [
  {path:'1', component: SetupenvComponent},
  {path: '2', component: FolderstructureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day1RoutingModule { }
