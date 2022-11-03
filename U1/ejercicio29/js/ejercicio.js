"use strict";

// 29. Programa una función para convertir números de base binaria a decimal y viceversa, pe.
// miFuncion(100,2) devolverá 4 base 10

let numB10 = 3703
let numB2 = '111001110111'
console.log(numB10.toString(2));
/// a hexadecimal
numB10 = 555684113561846486
let numB16 = numB10.toString(16)
console.log(`el número en base 10 :  ${numB10}, pasado a hexadecimal es: ${numB10.toString(16)}`);



console.log(`el número de base 10  :  ${numB10}, pasado a base 2 es: ${numB10.toString(2)}`);
console.log(`el número de base 2 : ${numB2}, pasado a base 10 es: ${parseInt(numB2,2)}`);
console.log(`el número de base 2 : ${numB16}, pasado a base 10 es: ${parseInt(numB16,16)}`);

