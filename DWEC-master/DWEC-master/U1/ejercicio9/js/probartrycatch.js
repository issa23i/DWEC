/** 
 * 9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.
Realizar con Swich
 */
'use strict';
let num1, num2, op
num1 = parseInt(prompt("Introduzca un número"))

do {
    op = (prompt("Introduzca un operador lógico"))
} while ( !( op==='+' || op==='-' || op==='*' || op==='/' ) ) // repite hasta que no introduzca un operador válido

num2 = parseInt(prompt("Introduzca un número"))

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
        try{
            console.log(num1/num2);
        } catch (error) {       
           console.log("El dividendo no puede ser 0"); 
        }
        break;

    default:
        console.log("Hubo un error");
        break;
}