/**
 * 12. Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse
si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios.
 */

const $d = document
const $form = $d.querySelector('form')

const validar = (e) => {
    let str1 = e.target.querySelector('input:first-of-type').value
    let str2 = e.target.querySelector('input:last-of-type').value
    if( ! esAnagrama(str1, str2) ){
        e.preventDefault()
        let p = document.createElement('p')
        p.textContent = `${str1} y ${str2} no son anagramas.`
        e.target.insertAdjacentElement('afterend',p)
    }
}

$form.addEventListener('submit', validar)

const esAnagrama = (string1, string2) => {
    let anag1 = string1.split('').sort().toString().toLowerCase()
    let anag2 = string2.split('').sort().toString().toLowerCase()
    return anag1 === anag2
}