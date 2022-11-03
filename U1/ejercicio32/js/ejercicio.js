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

const vowelsAndConsonantsCouter = (str) => {
    let result = {vocales: vowelsCounter(str), consonantes: consonantsCounter(str)}
    return result
}

let str = 'aaaaattttt 123--_?¿¡! '
//console.log(`La palabra ${str} tiene ${vowelsAndConsonantsCouter(str)[vocales]} vocales y `);

const vocalesYconsonantes = str => {
    let largo = str.length
    let regexVocales = new RegExp(/[aeiouáéíóú]/gi)
    let vocales = (str.match(regexVocales)).length
    let regexConsonantes = new RegExp(/[^aeiouáéíóú\d_¡!¿?\s\-]/gi)
    let consonantes = (str.match(regexConsonantes)).length
    return {vocales: vocales, consonantes: consonantes, total: largo}
}
console.log(vocalesYconsonantes(str));