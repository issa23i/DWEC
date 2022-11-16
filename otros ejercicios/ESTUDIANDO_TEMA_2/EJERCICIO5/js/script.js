/**
 * 5. Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
nos muestre la posición actual del ratón.
 */

const $d = document
const $p = $d.querySelector('p')

printPosition = (evento) => {
    $p.textContent = `${evento.clientY} - ${evento.clientX} `    
}

$d.addEventListener('mousemove', printPosition)