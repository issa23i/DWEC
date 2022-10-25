"use strict";
// 41. Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numRandom = () =>  parseInt(Math.random()*(600-501)+501)
console.log(numRandom());