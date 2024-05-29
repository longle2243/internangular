import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ShowerrortemplateComponent } from './common/showerrortemplate/showerrortemplate.component';
import { ListformComponent } from './listform/listform.component';
import { ShareModule } from '@app/modules/share/share.module';

@NgModule({
  declarations: [
    ReactiveComponent,
    TemplatedrivenComponent,
    ShowerrortemplateComponent,
    PopupComponent,
    ListformComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule,
  ],
})
export class RegisterModule {}
