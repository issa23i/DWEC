/**
 * 3. Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad.
 */

const $d = document
const $body = $d.body
const $fieldset = $d.querySelector('fieldset')
const $btnMarcar = $d.querySelector('#marcar')
const $btnDesmarcar = $d.querySelector('#desmarcar')

const numRandom = () => parseInt(Math.random() * 100)

const createCheckboxes = (n) => {
    for (let i = 0; i < n; i++) {

        let num = numRandom()

        let $chbox = $d.createElement('input')
        $chbox.setAttribute('type', 'checkbox')
        $chbox.setAttribute('name',num)
        $chbox.setAttribute('value',num)

        let $label = $d.createElement('label')
        $label.setAttribute('for',num)
        $label.textContent = num

        let $br = $d.createElement('br')

        
        $fieldset.insertAdjacentElement('beforeend', $chbox)
        $fieldset.insertAdjacentElement('beforeend', $label)
        $fieldset.insertAdjacentElement('beforeend', $br)
    }
}

const marcar = () => {
    let inputs = $d.querySelectorAll('input')
    for (const input of inputs) {
        input.checked = true
    }
}
const desMarcar = () => {
    let inputs = $d.querySelectorAll('input')
    for (const input of inputs) {
        input.checked = false
    }
}
createCheckboxes(100)

$btnMarcar.addEventListener('click', marcar)
$btnDesmarcar.addEventListener('click', desMarcar)




