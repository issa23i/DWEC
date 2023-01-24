import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css'],
})
export class JsonComponent {
  libro1: Libro = new Libro('Mucho ruido y pocas nueces', 'Comedia');
  libro2: Libro = new Libro('Romeo y Julieta', 'Drama');
  librosArray: Libro[] = [this.libro1, this.libro2];
  escritor = new Escritor(
    1,
    'William Shakespeare',
    new Date(1564, 3, 26),
    this.librosArray
  );
}
export class Libro {
  constructor(public titulo: string, public tematica: string) {}
}
export class Escritor {
  constructor(
    public id: number,
    public nombre: string,
    public fecha: Date,
    public libros: Libro[]
  ) {}
}
