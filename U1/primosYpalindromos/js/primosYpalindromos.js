/**
 * 12. PRIMOS Y PALÍNDROMOS
Realiza un programa que calcule cuántos números son a la vez primos y palíndromos desde el 1 hasta
100000. Debe guardar todos ellos en un array y al finalizar el proceso imprimir dicho array.
Definición de número primo:
https://es.wikipedia.org/wiki/N%C3%BAmero_primo
Definición de palíndromo:
https://es.wikipedia.org/wiki/Pal%C3%ADndromo
 */

const primo = n => {
    let primo = true
    for (let i = n-1; i > 1; i--) {
        if(n%i===0){primo = false}
    }
    return primo
}

const palindromo = n => {
    nArray = n.toString().split("")
    let alReves = [...nArray].reverse()
    let palindromo = true
    for (let i = 0; i < nArray.length; i++) {
        if (nArray[i]!==alReves[i]) {
            palindromo = false
        }      
    }
    return palindromo
}


const primosYpalindromos = () => {
    let pYp = []
    for (let i = 3; i < 10000; i++) {
        if (primo(i)) {
            if (palindromo(i)){
                pYp.push(i)
            }
        }
    }
    return pYp
}
console.log(primosYpalindromos());