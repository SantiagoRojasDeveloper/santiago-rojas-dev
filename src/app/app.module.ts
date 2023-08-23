import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LanguagesComponent } from './languages/languages.component';
import { NavegationComponent } from './navegation/navegation.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ProjectsComponent,
    ContactComponent,
    LanguagesComponent,
    NavegationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
