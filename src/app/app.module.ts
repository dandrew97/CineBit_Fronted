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

import { AppRoutingModule } from './app-routing.module'; //TODO Importación del módulo AppRoutingModule para las rutas de la aplicación
import { AppComponent } from './app.component'; //TODO Importación del componente principal AppComponent
import { NavComponent } from './componentes/nav/nav.component'; //TODO Importación del componente NavComponent para la barra de navegación
import { AvatarsComponent } from './componentes/avatars/avatars.component'; //TODO Importación del componente AvatarsComponent para los avatares
import { FooterComponent } from './componentes/footer/footer.component'; //TODO Importación del componente FooterComponent para el pie de página
import { SliderHorizontalComponent } from './componentes/slider/slider-horizontal/slider-horizontal.component'; //TODO Importación del componente SliderHorizontalComponent para un slider horizontal
import { SliderPrincipalComponent } from './componentes/slider/slider-principal/slider-principal.component'; //TODO Importación del componente SliderPrincipalComponent para un slider principal
import { SliderVerticalComponent } from './componentes/slider/slider-vertical/slider-vertical.component'; //TODO Importación del componente SliderVerticalComponent para un slider vertical
import { Slider2Component } from './componentes/slider/slider2/slider2.component'; //TODO Importación del componente Slider2Component para otro slider
import { ExploraComponent } from './paginas/explora/explora.component'; //TODO Importación del componente ExploraComponent para la página de exploración
import { FavoritosComponent } from './paginas/favoritos/favoritos.component'; //TODO Importación del componente FavoritosComponent para la página de favoritos
import { HomeComponent } from './paginas/home/home.component'; //TODO Importación del componente HomeComponent para la página de inicio
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component'; //TODO Importación del componente IniciarSesionComponent para la página de inicio de sesión
import { InicioComponent } from './paginas/inicio/inicio.component'; //TODO Importación del componente InicioComponent para la página de inicio
import { NotFoundComponent } from './paginas/not-found/not-found.component'; //TODO Importación del componente NotFoundComponent para la página de error 404
import { PerfilComponent } from './paginas/perfil/perfil.component'; //TODO Importación del componente PerfilComponent para la página de perfil
import { RegistrarComponent } from './paginas/registrar/registrar.component'; //TODO Importación del componente RegistrarComponent para la página de registro
import { Top5Component } from './paginas/top5/top5.component'; //TODO Importación del componente Top5Component para la página de top 5
import { SeriesComponent } from './subpaginas/series/series.component'; //TODO Importación del componente SeriesComponent para la subpágina de series
import { PeliculasComponent } from './subpaginas/peliculas/peliculas.component'; //TODO Importación del componente PeliculasComponent para la subpágina de películas
import { CartoonsComponent } from './subpaginas/cartoons/cartoons.component'; //TODO Importación del componente CartoonsComponent para la subpágina de dibujos animados
import { ColeccionesComponent } from './subpaginas/colecciones/colecciones.component'; //TODO Importación del componente ColeccionesComponent para la subpágina de colecciones
import { DocumentalesComponent } from './subpaginas/documentales/documentales.component'; //TODO Importación del componente DocumentalesComponent para la subpágina de documentales
import { GenerosComponent } from './subpaginas/generos/generos.component'; //TODO Importación del componente GenerosComponent para la subpágina de géneros

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AvatarsComponent,
    FooterComponent,
    SliderHorizontalComponent,
    SliderPrincipalComponent,
    SliderVerticalComponent,
    Slider2Component,
    ExploraComponent,
    FavoritosComponent,
    HomeComponent,
    IniciarSesionComponent,
    InicioComponent,
    NotFoundComponent,
    PerfilComponent,
    RegistrarComponent,
    Top5Component,
    SeriesComponent,
    PeliculasComponent,
    CartoonsComponent,
    ColeccionesComponent,
    DocumentalesComponent,
    GenerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [], //TODO Proveedores de servicios
  bootstrap: [AppComponent] //TODO Componente raíz de la aplicación
})
export class AppModule { }
