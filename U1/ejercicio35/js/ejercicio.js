"use strict";
// Programa una función que dado un array numérico devuelve otro array con los números
// elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]

const toSquare = (nums) => nums.map(num => num*num )
let arrayNums = [1,2,3,4]
console.log(toSquare(arrayNums))