import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { authInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    AuthService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
