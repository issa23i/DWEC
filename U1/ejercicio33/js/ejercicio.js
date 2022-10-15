"use strict";

// 33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
// Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
// ¡ o ¿
let rg = new RegExp(/[0-9\W]/) // numero o caracter especial
const validateName = (str) => ! (rg.test(str.replaceAll(' ',''))) 
let str = 'Isabel Pastor'
console.log(`El nombre ${str} es ${validateName(str)}`);