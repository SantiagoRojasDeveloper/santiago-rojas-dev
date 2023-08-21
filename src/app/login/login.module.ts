import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule],
    exports: [LoginComponent],
})
export class LoginModule { }
