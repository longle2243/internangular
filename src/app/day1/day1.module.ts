import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day1RoutingModule } from './day1-routing.module';
import { SetupenvComponent } from './setupenv/setupenv.component';
import { Day1Component } from './day1.component';
import { FolderstructureComponent } from './folderstructure/folderstructure.component';


@NgModule({
  declarations: [
    SetupenvComponent,
    Day1Component,
    FolderstructureComponent,
  ],
  imports: [
    CommonModule,
    Day1RoutingModule
  ]
})
export class Day1Module { }
