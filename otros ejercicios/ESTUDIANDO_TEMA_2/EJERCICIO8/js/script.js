/**
 * 8. Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
fondo a un color aleatorio.
 */
const $d = document
const $body = $d.body

const cambiaColor = () => {
    let r,g,b
    r = parseInt(Math.random()*255)
    g = parseInt(Math.random()*255)
    b = parseInt(Math.random()*255)
    $body.style = `background-color: rgb(${r},${g},${b})`
}

$d.addEventListener('dblclick',cambiaColor)

