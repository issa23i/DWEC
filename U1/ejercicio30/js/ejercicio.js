"use strict";

// 30. Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento.

let birthday = new Date(2015,5,22)

const yearsOld = (b) =>  new Date().getFullYear() - b.getFullYear()

console.log(yearsOld(birthday));