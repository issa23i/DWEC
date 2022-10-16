"use strict";
// 38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
// descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }

const orderedArrays = array => {
    // para que no se modifique el array pasado por parametro dos veces
    let asc = [ ...array].sort( (a,b) => a -b)
    let desc = [ ...array].sort( (a,b) => b -a)
    console.log(`asc: ${asc}, desc: ${desc}`);
}

const nums = [7,5,7,8,6]
orderedArrays(nums)