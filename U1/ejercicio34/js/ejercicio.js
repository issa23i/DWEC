"use strict";
// 34. Programa una función que valide que un texto sea un email válido, p.e. miFuncion
// (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
// guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
let regexEmail = new RegExp(/^[\w\._-]+@\w+\.\w{2,4}$/)
console.log(
    regexEmail.test('das@ie.com')
);