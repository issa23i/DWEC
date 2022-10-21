"use strict";
// 40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
// este formato dd/mm/aaa.
const yearsOld = (birdtday) => {
    let date = new Date(birdtday)
    let now = new Date()
    return now.getFullYear()-date.getFullYear()
}

console.log(yearsOld('06/03/1975'));