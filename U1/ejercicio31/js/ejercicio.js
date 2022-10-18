"use strict";

// 31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
//      el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”)

const howLong = (y,m,d) =>  {
    let today = new Date()
    let year = today.getFullYear() - Math.abs(new Date(y,m,d).getFullYear())
    if(d>today.getDay && m==today.getMonth) {
        year--;
    } else if (m>today.getMonth) {
        year--;
    }
    return year
}

console.log(howLong(1992,8,4));

