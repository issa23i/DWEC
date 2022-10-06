//rest
/**
 function pruebaParREST(a, b, ...masParametros) {
    console.log("a: "+a+" b: "+ b + " otros: " + masParametros);
    }
    pruebaParREST("param1", "param1", "param3", "param4", "param5");

 */

// arrowq

// Arrow Functions
//Expresión de la función
/**
 * const sumar = function (n1,n2) {
    return n1+n2;
    }
    Arrow function equivalente: se elimina la palabra reservada function y fue
    ra del parántesis de los parámetros pones la flecha =>
    además las {} son opcionales si solo tienes una línea y el return es
    implícito. Si no hubiera parámetros hay que poner los paréntesis ()
    const sumar = (n1, n2) => n1 + n2;
    const res=sumar(5, 12);
    console.log(`El resultado es ${res}`);
    //Expresión de la función
    const aprendiendo =function (tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
    }
    
    Arrow function equivalente: se elimina la palabra reservada function y fue
    ra del parántesis de los parámetros pones la flecha =>
    
*/

let nombres = ['Pedro', 'Juan', 'Elena'];
console.log(nombres.map(nom => nom.length));
// Muestra el array con los valores [5, 4, 5]
let sumaNombres= nombres.reduce((acumulador, elemento) => {
acumulador + elemento.length;
}, 0);
// Muestra la suma de la longitud de los nombres
console.log(sumaNombres);
