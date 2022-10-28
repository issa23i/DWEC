"use strict";
// 42. Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película
// en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// - Todos los datos del objeto son obligatorios.
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
// - Crea un método estático que devuelva los géneros aceptados*.
// - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
// - Crea un método que devuelva toda la ficha técnica de la película.
// - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma
// automatizada e imprime la ficha técnica de cada película.
// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime,
// Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music,
// Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
class Pelicula{
    constructor (IMDB, titulo, director, a_estreno, pais, genero, calificacion){
        this.IMDB = this.validarIMDB(IMDB)
        this.titulo = this.validarTitulo(titulo)
        this.director = this.validarDirector(director)
        this.a_estreno = this.validarAEstreno(a_estreno)
        this.pais = this.validarPais(pais)
        this.genero = this.validarGenero(genero)
        this.calificacion = this.validarCalificacion(calificacion)
    }
    validarIMDB(IMDB) {
        let regex = new RegExp(/[a-zA-Z]{2}[0-9]{7}/)
        return regex.test(IMDB) ? IMDB : ""
    }

    validarTitulo(titulo) {
        let regex = new RegExp(/.{2-100}/)
        return regex.test(titulo) ? titulo : ""
    }

    validarDirector(director){
        let regex = new RegExp(/.{2-50}/)
        return regex.test(director) ? director : ""
    }

    validarAEstreno(a_estreno){
        let regex = new RegExp(/[0-9]{4}/)
        return regex.test(a_estreno) ? a_estreno : ""
    }

    validarPais(pais){
        typeof(pais)==typeof(Array) ? pais : []
    }

    validarGenero(genero){
        let generos = Pelicula.generos()
        return generos.includes(genero) ? genero : ""
    }

    static generos(){ 
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    validarCalificacion(calificacion){
        let regex = new RegExp(/[0-9]{1,2}\.{0,1}[0-9]{0,1}/)
        return regex.test(calificacion) ? calificacion : ""
    }

    fichaTecnica () {
        return {IMDB: this.IMDB, 
            titulo: this.titulo, 
            director: this.director, 
            a_estreno: this.a_estreno, 
            pais: this.pais, 
            genero: this.genero, 
            calificacion: this.calificacion}
    }

}

let pelicula1 = new Pelicula ("AB1234567","Camino","Alejandro Amenabar", 2015, ("España","Colombia"),"Comedy",8.4)
let pelicula2 = new Pelicula ("098765432","Amanece","Almodovar", 2008, ("España"),"Comedy",7)
let pelicula3 = new Pelicula ("ZT4444444","En los márgenes","Juan Diego Botto", 2022, ("España","Argentina"),"Drama",10)
let peliculas = [pelicula1,pelicula2,pelicula3]
console.log(pelicula1);
console.log(pelicula1.fichaTecnica());
console.log(pelicula2.fichaTecnica());
console.log(pelicula3.fichaTecnica());