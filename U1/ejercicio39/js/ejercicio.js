"use strict";
// 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
// Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]
// filter (elemento, indice) => array.indexOf(elemento) === indice
// si está repetido, la primera vez será verdadero, pero las próximas ya no
const removeDuplicates = array => array.filter( (n,m) => array.indexOf(n) === m) 
const array = ['x',10,'x',2,'10',10, true,true]
 console.log(removeDuplicates(array));
// OTRA FORMA ES CON SET
// cpmst sinDuplicados = (elementes = undefined) => [...new Set (elements)];
let conjunto = new Set(array)
conjunto = Array.from(conjunto)
// console.log(conjunto);

let sinDuplicados = (array) => [...new Set (array)]
console.log(sinDuplicados(array));

// en ejercicios resueltos :
// lo del undefined es que si no se pasa parámetro, será undefined
// const withoutDuplicates1 = (elements = undefined) => elements.filter((item,index)=>elements.indexOf(item) === index);
// console.log(withoutDuplicates1(array));