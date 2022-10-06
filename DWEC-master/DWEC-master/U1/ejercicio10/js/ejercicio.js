/**
 * 10. Programa una función que determine si un número es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true
 */

/**
 * forma tradicional de función
 * @param {*} num 
 */
function isPrime(num){
    let msgPrime = `El número ${num} es un número primo`
    let msgNotPrime = `El número ${num} no es un número primo`
    for (let i = num-1; i > 1; i--) {
        if (num%i===0){
            return msgNotPrime
        }
    }
    return msgPrime
}
let num
num = parseInt(prompt('Introduzca un número'))
console.log(isPrime(num))