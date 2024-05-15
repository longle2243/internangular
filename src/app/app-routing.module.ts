import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exercises', loadChildren: () => import('./modules/exercises/router-exercises/router-exercises.module').then(m => m.RouterExercisesModule)},
  {path: 'topics', loadChildren: () => import('./modules/topics/router-topics/router-topics.module').then(m => m.RouterTopicsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
