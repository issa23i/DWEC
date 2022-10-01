/**
13. Programa una función que calcule el factorial de un número (El factorial de un entero positivo
n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
miFuncion(5) devolverá 120.
 */

// MODO NORMAL

// let fact, num, aux
// num = parseInt(prompt(`Ingrese un número entero`))

// fact = (num) => {
//     for (let i = num-1; i > 1; i--) {
//     num *= i
//     }
//     return num
// }

// console.log(fact(num)); 

// MODO RECURSIVO

let num = parseInt(prompt(`Ingrese un número entero`))
let aux = 1
let factorial = num => {
    aux *= num
    console.log(aux);
    if(num === 2){
        return
    }
    return factorial(num-1)
}
factorial(num)