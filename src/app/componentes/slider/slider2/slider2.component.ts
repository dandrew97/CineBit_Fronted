import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss']
})
export class Slider2Component implements OnInit {
  @ViewChild('contenedorCarrusel') contenedorCarrusel!: ElementRef;
  
  constructor() {}

  ngOnInit(): void {
    const fila: HTMLElement = this.contenedorCarrusel.nativeElement;
    const flechaDerecha = fila.querySelector('.flechaDerecha');

    flechaDerecha?.addEventListener('click', () => {
      fila.scrollLeft += fila.offsetWidth
    })
  }
}