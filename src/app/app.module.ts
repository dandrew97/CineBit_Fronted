//TODO: Importaciones necesarias de los módulos y componentes de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//TODO: Importación del módulo de enrutamiento de la aplicación
import { AppRoutingModule } from './app-routing.module';

//TODO: Importación de los componentes principales de la aplicación
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PaginasComponent } from './paginas/paginas.component';

//* Definición del módulo principal de la aplicación
@NgModule({
  //* Declaración de los componentes utilizados en la aplicación
  declarations: [
    AppComponent,
    UserComponent,
    PaginasComponent,
  ],
  //* Importación de los módulos requeridos para la aplicación
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], //? Proveedores de servicios para la aplicación
  bootstrap: [AppComponent] //? Componente raíz que se cargará en la aplicación
})
export class AppModule { }