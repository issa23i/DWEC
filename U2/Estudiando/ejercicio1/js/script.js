/**1. Realiza un programa que cuando se pulse 
 * un botón con 
 * el texto “Nuevo número”, añada un elemento con 
 * un número aleatorio a una lista desordenada 
 * (elemento UL). */

const $d = document
const $btn = $d.querySelector('button')


numAleatorio = () => {
    let $li = $d.createElement('li')
    $li.textContent = parseInt (Math.random() * 100)
    let $ul = $d.querySelector('ul')
    $ul.insertAdjacentElement('beforeend',$li)
}

$btn.addEventListener('click',numAleatorio)

