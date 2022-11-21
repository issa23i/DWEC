/**
 * 12. Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse
si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios.
 */

const $d = document
const $input1 = $d.querySelector('#campo1')
const $input2 = $d.querySelector('#campo2')

const $btn = $d.querySelector('button')

const anagrama = (str1, str2) => {
    let array1 = str1.toUpperCase().split('')
    let array2 = str2.toUpperCase().split('')
    array1 = array1.sort((a,b) => a -b)
    array2 = array2.sort((a,b) => a -b)
    str1 = array1.toString()
    str2 = array2.toString()
    return str1 === str2
}


const validar = (e) => {
    if(!anagrama($input1.value,$input2.value)){
        e.preventDefault()
        alert("No son anagramas")
    }
}

$btn.addEventListener('click', validar)

