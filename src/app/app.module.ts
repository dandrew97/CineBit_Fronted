import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AvatarsComponent } from './componentes/avatars/avatars.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SliderHorizontalComponent } from './componentes/slider/slider-horizontal/slider-horizontal.component';
import { SliderPrincipalComponent } from './componentes/slider/slider-principal/slider-principal.component';
import { SliderVerticalComponent } from './componentes/slider/slider-vertical/slider-vertical.component';
import { Slider2Component } from './componentes/slider/slider2/slider2.component';
import { ExploraComponent } from './paginas/explora/explora.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { HomeComponent } from './paginas/home/home.component';
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { RegistrarComponent } from './paginas/registrar/registrar.component';
import { Top5Component } from './paginas/top5/top5.component';
import { SeriesComponent } from './subpaginas/series/series.component';
import { PeliculasComponent } from './subpaginas/peliculas/peliculas.component';
import { CartoonsComponent } from './subpaginas/cartoons/cartoons.component';
import { ColeccionesComponent } from './subpaginas/colecciones/colecciones.component';
import { DocumentalesComponent } from './subpaginas/documentales/documentales.component';
import { GenerosComponent } from './subpaginas/generos/generos.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
