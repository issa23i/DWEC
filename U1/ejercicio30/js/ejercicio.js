"use strict";

// 30. Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento.

const yearsOld = (y,m,d) =>  {
    let today = new Date()
    let birthday = new Date(y,m,d)
    let year = today.getFullYear() - Math.abs(birthday.getFullYear())
    if(d>today.getDay && m==today.getMonth) {
        year--;
    } else if (m>today.getMonth) {
        year--;
    }
    return year
}
console.log(yearsOld(1975,3,6));
