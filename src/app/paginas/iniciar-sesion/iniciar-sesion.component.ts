//? Importaciones necesarias
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

//? Interfaz para las frutas
export interface Fruit {
  name: string;
}
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

//? Componente del formulario de registro
@Component({
  selector: 'app-registrar',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
  //? Control para el campo de correo electrónico
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  //? Lista de frutas
  fruits: Fruit[] = [
    { name: 'Terror' },
    { name: 'Drama' },
    { name: 'Romance' }
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


/**
 * @title Basic checkboxes
 */
export class CheckboxOverviewExample {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}