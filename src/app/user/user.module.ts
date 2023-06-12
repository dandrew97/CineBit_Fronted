import { NgModule } from '@angular/core'; //TODO Importación del módulo NgModule para la definición del módulo principal
import { BrowserModule } from '@angular/platform-browser'; //TODO Importación del módulo BrowserModule para la compatibilidad con el navegador
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //TODO Importación del módulo BrowserAnimationsModule para habilitar animaciones
import { MatFormFieldModule } from '@angular/material/form-field'; //TODO Importación del módulo MatFormFieldModule para utilizar campos de formulario de Material
import { MatInputModule } from '@angular/material/input'; //TODO Importación del módulo MatInputModule para utilizar campos de entrada de Material
import { MatSelectModule } from '@angular/material/select'; //TODO Importación del módulo MatSelectModule para utilizar selectores de Material
import { ReactiveFormsModule } from '@angular/forms'; //TODO Importación del módulo ReactiveFormsModule para trabajar con formularios reactivos
import { MatIconModule } from '@angular/material/icon'; //TODO Importación del módulo MatIconModule para utilizar iconos de Material
import { MatChipsModule } from '@angular/material/chips'; //TODO Importación del módulo MatChipsModule para utilizar chips de Material
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  
  declarations: [
    LoginComponent,
    CreateComponent,
    ProfileComponent,
    
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule
})

export class UserModule { }
