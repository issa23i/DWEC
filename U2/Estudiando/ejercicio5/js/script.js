/**
 * 5. Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
nos muestre la posición actual del ratón.
 */

const $d = document
const coordenadas = (e) => {
    let $h1 = $d.querySelector('h1')
    $h1.textContent = `${e.clientX} - ${e.clientY}`
}
$d.addEventListener('mousemove',coordenadas)


