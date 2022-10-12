"use strict";
/**
 * 27. En un vector de números, indicar:
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, -8, 19, 29, 39, 100, -102]
console.log(`En un vector de números: \n
    ${numbers} \n Indicar: \n`);

// a. El número de elementos del vector.
console.log(`El número de elementos del vector: \n
    ${numbers.length}`);


// b. Cuántos son pares y cuántos impares y cuáles son.
let par = numbers.filter(number => number % 2 === 0) // filtra con la condicion de pares
let odd = numbers.filter(number => number % 2 !== 0) // filtra con la condicion de impares

console.log(`Hay ${par.length} números pares del vector, y son: \n
        ${par}`);


// c. La suma de todos los números negativos.
let negatives = numbers.filter(x => x < 0) // filtra con la condicion de menores que 0
                       .reduce((x,y) => x + y) // suma todos los numeros del array resultante
console.log(`Los números negativos del vector suman: \n
        ${negatives}`);


//d. El producto de todos los números positivos.
let positives = numbers.filter(x => x > 0) // filtra con la condicion mayores que 0
                       .reduce((x,y) => x * y) // multiplica todos los numeros del array resultante
console.log(`El producto de los números positivos del vector es: \n
    ${positives}`);

// e. Cuántos son primos y cuáles son.


//////////////////////
const isPrime = n => {
    for (let i = 2; i < Math.abs(n); i++) {
        if (n%i===0) {
            return false
        } else {
            continue
        }
    }
    return true
}
let primes = numbers.filter(n => isPrime(n)) // usa la función isPrime para filtrar
let notPrimes = numbers.filter(n => !(isPrime(n))) // filtra los numeros no incluidos en primes

console.log(`Los números primos del vector son: \n
    ${primes} \n
Los números que no son primos en el vector son : \n
    ${notPrimes}`);

// f. Los números que ocupan las posiciones pares del vector.
let parPlace = []
for (let i = 0; i < numbers.length; i++) {
    if (i%2===0) {parPlace.push(numbers[i])}
        
}
console.log(`Los números que ocupan las posiciones pares en el Array son: \n
        ${parPlace}`);

// g. El número mayor. // utilizar sort
// let major = Math.max.apply(null, numbers) 
let major = numbers.reduce((x,y) => x>y?x:y)
console.log(`El número mayor del array es : ${major}`);

// h. El número menor.
// let minor = Math.min.apply(null, numbers)
let minor = numbers.reduce( (x,y) => x<y ? x : y )
console.log(`El número menor del array es : ${minor}`);

// i. La media de todos los números, los números que están por encima y los que están por debajo.
let average = numbers.reduce( (x,y) => x + y ) / numbers.length // la suma de todos los números del array / longitud del array
console.log(`El promedio del array es : ${average}`);

// j. El vector ordenado de mayor a menor y viceversa.
let orderedList = Array.from(numbers).sort((a,b) => a - b) // ordenar de mayor a menor una copia de numbers
let orderedListReverse = Array.from(numbers).sort((a,b) => b - a)
console.log(`Lista ordenada de menor a mayor : \n ${orderedList} \n
Lista ordenada de mayor a menor: \n ${orderedListReverse}`);


// k. Buscar un valor introducido por el usuario e indicar si existe o no.
let userValue = prompt(`Introduzca un número a buscar: `)
let encontrado = numbers.find(a => a == userValue)
encontrado ? console.log(`¡El número ${userValue} ha sido encontrado!`) : console.log(`El número ${userValue} no ha sido encontrado`);

