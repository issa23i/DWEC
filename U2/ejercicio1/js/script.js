/**1. Realiza un programa que cuando se pulse 
 * un botón con 
 * el texto “Nuevo número”, añada un elemento con 
 * un número aleatorio a una lista desordenada 
 * (elemento UL). */

// variable document
const $d = document

// encontrar el botón con textContent "Nuevo número"
const botones = $d.querySelectorAll("button")
let btn
for (const boton of botones) {
    if (boton.textContent == "Nuevo número" ){
        btn = boton
    }
}
const btnNuevoNumero = btn

// eventListener
const addUl = () => {
    // crear lista desordenada
    const listaDesordenada = $d.getElementById("resultado")
    const itemListaDesordenada = $d.createElement('li')
    // hacer li hijo de ul
    listaDesordenada.appendChild(itemListaDesordenada)
    // añadir un número random en la lista
    itemListaDesordenada.textContent = parseInt(Math.random()*(100))
    // insertar después de el elemento e la lista desordenada
    
}
btnNuevoNumero.addEventListener("click",addUl)

// hacer que además del número , el color también sea aleatorio
