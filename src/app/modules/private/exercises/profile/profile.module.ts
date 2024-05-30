import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserformComponent } from './userform/userform.component';
import { AdminformComponent } from './adminform/adminform.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { AddressformComponent } from './addressform/addressform.component';
import { ShareModule } from '@app/modules/share/share.module';

@NgModule({
  declarations: [
    UserformComponent,
    AdminformComponent,
    EmployeeformComponent,
    AddressformComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule, ShareModule],
})
export class ProfileModule {}
