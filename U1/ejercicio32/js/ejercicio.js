"use strict";

// 32. Programa una función que dada una cadena de texto cuente el número de vocales y
//     consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5

const vowelsCounter = (str) => {
    let regex = new RegExp(/[aeiou]/gi)
    return Array.from(str.matchAll(regex)).length
}

const consonantsCounter = (str) => {
    let reges = new RegExp(/\W/g)
    // largo de la cadena - vocales - otros caracteres
    return str.length - vowelsCounter(str) - Array.from((str).matchAll(reges)).length
}


let str = 'Hola Mundo'
console.log(`La palabra ${str} tiene ${vowelsCounter(str)} vocales`);
console.log(`La palabra ${str} tiene ${consonantsCounter(str)} consonantes`);




