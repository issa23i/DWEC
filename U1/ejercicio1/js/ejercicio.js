// Dados dos números indicar cuál es mayor, menor o si son iguales.
function isGreaterThan(num1, num2) {
    num1>num2?alert(`El número ${num1} es mayor que ${num2}.`):alert(`El número ${num1} es menor que ${num2}.`)
}
function compareNumbers(num1, num2) {
    num1===num2?alert(`El número ${num1} es igual que ${num2}.`):isGreaterThan(num1,num2)
}
// Comprobar funcionamiento
let num1, num2
num1 = 3
num2 = 19
compareNumbers(num1,num2)