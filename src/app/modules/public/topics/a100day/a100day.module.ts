import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A100dayRoutingModule } from './a100day-routing.module';
import { NgifComponent } from './components/ngif/ngif.component';
import { BindingComponent } from './components/binding/binding.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { Navbar100dayComponent } from './components/navbar100day/navbar100day.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';

@NgModule({
  declarations: [
    NgifComponent,
    BindingComponent,
    NgforComponent,
    RxjsComponent,
    Navbar100dayComponent,
    NgclassComponent,
  ],
  imports: [CommonModule, A100dayRoutingModule],
})
export class A100dayModule {}
