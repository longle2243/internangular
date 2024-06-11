import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { CombinationComponent } from './components/combination/combination.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'combination', component: CombinationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
