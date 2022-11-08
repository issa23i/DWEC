/**
 * 3. Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad.
 */
const $d = document
const $body = $d.body
const $fieldset = $d.querySelector('fieldset') // para insertar después del primer fieldset

const $botonMarcar = $d.querySelector('[name="marcar"]')
const $botonDesmarcar = $d.querySelector('[name="desmarcar"]')

const createCheckboxes = n => {
    for (let i = 0; i < n; i++) {
        let numRandom = parseInt(Math.random() * 100)
        let $checkbox = $d.createElement('input')
        $checkbox.type = 'checkbox'
        $checkbox.setAttribute('name', 'opcion')
        $fieldset.insertAdjacentElement('beforeend',$checkbox)
        let $label = $d.createElement('label')
        $label.setAttribute('for', 'opcion')
        $label.textContent = numRandom
        $fieldset.insertAdjacentElement('beforeend',$label)
    }
}
createCheckboxes(100)

const marcar = () => {
    let checkboxes = $d.querySelectorAll('[name="opcion"]')
    for (const chkb of checkboxes) {
        chkb.setAttribute('checked', true)
    }
}

const desmarcar = () => {
    let checkboxes = $d.querySelectorAll('[name="opcion"]')
    for (const chkb of checkboxes) {
        chkb.removeAttribute('checked')
    }
}

$botonMarcar.addEventListener("click",marcar)
$botonDesmarcar.addEventListener("click",desmarcar)
