import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Week1RoutingModule } from './week1-routing.module';
import { PageComponent } from './page/page.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [
    PageComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    Week1RoutingModule
  ]
})
export class Week1Module { }
