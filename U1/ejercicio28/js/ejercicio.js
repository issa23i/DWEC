/**
28. En un vector de cadenas, indicar:
**/
let strings = ['string1' ,'dasoosnbdk' ,'string2', 'string3a', 'string4AB_', 'Calatayud', 'Bilbo', 'aa4iuaaa2sa', '9aba', '', '.', 'Diez']
console.log(strings.toString());
// a. La cadena más corta.
console.log(`La cadena más corta del array es : ${strings.sort( (a,b) => a.length - b.length)[0]}`);
// b. La cadena más larga.
console.log(`La cadena más larga del array es : ${strings.sort( (a,b) => b.length - a.length)[0]}`);
// c. La cadena con más letras ‘a’.
/**
 * 
 * @param {*} str 
 * @returns el largo de la cadena, si es nulo retorna 0
 */
let regEx = /a+/g
const getAs = (str,rgEx) => {
    let matches = str.match(rgEx)
    if (matches == null) {
         return 0 
    } else {
        return matches.length
    }
}
strings.sort( (a,b) => getAs(b) - getAs(a)) // ordena por números de a que encuentra en cada cadena

console.log(`La cadena con más "a" es : ${strings[0]}`); // devuelve la primera posición del vector

// d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.
regEx = /b+/g
let regxMatchs = (str, regEx) => str.match(regEx)
let arrayResults = strings.filter(x => regxMatchs(x,regEx))


console.log(`Hay ${arrayResults.length} coincidencias encontradas en las cadenas : \n ${arrayResults.join()}`);

// let bsArray = Array.cuantasB.apply(null,strings)

