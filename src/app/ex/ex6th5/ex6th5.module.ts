import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex6th5RoutingModule } from './ex6th5-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowerrorComponent } from './common/showerror/showerror.component';
import { InputComponent } from './common/input/input.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { PopupComponent } from './popup/popup.component';
import { ShowerrortemplateComponent } from './common/showerrortemplate/showerrortemplate.component';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
// import { NgxIntlTelInputModule } from '@khazii/ngx-intl-tel-input';
// import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [
    ReactiveComponent,
    TemplatedrivenComponent,
    ShowerrorComponent,
    InputComponent,
    PopupComponent,
    ShowerrortemplateComponent
  ],
  imports: [
    CommonModule,
    Ex6th5RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Ng2TelInputModule,
    NgxIntlTelInputModule,
    MatSelectCountryModule,
    NgxCountriesDropdownModule
  ]
})
export class Ex6th5Module { }
