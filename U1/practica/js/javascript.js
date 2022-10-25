/**
Dado un vector con números y textos:
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
c) Si carácter es ‘a’, devolverá [“hola que haces”,”pala”] */
entrada = new Array(1,"2","cuatro","hola que haces", 8, 7, 22, 11, "Dumbo", "pala")

funcion1 = (array) => {
    letras = 0;
    numeros = 0;
    array.map(n => parseInt(n)===n  ? letras++ : numeros++)
    return {letras: letras,numeros: numeros};
}
 console.log(funcion1(entrada));


funcion2 = (array) => {
    array = array.map(n => parseInt(n)===n  ? letras++ : numeros++)
    return new Set(array.filter((n) => {
        primo = true
        for (let i = 2; i < n; i++) {
            if ( n%[i]===0 ) {primo = false}
        }
        return primo
    }
    ))
}
console.log(funcion2(entrada));


funcion3 = (array , v) => {
    rgex = new RegExp(/v/ig)
    array.filter((str) => (Array.from(str)).includesAll(rgex).length > 1)
}
console.log(funcion3("porejemplo, o"));