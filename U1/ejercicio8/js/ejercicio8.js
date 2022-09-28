// 8. Mostrar la tabla de multiplicar de un número introducido por pantalla.
'use strict';
let num, counter
num = parseInt(prompt("Introduzca un número"))
counter = 0
while (counter<11) {
    console.log(`${num} por ${counter} es igual a ${counter*num}`)
    counter++
}
