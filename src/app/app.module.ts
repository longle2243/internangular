import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TodolistComponent } from './todolist/todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { Day2Component } from './day2/day2.component';
import { Day1RoutingModule } from './day1/day1-routing.module';
import { Ex1Component } from './ex/ex1/ex1.component';
import { Day7Component } from './day7/day7.component';
import { HttpClientModule } from '@angular/common/http';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    TodolistComponent,
    FormComponent,
    FormgroupComponent,
    FormbuilderComponent,
    Day2Component,
    Ex1Component,
    Day7Component,
    Day3Component,
    Day4Component,
    Day5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Day1RoutingModule
  ],
  providers: [
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
