/**
15. Indica si un NIF es válido o no.
 */

/**


0   1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22
T	R	W	A	G	M	Y	F	P	D	X	B	N	J	Z	S	Q	V	H	L	C	K	E

 */
/// cambiar

let dni = prompt('Introduzca un dni')
// array con las letras
let characters = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']


const dniIsCorrect = (dni) => {
    // separar número de la letra
    let dniNumber = parseInt(dni.substring(0,8))
    // la posición 9 y la convierte a mayúsculas
    let dniChar = dni.substring(8,9).toUpperCase()
    characters[dniNumber%23] === dniChar ? console.log(true) : console.log(false);
}

dniIsCorrect(dni)



