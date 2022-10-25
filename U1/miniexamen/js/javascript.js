
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

///********* otra forma con expresiones regulares
const ocurrencias = (expre) => {
    const result = expre.match(expre)
    if (result === null)return 0
    else return result.length;
}

const c = (entrada , caracter) => {
    const textos = entrada.filter(item => typeof(item) =="string")
    const expr = new RegExp(c,"ig");
    return textos.filter (item => ocurrencias(item,expr) >= 2)
}
//************** */
