/**
 * 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */
// tener en cuenta espacios mayusculas y tildes  --- para quietar espacios replace([/W]g) todo lo que no sea digitos alfanumericos
const esPalindromo = str => {
    str = str.split('').join().toUpperCase().replaceAll(',','')
    let delReves = str.split('').reverse().join().toUpperCase().replaceAll(',','')
    let b = true
    count = 0

    while(count<str.length){
        str[count] === delReves[count] ? b = true : b = false 
        count++
    }

    return b
}

console.log(esPalindromo('opera arepo'));