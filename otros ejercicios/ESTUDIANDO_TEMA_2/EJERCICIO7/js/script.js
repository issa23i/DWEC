/**
 * 7. Realiza un programa que cuando se presione una tecla, calcule cuántos DNIs de 4 cifras
(del 0001 al 9999) tienen esa letra y te mostrará los DNIs y sus letras en un elemento
HTML(Ejemplo un <p> y una lista desplegable) .
 */

const $d = document
const $p = $d.querySelector('p')
const $select = $d.querySelector('select')

const letraDNI = (n) => {
    let resto = n%23
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    return letras[resto]
}

const getDNI = (n) => {
    let dni = ''
    let letra = letraDNI(n)
    if (n < 1000) {
        dni = `00000${n}${letra}`
    } else if (n < 100) {
        dni = `000000${n}${letra}`
    } else if (n < 10) {
        dni = `0000000${n}${letra}`
    } else {
        dni = `0000${n}${letra}`
    }
    return dni
}

const mostrar = (e) => {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    let letra = e.key.toUpperCase()
    let $optionGroup = ''
    if (letras.findIndex(l => letra === l) !== -1) {
        $optionGroup = $d.createElement('optgroup')
        $optionGroup.label = `LETRA  ${letra}`
        $select.appendChild($optionGroup)
    }

    for (let i = 1; i < 10000; i++) {
        if (letraDNI(i) === letra) {
            console.log(` ¿ La letra ${letraDNI(i)} es igual a ${letra} ? ${letraDNI(i)===letra}`);
            let $option = $d.createElement('option')
            $option.value = `${i}${letra}`
            $option.textContent = getDNI(i)
            if($optionGroup !== ''){
                $optionGroup.appendChild($option)
            }
            
        }
    }
}

$d.addEventListener('keypress',mostrar)




