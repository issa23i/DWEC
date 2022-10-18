"use strict";
// Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
// array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]

const maxMin = array =>  {
    let min = array.reduce((n,m) => n<m ? n : m)
    let max = array.reduce((n,m) => n>m ? n : m)
    return {nenor: min, mayor: max}
}
const array = [44, 15, -8, 10, -6]
console.log(maxMin(array));