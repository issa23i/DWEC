/**1. Realiza un programa que cuando se pulse 
 * un botón con 
 * el texto “Nuevo número”, añada un elemento con 
 * un número aleatorio a una lista desordenada 
 * (elemento UL). */

// variable document
const $d = document

// crear lista
const listaDesordenada = $d.createElement('ul')
const itemListaDesordenada = $d.createElement('li')
itemListaDesordenada.textContent(Math.random()*(100))
// $d.appendChild(listaDesordenada)
// .appendChild(itemListaDesordenada)
// .textContent(Math.random()*(100))


