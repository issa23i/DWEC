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
// esta igual que la anterior !!!!!!!!!!!!!
let regEx = /a+/g
// aquí match tiene que usarse en un string, hacer iteracion
const getAs = (str,rgEx) => {
    let matches = str.toString().match(rgEx)

    if (matches == null) {
         return 0 
    } else {
        return matches.length
    }
}

strResult = strings.reduce ( (a,b) => getAs(a,regEx) - getAs(b,regEx))
console.log(`La cadena con más "a" es : ${strResult}`); // devuelve la primera posición del vector

// d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.

///// este con reduce
regEx = /b+/g
let regxMatchs = (str, regEx) => str.match(regEx)
let arrayResults = strings.filter(x => regxMatchs(x,regEx))


console.log(`Hay ${arrayResults.length} coincidencias encontradas en las cadenas : \n ${arrayResults.join()}`);

// let bsArray = Array.cuantasB.apply(null,strings)

