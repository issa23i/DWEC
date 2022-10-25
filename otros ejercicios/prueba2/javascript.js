/**
 * DAdo un vector de números, devuelve un objeto indicando la media, 
 * los números que están por encima y los números que están por debajo
 */
let vector = [3,8,-21,10,100]

const media = vector => (vector.reduce((n,m) => n+m))/vector.length
const encima = vector => vector.filter(n => n>media(vector))
const debajo = vector => vector.filter(n => n<media(vector))


const funcion1 = vector => {
    return {media:media(vector),
            encima:encima(vector),
            debajo:debajo(vector)}
}
// console.log(funcion1(vector));

/***
 * 
 * 
 * 
 * crear una funcion que ordene de mayor a menor
 */
const funcion2 = vector => {
    return vector.sort( (n,m) => n-m  )
}
console.log(funcion2(vector));

// dado un array de textos, crea una funcion que devuelva un nuevo array
//
let textos = ["hola", "pala", "adios"]

const funcion3 = (array, c) => {
    return array.map(txt => txt.split(c).toString().replaceAll(",",""))

}

console.log(funcion3(textos,"a"));