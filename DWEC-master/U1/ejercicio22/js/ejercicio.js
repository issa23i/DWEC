/**
 * 22. Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
const wordCount = (str, word) => {
    let r = new RegExp(word,'g')
    return str.match(r).length
} 

console.log(wordCount('Hola Mundo, ¿qué tal Mundo?, yo muy bien Mundo', 'Mundo'))
