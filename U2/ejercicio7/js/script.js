/**
 * 7. Realiza un programa que cuando se presione una tecla, calcule cuántos DNIs de 4 cifras
(del 0001 al 9999) tienen esa letra y te mostrará los DNIs y sus letras en un elemento
HTML(Ejemplo un <p> y una lista desplegable) .
 */

const $d = document
const $body = $d.body
const $p = $d.querySelector('p')
const $select = $d.querySelector('select')
$select.style.visibility = 'hidden'

const DNIs = () => {
    $body.addEventListener('keyup',getDNIS)
}

/**
 * Dado un número, devuelve la letra del DNI
 * @param {number} n 
 * @returns string
 */
 const getLetraDNI = (n) => {
    let resto = n%23
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    return letras[n%23]
 }

 /**
  * Dada una letra, devuelve una lista con los dnis de esa letra y el número de dnis
  * @param {string} letra 
  */
const getDNIS = (e) => {

    /// borrar si ya se ha pulsado antes una tecla
    let options = $d.querySelectorAll('option')
    if (options.length>0){
        for (const option of options) {
            option.remove()
        }
    }

    let letra = e['key'].toUpperCase() // la letra en mayúsculas
    let contador = 0
    let dni = ''
    for (let i = 1; i < 10000; i++) {
        $select.style.visibility = 'visible'
        if (getLetraDNI(i) === letra){
            const $option = $d.createElement('option')
            dni = `${i}${letra}`
            $option.value = dni
            $option.textContent = dni
            $select.insertAdjacentElement('beforeend', $option) 
            contador++
        }
        $p.textContent  = `La letra ${letra} aparece ${contador} veces`
    }
}
DNIs()


 