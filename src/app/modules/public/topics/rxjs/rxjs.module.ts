import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ShareModule } from '@app/modules/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CombinationComponent } from './components/combination/combination.component';

@NgModule({
  declarations: [ProfileComponent, CombinationComponent],
  imports: [CommonModule, RxjsRoutingModule, ShareModule, ReactiveFormsModule],
})
export class RxjsModule {}
