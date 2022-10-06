/**
 * 25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */
const capicua = str => {
    return str.trim().split('').reverse().toString().replaceAll(',', '') === str ? true : false
    
}

console.log(capicua("hola_aloh"));