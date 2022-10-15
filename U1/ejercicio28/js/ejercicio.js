'use strict';
/**
28. En un vector de cadenas, indicar:
**/
let strings = ['string1' ,'dasoosnbdk' ,'string2', 'string3a', 'string4AB_', 'Calatayud', 'Bilbo', 'aa4iuaaa2sa', '9aba', '', '.', 'Diez']
console.log(strings.toString());
// a. La cadena más corta.
console.log(`La cadena más corta del array es : ${strings.reduce( (a,b) => a.length<b.length ? a : b )}`);

// b. La cadena más larga.
console.log(`La cadena más larga del array es : ${strings.reduce( (a,b) => a.length<b.length ? b : a )}`);

// c. La cadena con más letras ‘a’.
let regEx = /a+/g
console.log(`La cadena con más "a" es : ${strings.reduce( (strA, strB) => (strA.split('').filter(c => c==='a')).length > (strB.split('').filter(c => c==='a')).length ? strA : strB)}`)

// d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.

regEx = /b+/g
let regxMatchs = (str, regEx) => str.match(regEx)
let arrayResults = strings.filter(x => regxMatchs(x,regEx))

console.log(`Hay ${arrayResults.length} coincidencias encontradas en las cadenas : \n ${arrayResults.join()}`);


