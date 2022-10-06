/**
 * 18. Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".
 */

const cutString = (str,num) => str.substring(0,num)

console.log(cutString("I\'m the fucking master of the universe",23));