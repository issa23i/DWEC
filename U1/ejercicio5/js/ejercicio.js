//Mostrar todos los números que hay entre dos números introducidos por el usuario.
function countNumbersBetween(num1, num2){
    for (let i = num1+1 ; i < num2 ; i++) {
        alert(`${i}`)
    }
}


function putNumber(){
    let num = Math.floor(prompt(`Introduzca un número`))
    return num
}

countNumbersBetween(putNumber(), putNumber())