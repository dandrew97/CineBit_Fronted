import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  

  constructor() {}
  ngOnInit(): void {
    //* Seleccionar elementos del DOM
    const input = document.querySelector('.input') as HTMLInputElement;
    const icon = document.querySelector('.icon') as HTMLButtonElement;

    //? Evento de clic en el ícono para enfocar el input
    icon.addEventListener('click', () => {
      input.focus();
    });

    //? Evento de enfoque del input para agregar la clase 'focused' al ícono
    input.addEventListener('focus', () => {
      icon.classList.add('focused');
    });

    //? Evento de desenfoque del input para quitar la clase 'focused' al ícono si no hay valor en el input
    input.addEventListener('blur', () => {
      if (input.value === '') {
        icon.classList.remove('focused');
      }
    });
  }
}