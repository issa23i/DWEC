let palabra1 = 'adacadabra'
let palabra2 = 'patadecabra'
let palabra3 = '8aesaaaaaa'



let nuevoArray = palabra1.split('').filter( l => l==='a')
console.log(nuevoArray); // 'aaaaa'
console.log(nuevoArray.length); // 5

/// Así sabemos si es par o impar, par devuelve 0, impar devuelve 1
console.log(6 & 1);