//? Importaciones necesarias
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

//? Interfaz para las frutas
export interface Fruit {
  name: string;
}

//? Componente del formulario de registro
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {
  //? Control para el campo de correo electrónico
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  //? Lista de frutas
  fruits: Fruit[] = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' }
  ];

  //? Método para agregar una fruta
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    //? Agregar la fruta
    if (value) {
      this.fruits.push({ name: value });
    }

    //? Limpiar el valor de entrada
    event.chipInput!.clear();
  }

  //? Método para eliminar una fruta
  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  //? Método para editar una fruta
  edit(fruit: Fruit, event: MatChipEditedEvent): void {
    const value = event.value?.trim();

    //? Eliminar la fruta si ya no tiene un nombre
    if (!value) {
      this.remove(fruit);
      return;
    }

    //? Editar la fruta existente
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
}