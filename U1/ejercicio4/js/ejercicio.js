//Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
//hasta introducir un número negativo y entonces mostrar el resultado.

function arithmeticLoop (num1, num2) {
    let control
    control = 0
    while (control>=0){
        alert(`La suma de ${num1} y ${num2} es : ${num1+num2}`)
        alert(`El producto de ${num1} y ${num2} es : ${num1*num2}`)
        alert(`El promedio de ${num1} y ${num2} es : ${(num1+num2)/2}`)
        control = Math.floor(prompt(`Si desea salir escriba un número negativo`))
       if (control>=0) {
        num1 = putNumber()
        num2 = putNumber()
       }
    }
}
function putNumber(){
    let num = Math.floor(prompt(`Introduzca un número`))
    return num
}
arithmeticLoop(putNumber(), putNumber())
