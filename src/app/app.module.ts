import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    MatSelectCountryModule,
  ],
  providers: [
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
