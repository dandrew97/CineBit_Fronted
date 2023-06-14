import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './home/home.component';
import { Top5Component } from './top5/top5.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PerfilComponent } from './perfil/perfil.component';

import { NavComponent } from '../componentes/nav/nav.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { SliderHorizontalComponent } from '../componentes/slider/slider-horizontal/slider-horizontal.component';
import { SliderPrincipalComponent } from '../componentes/slider/slider-principal/slider-principal.component';
import { SliderVerticalComponent } from '../componentes/slider/slider-vertical/slider-vertical.component';
import { Slider2Component } from '../componentes/slider/slider2/slider2.component';

import { PaginasRoutingModule } from './paginas-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SliderHorizontalComponent,
    SliderPrincipalComponent,
    SliderVerticalComponent,
    Slider2Component,

    InicioComponent,
    RegistrarComponent,
    IniciarSesionComponent,
    HomeComponent,
    Top5Component,
    FavoritosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    
    HttpClientModule,
    PaginasRoutingModule
  ],
  providers: []
})
export class PaginasModule { }