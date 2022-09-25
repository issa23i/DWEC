/*
 * Modifica el programa anterior: si los números no son un número o son menores o iguales a
 * ceros, que los vuelva a pedir.
 */

function isGreaterThan(num1, num2) {
  num1 > num2
    ? alert(`El número ${num1} es mayor que ${num2}.`)
    : alert(`El número ${num1} es menor que ${num2}.`);
}
function compareNumbers(num1, num2) {
  num1 == num2
    ? alert(`El número ${num1} es igual que ${num2}.`)
    : isGreaterThan(num1, num2);
}
function checkNumber(num) {
  while ( isNaN(num) || num <= 0 ) { 
    // que coincida el tipo y que sea mayor que 0
    num = prompt("Vuelva a introducir el número (Número entero positivo");
  }
  return num;
}

// Comprobar funcionamiento
let num1, num2;
num1 = prompt("Introduzca un número");
num1 = checkNumber(num1);
num2 = prompt("Introduzca otro número");
num2 = checkNumber(num2);
compareNumbers(num1, num2);
