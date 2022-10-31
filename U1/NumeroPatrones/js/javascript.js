// 5. NÚMERO PATRONES
// Realiza una aplicación web que solicite una cadena de texto.
// El programa debe decir cuántas veces ocurre cada uno de estos patrones sin distinguir mayúsculas y
// minúsculas: “00” “101”, “ABC”, “HO”.
// Un carácter puede formar parte de más de un patrón encontrado. Por ejemplo:
// En la cadena “000” el patrón “00” aparece dos veces (una empieza en la posición 0 y otra empieza en
// la posición 1).
// Internamente el programa realizará la cuenta de patrones con una función definida como
// function numeroPatrones(texto)
// que devolverá un número entero con el número de patrones encontrados.

const numeroPatrones = (txt) => {
    let regex1, regex2, regex3, regex4
    regex1 = new RegExp(/00/gi)
    regex2 = new RegExp(/101/gi)
    regex3 = new RegExp(/ABC/gi)
    regex4 = new RegExp(/HO/gi)
    let regexs = [regex1,regex2,regex3,regex4]
    let arrayResult = []
    for (const r of regexs) {
        let texto = txt
        contador = 0
        while(texto.search(r)>=0){
            texto = texto.substring(texto.search(r)+1)
            contador++
        }
        arrayResult.push({expresionRegular:r,coincidencias:contador})
    }
    return arrayResult
}
console.log(numeroPatrones("1000 101 llHOll 3ABC 4A BC000 00 101"));

// const numeroPatrones2 = (txt) => {
//     let regex1, regex2, regex3, regex4
//     regex1 = new RegExp(/(00)/gi)
//     regex2 = new RegExp(/(101)/gi)
//     regex3 = new RegExp(/(ABC)/gi)
//     regex4 = new RegExp(/(HO)/gi)
//     let regexs = [regex1,regex2,regex3,regex4]
//     let arrayResult = []
//     for (const r of regexs) {
//         let matches = [...txt.match(r)]
//         arrayResult.push(matches)
//     }
//     return arrayResult
// }
// console.log(numeroPatrones2("1000 101 llHOll 3ABC 4A BC000 00 101"));