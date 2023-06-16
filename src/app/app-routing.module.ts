//TODO: Importaciones necesarias de los módulos y componentes de Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//TODO: Importación de los componentes utilizados en las rutas
import { PaginasComponent } from './paginas/paginas.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { UserComponent } from './user/user.component';

//TODO: Definición de las rutas de la aplicación
const routes: Routes = [
  {path: '', component: InicioComponent},
  {
    path: 'paginas',
    component: PaginasComponent,
    loadChildren: () =>
      import('./paginas/paginas.module').then((m) => m.PaginasModule) //? Carga dinámica del módulo asociado al componente
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule) //? Carga dinámica del módulo asociado al componente
  }
];

//* Definición del módulo de enrutamiento de la aplicación
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }