let str = "Hola me llamo Isabel Pastor López y estoy estudiando la expresiones regulares para JavaScript. Hoy es 31 de octubre de 2022"

// x(?=y) Aserción anticipada: Coincide con "x" solo si "x" va seguida de "y". 
let reg = new RegExp(/I(?=sabel)/)
console.log(reg.exec(str)); // 'I'

// x(?!y) Aserción anticipada negativa: Coincide con "x" solo si "x" no está seguida de "y".
reg = new RegExp(/I(?!sabel)/)
console.log(reg.exec(str));

// (?<=y)x	Aserción de búsqueda inversa: coincide con "x" solo si "x" está precedida por "y".
reg = new RegExp(/(?<=I)sabel/)
console.log(reg.exec(str));

// (?<!y)x	Aserción de búsqueda inversa negativa: coincide con "x" solo si "x" no está precedida por "y"
reg = new RegExp(/(?<!I)sabel/)
console.log(reg.exec(str));

reg = new RegExp(/\w+\ses\s\d{2} \bde\b octubre de \d{4}$/)
console.log(reg.exec(str));

reg = new RegExp(/^[A-Z][a-z]{3}\s\w+\s\w*\sIsabel/)
console.log(reg.exec(str));

// x|y	Coincide con "x" o "y"
reg = new RegExp(/estoy\s(esdudiando|estudiando)\b/)
console.log(reg.exec(str));

// [xyz] [a-c]	Un juego de caracteres. Coincide con cualquiera de los caracteres incluidos.
reg = new RegExp(/para\s\b[I-K][av]{3}S[c-t]+/)
console.log(reg.exec(str));

// x? Halla 0 o 1 vez el elemento "x" anterior
reg = new RegExp(/3\d?/)
console.log(reg.exec(str));

// x{n,} Donde "n" es un número entero positivo, concuerda con al menos "n" apariciones del elemento "x".
// x{n,m} Donde "n" es 0 o un número entero positivo, 
// "m" es un número entero positivo y m > n, reconoce por lo menos "n" 
// y como máximo "m" apariciones del elemento "x" anterior. 
reg = new RegExp(/\w{10,}\s[a-z]{8,9}/)
console.log(reg.exec(str));

