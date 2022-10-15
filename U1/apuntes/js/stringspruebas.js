let palabra1 = 'adacadabra'
let palabra2 = 'patadecabra'
let palabra3 = '8aesaaaaaa'



let nuevoArray = palabra1.split('').filter( l => l==='a')
console.log(nuevoArray); // 'aaaaa'
console.log(nuevoArray.length); // 5