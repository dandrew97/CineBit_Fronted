import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss']
})
export class Slider2Component {
  @ViewChild('carrusel') carrusel!: ElementRef;
  @ViewChild('flechaIzquierda') flechaIzquierda!: ElementRef;
  @ViewChild('flechaDerecha') flechaDerecha!: ElementRef;
  
  constructor() {}

  ngOnInit(): void {
    this.flechaIzq();
    this.flechaDer();
  }

  flechaIzq() {
    const carruselElement = this.carrusel.nativeElement;
    const flechaIzquierdaElement = this.flechaIzquierda.nativeElement;
    

    flechaIzquierdaElement.addEventListener('click', () => {
      carruselElement.scrollLeft -= carruselElement.offsetWidth;
    });
  };

  flechaDer() {
    const carruselElement = this.carrusel.nativeElement;
    const flechaDerechaElement = this.flechaDerecha.nativeElement;

    flechaDerechaElement.addEventListener('click', () => {
    carruselElement.scrollLeft += carruselElement.offsetWidth;
    });
  }
    
  

  // ngOnInit(): void {
  //   const fila: HTMLElement = this.contenedorCarrusel.nativeElement;
  //   const flechaDerecha = fila.querySelector('.flechaDerecha');

  //   flechaDerecha?.addEventListener('click', () => {
  //     fila.scrollLeft += fila.offsetWidth
  //   })
  // }
}