/**
 * 3. Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad.
 */

const $d = document
const $btnMarcar = $d.querySelector('button:first-of-type')
const $btnDesmarcar = $d.querySelector('button:last-of-type')
const marcar = () => {
    let checkboxes = $d.querySelectorAll('input')
    for (const chkb of checkboxes) {
        chkb.setAttribute('checked',true)
    }
}
const desmarcar = () => {
    let checkboxes = $d.querySelectorAll('input')
    for (const chkb of checkboxes) {
        if(chkb.getAttribute('checked') )chkb.removeAttribute('checked')
    }
}
$btnMarcar.addEventListener('click', marcar)
$btnDesmarcar.addEventListener('click', desmarcar)

const crearCheckboxes = () => {
    let $br = $d.querySelector('br')
    for (let i = 0; i < 100; i++) {
        let aleatorio = parseInt(Math.random() * 100)
        let $chkbx = $d.createElement('input')
        $chkbx.setAttribute('type','checkbox')
        $chkbx.setAttribute('id',i)
        $chkbx.setAttribute('value',aleatorio)
        $br.insertAdjacentElement('afterend',$chkbx)
        let $label = $d.createElement('label')
        $label.setAttribute('for',i)
        $label.textContent = aleatorio
        $chkbx.insertAdjacentElement('beforebegin',$label)
    }
}
crearCheckboxes()