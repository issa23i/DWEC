/**
 * 21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH".
 */
// const alReves = str => {
//     let count = str.length
//     let aux = ''
//     while(count>0){
//         aux = aux.concat(str[count-1])
//         count--
//     }
    
//     return aux
// }
const alReves = str => str.split('').reverse().join()

console.log(alReves('Hola Mundo'));

