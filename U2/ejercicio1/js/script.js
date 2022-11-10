/**1. Realiza un programa que cuando se pulse 
 * un botón con 
 * el texto “Nuevo número”, añada un elemento con 
 * un número aleatorio a una lista desordenada 
 * (elemento UL). */

// variable document
const $d = document

// encontrar el botón con textContent "Nuevo número"
const botones = $d.querySelectorAll("button")
let $btn
for (const boton of botones) {
    if (boton.textContent == "Nuevo número" ){
        $btn = boton
    }
}
const $btnNuevoNumero = $btn

// color random
const setRandomColor = () => `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`

// eventListener
const addUl = () => {
    // crear lista desordenada
    const $listaDesordenada = $d.getElementById("resultado")
    const $itemListaDesordenada = $d.createElement('li')
    // hacer li hijo de ul
    $listaDesordenada.appendChild($itemListaDesordenada)
    // añadir un número random en la lista
    $itemListaDesordenada.textContent = parseInt(Math.random()*(100))
    // añadir estilo aleatorio
    $itemListaDesordenada.style.backgroundColor=setRandomColor()
}
$btnNuevoNumero.addEventListener("click",addUl)


///////////////// crear botón con el número random y luego mostrar un alert con el número al pulsar el botón
const $btnNuevoBoton = $d.querySelector('[name="boton"]')

const addButton = () => {
    const $newButton = $d.createElement('button')
    let random = parseInt(Math.random()*(100))
    $newButton.textContent = random
    $btnNuevoBoton.insertAdjacentElement("afterend",$newButton)
    console.log($newButton.setAttribute('name', random))
    $newButton.addEventListener("click", showRandom)
}
const showRandom = () => {
    alert(this.getAttribute('name'))
}

$btnNuevoBoton.addEventListener("click",addButton)



