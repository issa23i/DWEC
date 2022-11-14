/**
 * 8. Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
*   fondo a un color aleatorio.
 */

const $d = document
const $body = $d.body

const color = () => {
    $body.addEventListener('dblclick', pintar)
}

const pintar =  () =>  {
    $body.style.cssText =`background-color:${setRandomColor()}`
}

// color random
const setRandomColor = () => `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`

color()
