/** 
 * 9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.
Realizar con Swich
 */
'use strict';
let num1, num2, op
num1 = parseInt(prompt("Introduzca un número"))
num2 = parseInt(prompt("Introduzca un número"))

do {
    op = (prompt("Introduzca un operador lógico"))
} while ( !( op==='+' || op==='-' || op==='*' || op==='/' ) ) // repite hasta que no introduzca un operador válido

switch (op) {
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;

    case '*':
        console.log(num1*num2);
        break;

    case '/':
        console.log(num1/num2);
        break;
    default:
        break;
}