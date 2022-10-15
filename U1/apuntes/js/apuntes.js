'use strict';

//Ejemplo IIFE
(function () {
    console.log("Mi primer IIFE");//Mi primer IIFE
})();

// parametros REST
function pruebaParREST(a, b, ...masParametros) {
    console.log("a: "+a+" b: "+ b + " otros: " + masParametros);
}
pruebaParREST("param1", "param1", "param3", "param4", "param5");

//isNaN
    let numero;
do{
    numero=prompt("Esto se repetirá hasta que metas un número");
}while(isNaN(numero));

// Arrow Functions
//Expresión de la función
//const sumar = function (n1,n2) {
//    return n1+n2;
//    }
    /*Arrow function equivalente: se elimina la palabra reservada function y fue
    ra del parántesis de los parámetros pones la flecha =>
    además las {} son opcionales si solo tienes una línea y el return es
    implícito. Si no hubiera parámetros hay que poner los paréntesis ()*/
    const sumar = (n1, n2) => n1 + n2;
    const res=sumar(5, 12);
    console.log(`El resultado es ${res}`);
    //Expresión de la función
    const aprendiendo =function (tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
    }
    /*Arrow function equivalente: se elimina la palabra reservada function y fue
    ra del parántesis de los parámetros pones la flecha =>
    
    DESARROLLO WEB EN ENTORNO CLIENTE UT1. JAVASCRIPT
    
    CFGS. DESARROLLO DE APLICACIONES WEB 34 DE 79
    además las {} son opcionales si solo tienes una línea y puedes quitar los pa
    réntesis () si sólo tienes un parámetro Si no hubiera parámetros hay que
    poner los paréntesis ()*/
    //const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
    aprendiendo('JavaScript');
    
    //Ejemplo:
    let nombres = ['Pedro', 'Juan', 'Elena'];
    console.log(nombres.map(nom => nom.length));
    // Muestra el array con los valores [5, 4, 5]
    let sumaNombres= nombres.reduce((acumulador, elemento) => {
    return acumulador + elemento.length;
    }, 0);
    // Muestra la suma de la longitud de los nombres
    console.log(sumaNombres);