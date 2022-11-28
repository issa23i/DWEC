/**
 * 12. Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse
si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios.
 */

const $d = document
const $btn = $d.querySelector('[type="button"]')

const compararArrays = (array1, array2) => {
    // si tienen el mismo número de elementos
    if(array1.length === array2.length){
        for (let i = 0; i < array1.length; i++) {
            // si los elementos no son iguales
            if (array1[i] !== array2[i]){
                return false
            }
        }
    } else { // no tienen el mismo número de elementos
        return false
    }
    return true
}

const validar = (e) => {
    let palabra1 = $d.querySelector('#palabra1').value
    let palabra2 = $d.querySelector('#palabra2').value
    // convertir a array
    palabra1 = palabra1.split('')
    palabra2 = palabra2.split('')
    // ordenar
    palabra1.sort()
    palabra2.sort()
    // preventDefault
    if( ! compararArrays(palabra1,palabra2) ){
        e.preventDefault();
        alert("No son anagramas")
    } else {
        alert("Enviado con éxito")
    }
}

$btn.addEventListener('click',validar)