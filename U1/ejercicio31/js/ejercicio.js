"use strict";

// 31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
//      el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”)

const howLong = (y,m,d) =>  new Date().getFullYear() - new Date(y,m,d).getFullYear()

console.log(howLong(1992,8,4));