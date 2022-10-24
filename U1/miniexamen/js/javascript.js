/**
 * Dado un vector con números y textos:
a) Crea una función que devuelva cuántos textos y cuántos números hay. [3p]
b) Crea una función que devuelva todos los números que sean primos. [3 p]
c) Crea una función que devuelva todas las palabras que tengan un carácter repetido (ya sea
mayúscula o minúscula), al menos, dos veces, que se le pase por parámetro. El carácter
es una constante que se modifica en el código y debe estar debidamente indicada. [4p]
No se pueden usar prompt, ni alert, ni componentes de ese tipo.
Las funciones no pueden incluir un texto de resultado, solo pueden devolver el dato que se
solicita.
Se valorará positivamente el uso de las estructuras propias de Javascript vistas en clase: arrow
functions, expresiones regulares, funciones de array y de cadenas, estructuras repetitivas para
arrays o cadenas, ...
Ejemplo:
Entrada: [1,”2”, “cuatro”,”hola que haces”,8,7,22,11,”Dumbo”,”pala”]
Salida:
a) {textos:5,números:5}
b) [1,7,11]
c) Si carácter es ‘a’, devolverá [“hola que haces”,”pala”]
 */
entrada = [1,"2", "cuatro","hola que haces",8,7,22,11,"Dumbo","pala"]
//a) Crea una función que devuelva cuántos textos y cuántos números hay. [3p]
const funcion1 = (array) => {
    let numeros = 0
let textos = 0
array.map(w => typeof w === 'string' ? textos++ : numeros++)
return {numeros: numeros, textos:textos}
}
console.log(funcion1(entrada));

//b) Crea una función que devuelva todos los números que sean primos. [3 p]
const funcion2 = (array) => {
    let numeros = array.filter(w => typeof w === 'number')
    let primos = []
    for (const i of numeros) {
        let primo = true
        for (let j = 2; j < i; j++) {
            if(i%j===0){
                primo=false
            } 
        }
        if (primo) {
            primos.push(i)
        }
    }
    return primos
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