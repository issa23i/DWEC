/**
 * 12. Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse
si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios.
 */

const $d = document
const $inputPalabra1 = $d.querySelector('#palabra1')
const $inputPalabra2 = $d.querySelector('#palabra2')
const $btn = $d.querySelector('[type="button"]')

const compararArrays = (array1, array2) => {
    let iguales = true
    // si tienen el mismo número de elementos
    if(array1.length === array2.length){
        for (let i = 0; i < array1.length; i++) {
            // si los elementos no son iguales
            if (array1[i] !== array2[i]){
                iguales = false
            }
        }
    } else { // no tienen el mismo número de elementos
        iguales = false
    }
    
    return iguales
}

const validar = (e) => {
    let palabra1 = $inputPalabra1.value
    let palabra2 = $inputPalabra2.value
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