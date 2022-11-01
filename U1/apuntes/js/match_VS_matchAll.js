let frase = 'En un lugar de la mancha, de cuyo nombre no quiero acordarme...'
let regexp = new RegExp(/\.{2}/g)
let matches1 = frase.match(regexp)
console.log(matches1);

let matches2 = frase.matchAll(regexp)
for (const i of matches2) {
    console.log(i);
}
let matches3 = frase.lastIndexOf('..')
console.log(matches3);

cadena = '.'
contador = 0
while (frase.indexOf(cadena) !== -1){
    contador++
    frase = frase.substring(0,frase.lastIndexOf(cadena))
}
console.log(contador);
