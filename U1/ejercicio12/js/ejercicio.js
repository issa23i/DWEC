/**
12. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F
 */

// F-->C ((32 °F − 32) × 5 / 9 = 0 °C)
// C-->F ((32 °C × 9 / 5) + 32 = 89,6 °F)

let num, deg

function degresTo (num, deg){
    switch (deg) {
        case 'c':
            num = (num*9/5)+num
            deg = 'F'
            console.log(`${num} ${deg}`) 
            break;
        case 'C':
            num = (num*9/5)+num
            deg = 'F'
            console.log(`${num} ${deg}`) 
            break;
        case 'f':
            num = (num-32)*5/9
            deg = 'C'
            console.log(`${num} ${deg}`)
            break;
        case 'F':
            num = (num-32)*5/9
            deg = 'C'
            console.log(`${num} ${deg}`)
            break;    
        default:
            console.log(`No ha ingresado un tipo de grados correctos`)
            break;
    }
} 

while (deg !== 'c' && deg !== 'C' && deg !== 'f' && deg !== 'F'){
    num = parseFloat(prompt(`Ingrese los grados`))
    deg = prompt(`Ingrese tipo de grados: C para Celsius F para Fahrenheit`)
    degresTo(num, deg)
}