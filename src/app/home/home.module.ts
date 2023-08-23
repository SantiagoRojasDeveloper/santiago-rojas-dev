import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { LanguagesComponent } from '../languages/languages.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  {
    path: 'home', // Ruta raíz del módulo home
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' }, // Redirección de /home a /home/info
      { path: 'info', component: PersonalInfoComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'languages', component: LanguagesComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
