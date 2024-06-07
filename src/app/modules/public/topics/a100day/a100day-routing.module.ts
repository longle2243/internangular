import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { Navbar100dayComponent } from './components/navbar100day/navbar100day.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';

const routes: Routes = [
  { path: '', component: Navbar100dayComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'ngclass', component: NgclassComponent },
  { path: 'rxjs', component: RxjsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A100dayRoutingModule {}
