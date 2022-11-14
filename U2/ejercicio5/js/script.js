/**
 * 5. Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
nos muestre la posición actual del ratón.
<<<<<<< HEAD
*/
const $d = document
const $body = $d.body
const $p = $d.querySelector('p')

const coordenadasXY = () => {
    $body.addEventListener('mousemove',mostrarCoordenadas)
}

const mostrarCoordenadas = (e) => {
    $p.textContent = (`${e.clientX}-${e.clientY}`);
}


coordenadasXY();



=======
 */
const $d = document
const $body = $d.body
const $p = $d.querySelector('p')
>>>>>>> c7f8b733e00c190683466a64e55504d6e4b165f1

const coordenadas = () => {
    $body.addEventListener('mousemove', (e) => $p.textContent = `${e.clientX} - ${e.clientY}`)
}
coordenadas()