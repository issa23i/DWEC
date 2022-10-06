/**
 * 26. Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.
 */

// versión con funciones de cadena
const startsEndsWith1 = str => {
    return str.charAt(0) === 'm' && str.charAt(str.length-1) === 'd'
}

// versión con expresiones regulares
const startsEndsWith2 = str => {
    return /^m.*d$/.test(str)
}

console.log(startsEndsWith1('mjdf2564-dska99d'));
console.log(startsEndsWith2('mjdf2564-dska99d'));