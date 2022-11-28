// 4. Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón
// sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM).
// También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
// elementos desaparecidos (pero no los eliminados).

const $d = document
const $pUno = $d.getElementById('uno')
const $pDos = $d.getElementById('dos')
const $pTres = $d.getElementById('tres')
const $btn = $d.querySelector('button')

const desaparecer = (e) => {
    e.target.setAttribute('class','hidden')
}
const reaparecer = () => {
    let parrafos = $d.querySelectorAll('p')
    for (const p of parrafos) {
        if (p.getAttribute('class')) p.removeAttribute('class')
    }
}
const borrar = (e) => {
    e.target.remove()
}
$pUno.addEventListener('dblclick',borrar)
$pDos.addEventListener('dblclick',borrar)
$pTres.addEventListener('dblclick',borrar)
$pUno.addEventListener('mouseleave',desaparecer)
$pDos.addEventListener('mouseleave',desaparecer)
$pTres.addEventListener('mouseleave',desaparecer)
$btn.addEventListener('click',reaparecer)