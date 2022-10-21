"use strict";
// 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
// Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]

const removeDuplicates = array => array.filter( (n,m) => array.indexOf(n) === m) 
const array = ['x',10,'x',2,'10',10, true,true]
console.log(removeDuplicates(array));
// OTRA FORMA ES CON SET
// cpmst sinDuplicados = (elementes = undefined) => [...new Set (elements)];