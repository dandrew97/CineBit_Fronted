import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './home/home.component';
import { Top5Component } from './top5/top5.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PerfilComponent } from './perfil/perfil.component';

import { CartoonsComponent } from './cartoons/cartoons.component';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { DocumentalesComponent } from './documentales/documentales.component';
import { GenerosComponent } from './generos/generos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'top5', component: Top5Component },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'perfil/:idUsuario', component: PerfilComponent },

  { path: '404', component: NotFoundComponent },

  {path: 'cartoons', component: CartoonsComponent },
  {path: 'colecciones', component: ColeccionesComponent},
  {path: 'documentales', component: DocumentalesComponent},
  {path: 'generos', component: GenerosComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path:'series', component: SeriesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }