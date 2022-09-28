// 6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario.
'use strict';
let num1, num2, aux
num1 = parseInt(prompt("Introduzca un número"))
num2 = parseInt(prompt("Introduzca un número"))

if ( num1>num2){ // nos aseguramos que num1 siempre sea el menor
    aux = num1
    num1 = num2
    num2 = aux
    aux = 0
}
while ( num1 < num2-1) {
    num1++;
    if(num1%2!==0) { // si es impar
        console.log(num1)
    }
}
