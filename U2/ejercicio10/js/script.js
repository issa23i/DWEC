/**
 * 10. Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario
deberá validar si la letra es correcta al:
a) Perder el foco del campo de texto donde se introduce el DNI.
b) Enviar el formulario, cancelando el envío si el formato no es correcto.
 */

const $d = document
const $input = $d.querySelector('input')
const $btn = $d.querySelector('button')

const letraDNI = (n) => {
    let resto = n%23
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    return letras[resto]
}

const dniOK = (dni) => {
    let num, letra
    num = parseInt(dni.slice(0,8))
    letra = dni.slice(8,9)
    return letraDNI(num) === letra
}

getLetra('44753262T')
const validarDNI = (e) => {
    e.preventDefault();
    if($input.value=="" || (!dniOK($input.value))){
        alert(`Introduzca un dni válido`)
        return
    }
    alert("Formulario enviado correctamente")
}

$input.addEventListener('blur',validarDNI)
$btn.addEventListener('click',validarDNI)

