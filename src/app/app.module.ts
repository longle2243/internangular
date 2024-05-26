import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HomeComponent } from './components/home/home.component';
import { QuestionformComponent } from './modules/exercises/9May/questionform/questionform.component';
import { ListquestionComponent } from './modules/exercises/9May/listquestion/listquestion.component';
import { QuestiondetailComponent } from './modules/exercises/9May/questiondetail/questiondetail.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { authInterceptor } from './auth.interceptor';
import { AddressformComponent } from './modules/exercises/24May/addressform/addressform.component';
import { UserformComponent } from './modules/exercises/24May/userform/userform.component';
import { AdminformComponent } from './modules/exercises/24May/adminform/adminform.component';
import { EmployeeformComponent } from './modules/exercises/24May/employeeform/employeeform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionformComponent,
    ListquestionComponent,
    QuestiondetailComponent,
    AddressformComponent,
    UserformComponent,
    AdminformComponent,
    EmployeeformComponent,
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
    JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    AuthService,
    authInterceptor, { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
