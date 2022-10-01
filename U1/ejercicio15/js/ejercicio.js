/**
15. Indica si un NIF es válido o no.
 */

/**
 * Para calcular la letra del documento, se aplica la siguiente fórmula:

Dividimos el número completo del DNI entre 23, sin sacar decimales.
Utilizamos el resto de la división para calcular la letra. Dicho resto estará siempre entre 0 y 22.
Según el valor obtenido, sabremos qué letra corresponde siguiendo el siguiente código: TRWAGMYFPDXBNJZSQVHLCKE. Aquí, la T corresponde al valor 0 y la E al 22.
Tal como explican en la web del Ministerio del Interior, podemos hacerlo aplicando la siguiente tabla:

0   1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22
T	R	W	A	G	M	Y	F	P	D	X	B	N	J	Z	S	Q	V	H	L	C	K	E

 */

let dni = prompt('Introduzca un dni')
// array con las letras
let characters = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
// separar número de la letra
let dniNumber = parseInt(dni.substring(0,8))
// la posición 9 y la convierte a mayúsculas
let dniChar = dni.substring(8,9).toUpperCase()
// comprobación
console.log(`${dniNumber} ${dniChar}`);
const isCorrect = (num, ch) => characters[num%23] === ch
console.log(isCorrect(dniNumber,dniChar));



