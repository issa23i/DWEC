"use strict";
// Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
// primero almacena los números pares y en el segundo los impares, pe.
// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}

const peersAndOdd = array => {
    let peers = array.filter(n => n%2===0 )
    let odd = array.filter(n => !(n%2===0) )
    return {pares: peers, impares: odd}
}

// otra forma de hacerlo con map
const peersAndOdd2 = array => {
    let peers = []
    let odd = []
    array.map( n => n%2===0 ? peers.push(n) : odd.push(n))
    return {pares: peers, impares: odd}
}
let array= [1,2,3,4,5,6,7,8,9,0]
//console.log(peersAndOdd(array));
//console.log(peersAndOdd2(array));

///////////////
const paresImpares = array => {
    let pares = []
    let impares = []
    array.map(n => n%2 === 0? pares.push(n) : impares.push(n))
    return {pares: pares, impares: impares}
}
console.log(paresImpares(array));
