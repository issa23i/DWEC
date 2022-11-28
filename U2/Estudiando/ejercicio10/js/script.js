/**
 * 10. Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario
deberá validar si la letra es correcta al:
a) Perder el foco del campo de texto donde se introduce el DNI.
b) Enviar el formulario, cancelando el envío si el formato no es correcto.
 */
const $d = document
const $input = $d.getElementById('dni')
const $form = $d.querySelector('form')

const validarLetra = (e) => {
    let $p = $d.createElement('p')
    if(letraDNI(e.target.value)){
        $p.textContent = '¡Correcto!'
    } else {
        $p.textContent = '¡Dni no válido!'
    }
    $form.appendChild($p)
    setTimeout(() => {
        $p.remove()
    }, 3000);
}

const enviar = (e) => {
    if( ! letraDNI($input.value) ){
        e.preventDefault()
        alert('No se puede enviar el formulario, DNI incorrecto')
    } 
}

 $input.addEventListener('blur',validarLetra)
 $form.addEventListener('submit',enviar)

const letraDNI = (dni) => {
    let n = dni.slice(0,8)
    let letra = dni.slice(8,9)
    let resto = n%23
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    return letras[resto]===letra.toUpperCase()
}

