
entrada = [1,"2", "cuatro","hola que haces",8,7,22,11,"Dumbo","pala"]
//a) Crea una función que devuelva cuántos textos y cuántos números hay. [3p]
const funcion1 = (array) => {
    let arrayStrings = array.filter(w => typeof w === 'string')
    let arrayNumbers = array.filter(w => typeof w === 'number')
    return {numeros: arrayNumbers.length, textos:arrayStrings.length}
}
console.log(funcion1(entrada));

//b) Crea una función que devuelva todos los números que sean primos. [3 p]
const primo = (n) => {
    let esPrimo = true
    for (let i = 2; i < n; i++) {
        if (n%i===0) {
            esPrimo = false
        }
    }
    return esPrimo
}
const funcion2 = (array) => {
    let numeros = array.filter(w => typeof w === 'number')
    numeros = numeros.filter(n => primo(n))
    return numeros
}
console.log(funcion2(entrada));
// c) Crea una función que devuelva todas las palabras que tengan un carácter repetido (ya sea
// mayúscula o minúscula), al menos, dos veces, que se le pase por parámetro. El carácter
// es una constante que se modifica en el código y debe estar debidamente indicada. [4p]
const funcion3 = (array,c) => {
    let cadenas = array.filter(w => typeof w === 'string')
    let repetidos = cadenas.filter(w => w.indexOf(c) !== w.lastIndexOf(c))
    return repetidos
}
console.log(funcion3(entrada,'a'));

///********* otra forma con expresiones regulares
// const ocurrencias = (expre) => {
//     const result = expre.match(expre)
//     if (result === null)return 0
//     else return result.length;
// }

// const c = (entrada , caracter) => {
//     const textos = entrada.filter(item => typeof(item) =="string")
//     const expr = new RegExp(c,"ig");
//     return textos.filter (item => ocurrencias(item,expr) >= 2)
// }
//************** */
// c) Crea una función que devuelva todas las palabras que tengan un carácter repetido (ya sea
// mayúscula o minúscula), al menos, dos veces, que se le pase por parámetro. El carácter
// es una constante que se modifica en el código y debe estar debidamente indicada. [4p]

const caracterRepetido = (entrada,c) => {
    let array = entrada.filter(w => typeof w === 'string') // filtrar sólo los strings del array
    let regexp = new RegExp(c,'gi')
    // filtrar sólo las palabras que contengan al menos dos veces la letra pasada por parámetro (resultado de match . length > 1)
    // primero debe comprobar que no es null el resultado de match para que no genere exception al medir el length
    // 
    return array.filter( w => w.match(regexp)!==null && (w.match(regexp).length)>1) 
}
console.log(caracterRepetido(entrada,'H')); 
























