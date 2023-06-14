import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//! Importaciones paginas
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RegistrarComponent } from './paginas/registrar/registrar.component';
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './paginas/home/home.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { ExploraComponent } from './paginas/explora/explora.component';
import { Top5Component } from './paginas/top5/top5.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
//! Importaciones Subpaginas
import { CartoonsComponent } from './subpaginas/cartoons/cartoons.component';
import { ColeccionesComponent } from './subpaginas/colecciones/colecciones.component';
import { DocumentalesComponent } from './subpaginas/documentales/documentales.component';
import { GenerosComponent } from './subpaginas/generos/generos.component';
import { PeliculasComponent } from './subpaginas/peliculas/peliculas.component';
import { SeriesComponent } from './subpaginas/series/series.component';
//! Importación 404 
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'registrar', component:RegistrarComponent},
  { path: 'iniciar-sesion', component:IniciarSesionComponent},
  { path: 'home', component:HomeComponent},
  { path: 'favoritos', component:FavoritosComponent},
  { path: 'explora', component:ExploraComponent},
  { path: 'top5', component:Top5Component},
  { path: 'perfil', component:PerfilComponent},

  { path: 'cartoons', component:CartoonsComponent},
  { path: 'colecciones', component:ColeccionesComponent},
  { path: 'documentales', component:DocumentalesComponent},
  { path: 'generos', component:GenerosComponent},
  { path: 'peliculas', component:PeliculasComponent},
  { path: 'series', component:SeriesComponent},
  
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: 'NotFoundComponent' },

  {path:'user', component:UserComponent, loadChildren:() =>
  import('./user/user.module')
  .then(m => m.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }