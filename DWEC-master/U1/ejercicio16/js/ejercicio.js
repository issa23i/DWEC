/**
16. Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A
 */
let character, number, word
character = prompt('Introduzca un caracter').charAt(0)
number = parseInt(prompt('Introduzca un número'))
word = character.repeat(number) // n veces character

const line = w => { 
    if (w.length === 0) {
        return
    }
    console.log(w)
    line(w.substring(0,w.length-1)) // menos una letra
}

line(word)
